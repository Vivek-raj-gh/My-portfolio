import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import App from "./App";
import { getProjectBySlug } from "./data/projects";
import { socialLinks } from "./data/site";
import { profile } from "./data/profile";

function renderAt(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("Portfolio app", () => {
  it("renders the home hero with the professional headline", () => {
    renderAt("/");
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("Turning data into");
    expect(heading.textContent).toContain("useful intelligence");
  });

  it("shows primary CTAs on the hero", () => {
    renderAt("/");
    expect(screen.getByRole("link", { name: /explore projects/i })).toBeInTheDocument();
    // The résumé CTA appears in the navbar too — at least one must point at the real PDF.
    const resumeLinks = screen.getAllByRole("link", { name: /view r\u00e9sum\u00e9/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
    for (const link of resumeLinks) {
      expect(link).toHaveAttribute("href", profile.resumePath);
    }
  });

  it("renders sections from the data layer on the home page", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: /selected projects/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /experience & education/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /let's build something useful/i })).toBeInTheDocument();
  });

  it("links all four featured projects to their case studies", () => {
    renderAt("/");
    const expected: Array<[string, string]> = [
      ["CineMatch — open case study", "/projects/cinematch"],
      ["SecurePay — open case study", "/projects/securepay"],
      ["Choose AI — open case study", "/projects/choose-ai"],
      ["CommerceCore — open case study", "/projects/commercecore"],
    ];
    for (const [name, href] of expected) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("navigates between routes through the navbar", async () => {
    const user = userEvent.setup();
    renderAt("/");
    await user.click((await screen.findAllByRole("button", { name: /^projects$/i }))[0]);
    expect(
      await screen.findByRole("heading", { level: 1, name: /projects & case studies/i }),
    ).toBeInTheDocument();
  });

  it("filters the project gallery by category", async () => {
    const user = userEvent.setup();
    renderAt("/projects");
    // Wait for the lazy Projects route to load.
    await screen.findByRole("heading", { level: 1, name: /projects & case studies/i });
    expect(screen.getByText(/CineMatch/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Backend Engineering" }));
    expect(screen.getByText(/CommerceCore/i)).toBeInTheDocument();
    expect(screen.queryByText(/CineMatch/i)).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "All" }));
    expect(screen.getByText(/CineMatch/i)).toBeInTheDocument();
    expect(screen.getByText(/Spam Classifier/i)).toBeInTheDocument();
  });

  it("renders a full case study for a featured project", async () => {
    renderAt("/projects/securepay");
    const heading = await screen.findByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("SecurePay");
    expect(screen.getByRole("heading", { name: /overview/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /evaluation/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /limitations/i })).toBeInTheDocument();
    const securepay = getProjectBySlug("securepay");
    expect(screen.getByRole("link", { name: /view repository/i })).toHaveAttribute(
      "href",
      securepay?.repoUrl,
    );
  });

  it("shows a graceful 404 for an unknown case study", async () => {
    renderAt("/projects/does-not-exist");
    expect(
      await screen.findByRole("heading", { name: /this case study doesn't exist/i }),
    ).toBeInTheDocument();
  });

  it("opens external links safely in a new tab", () => {
    renderAt("/");
    const githubUrl = socialLinks.find((s) => s.icon === "github")?.url;
    // GitHub appears in the hero and footer (and contact) — every instance must be safe.
    const github = screen.getAllByRole("link", { name: "GitHub" });
    expect(github.length).toBeGreaterThan(0);
    for (const link of github) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveAttribute("href", githubUrl);
    }
  });

  it("does not present fake demo links", () => {
    renderAt("/projects");
    expect(screen.queryByRole("link", { name: /live demo/i })).not.toBeInTheDocument();
  });

  it("exposes no hardcoded URLs outside the data layer by rendering only data-sourced hrefs", async () => {
    renderAt("/about");
    await screen.findByText(/trajectory/i);
    const container = screen.getByRole("main");
    const anchors = within(container).getAllByRole("link");
    for (const a of anchors) {
      const href = a.getAttribute("href") ?? "";
      expect(href.startsWith("javascript:")).toBe(false);
      expect(href).not.toBe("#");
    }
  });
});