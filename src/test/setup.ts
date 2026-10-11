import "@testing-library/jest-dom/vitest";

/**
 * jsdom polyfills for browser APIs used by components/animations.
 * IntersectionObserver fires immediately so whileInView reveals are
 * resolved synchronously in tests.
 */

if (!window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}

class IntersectionObserverStub {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds = [];
  private callback: IntersectionObserverCallback;
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  observe(target: Element) {
    this.callback(
      [{ isIntersecting: true, target, intersectionRatio: 1 } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

if (!window.IntersectionObserver) {
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    value: IntersectionObserverStub,
  });
}

// jsdom defines scrollTo/scrollIntoView as not-implemented; stub them.
Object.defineProperty(window, "scrollTo", { writable: true, value: () => {} });
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}