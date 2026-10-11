import type { Project } from "./types";

const GITHUB = "https://github.com/Vivek-raj-gh";

/**
 * Project content — the single source of truth for every project shown.
 *
 * All descriptions are grounded in the actual repositories (READMEs and
 * inspected code). No metrics, deployment claims, or outcomes are invented.
 * demoUrl must be null unless a working live demo has been verified.
 */
export const projects: Project[] = [
  /* ---------------------------------------------------------- */
  /* 01 — CineMatch                                             */
  /* ---------------------------------------------------------- */
  {
    slug: "cinematch",
    index: "01",
    title: "CineMatch — Intelligent Movie Recommendation System",
    shortTitle: "CineMatch",
    category: "Recommendation Systems",
    filter: "Recommendation Systems",
    tagline: "Personalized movie recommendations through collaborative filtering.",
    summary:
      "A movie recommendation engine built on the MovieLens dataset using user–user and item–item collaborative filtering, cosine similarity, and SVD with a Top-N recommendation pipeline.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Surprise", "Matplotlib", "Seaborn"],
    repoUrl: `${GITHUB}/MOVIE-RECOMMENDATION-SYSTEM`,
    demoUrl: null,
    cover: "graph",
    featured: true,
    caseStudy: {
      problem:
        "Streaming platforms expose users to enormous catalogs, and the sheer number of choices makes it hard to decide what to watch — a phenomenon often called analysis paralysis. The problem is to predict what a user is likely to enjoy from their past ratings and the preferences of similar users.",
      motivation: [
        "Personalization is a core part of how streaming services keep content discoverable. Recommendation engines that mirror this problem let me practice the full cycle: understanding data, building a utility matrix, choosing and justifying an algorithm, generating recommendations, and measuring quality.",
        "Collaborative filtering is the natural fit because it learns from user behavior (ratings) rather than requiring hand-authored content features.",
      ],
      data: [
        "The MovieLens dataset — user ratings of movies on a fixed scale.",
        "Analysis covers rating distributions, long-tail behaviour, construction of the user–item utility matrix, and measurement of matrix sparsity.",
      ],
      workflow: [
        "Load and inspect ratings and movie metadata.",
        "Explore rating distributions and the long tail of low-rated items.",
        "Construct the user–item utility matrix and quantify sparsity.",
        "Compute user–user and item–item similarities with cosine similarity.",
        "Apply SVD-based matrix factorization to capture latent factors.",
        "Build a Top-N recommendation engine for personalized suggestions.",
        "Evaluate predictions against held-out ratings.",
      ],
      architecture: [
        "Raw ratings and metadata → exploratory analysis → utility matrix → similarity / factorization models → Top-N recommenders → evaluation.",
      ],
      stackRationale: [
        "Pandas and NumPy handle the tabular and matrix-heavy work.",
        "Scikit-learn provides similarity and evaluation utilities.",
        "Surprise is used for SVD matrix factorization on rating data.",
        "Matplotlib and Seaborn support the exploratory analysis.",
      ],
      implementation: [
        "User–user collaborative filtering finds users with similar rating patterns and aggregates their preferences to predict unseen ratings.",
        "Item–item collaborative filtering finds movies that users commonly rate alike and recommends items similar to ones the user already liked.",
        "Cosine similarity measures closeness between user or item vectors in the rating space.",
        "SVD decomposes the utility matrix into latent user and item factors, allowing prediction of ratings the user has not given yet.",
        "A Top-N recommendation engine ranks candidate movies and returns a personalized shortlist.",
      ],
      evaluation: [
        "RMSE measures how close predicted ratings are to actual held-out ratings.",
        "Precision@K measures how many of the top-K recommended movies are relevant.",
        "Recommendations are also reviewed qualitatively for plausibility.",
        "Specific figures are not stated here — they are regenerated when the notebooks are re-run.",
      ],
      limitations: [
        "High matrix sparsity means many user–item pairs have no signal at all.",
        "Cold-start: new users and new movies have little or no rating history to recommend from.",
        "Popularity bias: collaborative filtering tends to surface already-popular items.",
        "SVD and similarity computations become expensive as the matrix grows.",
      ],
      improvements: [
        "A hybrid approach that blends collaborative signals with content features.",
        "Handling cold-start with metadata-based recommendations.",
        "Hyperparameter tuning and cross-validation for the factorization model.",
        "Broader evaluation using Recall@K and NDCG alongside RMSE and Precision@K.",
        "Implicit feedback (views, searches) in addition to explicit ratings.",
      ],
    },
  },

  /* ---------------------------------------------------------- */
  /* 02 — SecurePay                                             */
  /* ---------------------------------------------------------- */
  {
    slug: "securepay",
    index: "02",
    title: "SecurePay — AI Credit Card Fraud Detection",
    shortTitle: "SecurePay",
    category: "Machine Learning / Anomaly Detection",
    filter: "Machine Learning",
    tagline: "Unsupervised anomaly detection for suspicious financial transactions.",
    summary:
      "An AI-driven fraud detection system using unsupervised anomaly detection — Isolation Forest and Local Outlier Factor — with RobustScaler-based preprocessing on highly imbalanced transaction data.",
    stack: ["Python", "Scikit-learn", "Isolation Forest", "Local Outlier Factor", "RobustScaler", "Pandas", "Matplotlib"],
    repoUrl: `${GITHUB}/CREDIT-CARD-FRAUD-DETECTION`,
    demoUrl: null,
    cover: "signals",
    featured: true,
    caseStudy: {
      problem:
        "Millions of legitimate transactions occur every second, while fraudulent ones are rare, continuously evolving, and very expensive when missed. The challenge is to identify suspicious transactions by learning what normal behaviour looks like and flagging meaningful deviations — without reliable labels for every transaction.",
      motivation: [
        "Fraud detection is a classic anomaly-detection scenario: the minority class is tiny, changes over time, and a supervised model would need abundant, cleanly labelled fraud examples.",
        "The system simulates how FinTech platforms continuously monitor transactions to reduce losses and protect customer trust.",
      ],
      data: [
        "A credit card transaction dataset containing features such as transaction Time and transaction Amount.",
        "The data is highly imbalanced — fraudulent transactions form a small fraction of all records.",
        "Features are scaled using RobustScaler because transaction amounts contain outliers that would distort mean-based scaling.",
      ],
      workflow: [
        "Set up the Python environment and data-science libraries (Pandas, Matplotlib, Scikit-learn).",
        "Load and inspect the transaction dataset.",
        "Clean and prepare the data for modelling.",
        "Scale features with RobustScaler to handle amount outliers.",
        "Train unsupervised anomaly detectors: Isolation Forest and Local Outlier Factor.",
        "Score transactions as anomalous and flag suspicious cases.",
        "Evaluate detection quality against the known fraud labels.",
      ],
      architecture: [
        "Raw transactions → preprocessing and robust scaling → unsupervised anomaly models (Isolation Forest, LOF) → anomaly scores → thresholding → flagged suspicious transactions → evaluation (precision, recall, F1, confusion matrix, precision–recall).",
      ],
      stackRationale: [
        "Scikit-learn ships both anomaly-detection estimators and the evaluation metrics needed.",
        "Isolation Forest isolates anomalies efficiently by randomly partitioning the feature space.",
        "Local Outlier Factor scores points by the density of their neighbourhood.",
        "RobustScaler is chosen over StandardScaler because transaction amounts contain outliers that would otherwise skew scaling.",
      ],
      implementation: [
        "The modelling approach is unsupervised anomaly detection — it learns the patterns of normal transactions and flags deviations as potentially fraudulent.",
        "Isolation Forest constructs isolation trees and measures how easily a point can be isolated; easy isolation implies likely anomaly.",
        "LOF compares the local density of a point to neighbours; points in sparser regions score as outliers.",
        "RobustScaler centres and scales the data using the median and IQR, reducing the influence of extreme amounts.",
        "Contamination assumptions and thresholds determine how many transactions get flagged.",
      ],
      evaluation: [
        "Precision, recall, F1-score and confusion matrices evaluate how well flagged transactions match actual fraud.",
        "Precision–recall analysis is used because it is the right lens for heavily imbalanced data — accuracy alone is misleading when fraud is rare.",
        "The trade-off between false positives (legitimate transactions flagged) and false negatives (fraud missed) is central to the results.",
        "Specific numbers are omitted until the notebooks are re-run and metrics verified on the current data.",
      ],
      limitations: [
        "Anomaly detection is not the same as supervised fraud classification; flags describe deviation from normal behaviour, not confirmed fraud.",
        "Imbalanced data makes both false-positive and false-negative errors expensive in different ways.",
        "Interpretability of individual flags can be limited.",
        "Model quality depends heavily on how representative the dataset is of real transaction patterns.",
      ],
      improvements: [
        "Threshold tuning guided by precision–recall curves.",
        "Comparing against supervised baselines when labels are available.",
        "Feature engineering from time-based aggregates and merchant patterns.",
        "Cost-sensitive evaluation that reflects the asymmetric business impact of each error type.",
      ],
    },
  },

  /* ---------------------------------------------------------- */
  /* 03 — Choose AI                                             */
  /* ---------------------------------------------------------- */
  {
    slug: "choose-ai",
    index: "03",
    title: "Choose AI — Product Intelligence System",
    shortTitle: "Choose AI",
    category: "Content-Based Recommendation",
    filter: "Recommendation Systems",
    tagline: "Similarity-based electronics discovery through TF-IDF and cosine similarity.",
    summary:
      "A Streamlit application that converts electronics product metadata into text features with TF-IDF and ranks similar products using cosine similarity, presented through a conversational assistant interface.",
    stack: ["Python", "Streamlit", "TF-IDF", "Scikit-learn", "Pandas", "Cosine Similarity"],
    repoUrl: `${GITHUB}/PRODUCT-INTELLIGENCE-SYSTEM`,
    demoUrl: null,
    cover: "products",
    featured: true,
    caseStudy: {
      problem:
        "Online marketplaces are crowded with electronic products, making it hard for buyers to compare and choose. The goal is to help a user discover products that are genuinely similar to one they are considering, using the product's own description.",
      motivation: [
        "Content-based recommendation works even without a user's rating history, which makes it a practical fit for product discovery.",
        "The system doubles as a conversational assistant, guiding users through product selection in an interactive way.",
      ],
      data: [
        "A structured dataset of electronic products with attributes such as product name, brand, category, price, rating, and features.",
        "Textual attributes are combined and preprocessed into a unified text representation for each product.",
      ],
      workflow: [
        "Combine each product's textual attributes into a single text blob.",
        "Vectorize the product corpus with TF-IDF, removing English stop words.",
        "Compute pairwise cosine similarity between products.",
        "Rank products by similarity and return the most relevant matches.",
        "Present results through a Streamlit interface styled as a chat assistant.",
      ],
      architecture: [
        "Product metadata → text preparation → TF-IDF vectorization → similarity matrix → similarity ranking → recommendation display in the Streamlit interface.",
      ],
      stackRationale: [
        "TF-IDF captures how distinctive a term is within a product description, not just how frequent it is.",
        "Cosine similarity is a cheap, interpretable ranking score over the TF-IDF vectors.",
        "Streamlit provides a fast path to an interactive, shareable interface with minimal boilerplate.",
        "Scikit-learn supplies the vectorizer and metrics; Pandas handles the tabular data.",
      ],
      implementation: [
        "TfidfVectorizer with stop_words='english' converts the combined product text into a TF-IDF matrix.",
        "Cosine similarity between product vectors measures how closely two products are described.",
        "Given a selected product, the most similar products are ranked and shown with details such as brand, price, rating, and features.",
        "The interface behaves like a conversational assistant guiding the product-selection process.",
      ],
      evaluation: [
        "Recommendation quality is assessed qualitatively — returned products are checked for genuine topical relevance.",
        "Similarity scores are sanity-checked across known product pairs.",
      ],
      limitations: [
        "Content-based only: no collaborative or behavioural signals, so personalization is limited.",
        "Recommendations are only as good as the product metadata — sparse or noisy text degrades them.",
        "The dataset is limited in size and coverage.",
      ],
      improvements: [
        "Hybrid recommendations that combine content similarity with collaborative signals such as ratings.",
        "Stronger text cleaning, synonym handling, and embedding-based similarity.",
        "Capturing explicit user preferences to steer recommendations.",
        "A deeper evaluation of ranking quality.",
      ],
    },
  },

  /* ---------------------------------------------------------- */
  /* 04 — CommerceCore                                          */
  /* ---------------------------------------------------------- */
  {
    slug: "commercecore",
    index: "04",
    title: "CommerceCore — RESTful E-Commerce API",
    shortTitle: "CommerceCore",
    category: "Backend Engineering",
    filter: "Backend Engineering",
    tagline: "A modular Flask API for authentication, catalog, carts, and orders.",
    summary:
      "A scalable RESTful e-commerce backend built with Flask: JWT authentication, product management with pagination, shopping carts, order processing, automated seeding, and interactive Swagger documentation — deployed on Render.",
    stack: ["Flask", "SQLAlchemy", "SQLite", "JWT", "Swagger / OpenAPI", "Gunicorn", "Render"],
    repoUrl: `${GITHUB}/CommerceCore-RESTful-E-Commerce-API`,
    demoUrl: null,
    cover: "api",
    featured: true,
    statusNote:
      "The repository's README shows a placeholder demo URL (your-render-url.onrender.com). A live demo link will be added here once the exact deployed URL is confirmed.",
    caseStudy: {
      problem:
        "E-commerce platforms need a secure, modular backend that handles user accounts, product catalogs, shopping carts, and order processing through a well-structured REST API.",
      motivation: [
        "This project exercises the backend half of the ML story — serving structured data over HTTP with authentication, validation, and clear contracts.",
        "A modular Flask blueprint architecture keeps feature areas independent and maintainable.",
      ],
      data: [
        "SQLite is used as the database, accessed through the SQLAlchemy ORM.",
        "Automated product seeding populates the catalog so the API can be exercised immediately.",
      ],
      workflow: [
        "Client / frontend → REST API endpoints → Flask application (blueprints) → SQLAlchemy ORM → SQLite database.",
        "Protected endpoints verify JWTs; user roles gate authorization where applied.",
      ],
      architecture: [
        "Client → REST endpoints → Flask app with blueprints → SQLAlchemy ORM → SQLite.",
      ],
      stackRationale: [
        "Flask is lightweight and transparent — the full request flow stays visible.",
        "Flask Blueprints modularize authentication, products, carts, and orders.",
        "SQLAlchemy ORM keeps database access consistent and typed.",
        "JWT authentication secures protected routes.",
        "Flasgger generates interactive Swagger documentation at /apidocs.",
        "Gunicorn is used as the production WSGI server on Render.",
      ],
      implementation: [
        "Authentication: user registration, login, and JWT token generation.",
        "Products: adding and retrieving products with server-side pagination.",
        "Carts: adding items and viewing the current user's cart.",
        "Orders: placing orders from the cart and retrieving the user's orders.",
        "CORS is enabled so frontend clients can call the API.",
        "Validation and error handling are applied across the endpoints.",
      ],
      evaluation: [
        "Endpoints are exercised with API testing tools (Postman / Thunder Client).",
        "Interactive Swagger documentation doubles as both a contract and a test harness.",
        "Deployment uses Gunicorn on Render, per the repository README.",
      ],
      limitations: [
        "SQLite is a development-appropriate store; a production deployment would move to PostgreSQL.",
        "No payment processing is included — orders represent purchase intent.",
        "Security hardening is basic; rate limiting and refresh-token rotation are not covered.",
      ],
      improvements: [
        "Migrate to PostgreSQL with Alembic-managed migrations.",
        "Add payment-provider integration.",
        "Add rate limiting, refresh tokens, and stronger security headers.",
        "Expand automated tests to cover authentication and order workflows.",
      ],
    },
  },

  /* ---------------------------------------------------------- */
  /* 05 — SecureAuth (secondary)                                */
  /* ---------------------------------------------------------- */
  {
    slug: "secureauth",
    index: "",
    title: "SecureAuth — Role-Based Authentication System",
    shortTitle: "SecureAuth",
    category: "Backend Engineering",
    filter: "Backend Engineering",
    tagline: "Flask + JWT + SQLite role-based authentication.",
    summary:
      "Registration, login, JWT-based authentication, admin/user role authorization, password hashing, protected routes, input validation, and Swagger documentation in a modular Flask project.",
    stack: ["Flask", "Flask-JWT-Extended", "SQLAlchemy", "SQLite", "Werkzeug", "Flasgger"],
    repoUrl: `${GITHUB}/SecureAuth---Role-Based-Authentication-System`,
    demoUrl: null,
    cover: "auth",
    featured: false,
  },

  /* ---------------------------------------------------------- */
  /* 06 — AI Travel Assistant (secondary)                       */
  /* ---------------------------------------------------------- */
  {
    slug: "ai-travel-assistant",
    index: "",
    title: "AI Travel Assistant",
    shortTitle: "AI Travel Assistant",
    category: "Backend Engineering",
    filter: "Backend Engineering",
    tagline: "FastAPI travel-assistant backend with JWT auth and PostgreSQL.",
    summary:
      "A FastAPI service with JWT authentication, role-based users, Alembic migrations, Docker Compose, and a pytest test suite — the travelling companion lives here as an API backend.",
    stack: ["FastAPI", "PostgreSQL", "JWT", "Alembic", "Docker", "pytest"],
    repoUrl: `${GITHUB}/AI-Travel-Assistant`,
    demoUrl: null,
    cover: "travel",
    featured: false,
    statusNote: "The repository contains the backend service; the described frontend is not in this repository.",
  },

  /* ---------------------------------------------------------- */
  /* 07 — AI Chatbot with NLP (secondary)                       */
  /* ---------------------------------------------------------- */
  {
    slug: "ai-chatbot-nlp",
    index: "",
    title: "AI Chatbot with NLP",
    shortTitle: "AI Chatbot",
    category: "NLP",
    filter: "NLP",
    tagline: "A rule-based spaCy chatbot with intent recognition.",
    summary:
      "A Python chatbot that uses spaCy (en_core_web_sm) to recognize predefined intents such as greetings and farewells, with matching responses and a graceful fallback for unrecognized input.",
    stack: ["Python", "spaCy", "NLP"],
    repoUrl: `${GITHUB}/AI-CHATBOT-WITH-NLP`,
    demoUrl: null,
    cover: "chat",
    featured: false,
  },

  /* ---------------------------------------------------------- */
  /* 08 — Automated Report Generation (secondary)               */
  /* ---------------------------------------------------------- */
  {
    slug: "automated-report-generation",
    index: "",
    title: "Automated Report Generation",
    shortTitle: "Report Generator",
    category: "Data & Visualization",
    filter: "Data & Visualization",
    tagline: "From CSV to styled PDF reports with Pandas and FPDF.",
    summary:
      "Reads tabular data with Pandas, computes descriptive statistics, and produces a formatted PDF report using a custom FPDF report class with header and footer handling and defensive file-error handling.",
    stack: ["Python", "Pandas", "FPDF"],
    repoUrl: `${GITHUB}/AUTOMATED-REPORT-GENERATION`,
    demoUrl: null,
    cover: "report",
    featured: false,
  },

  /* ---------------------------------------------------------- */
  /* 09 — API Integration & Data Visualization (secondary)      */
  /* ---------------------------------------------------------- */
  {
    slug: "api-integration-data-visualization",
    index: "",
    title: "API Integration & Data Visualization",
    shortTitle: "Weather Viz",
    category: "Data & Visualization",
    filter: "Data & Visualization",
    tagline: "OpenWeatherMap data fetched and visualized in Python.",
    summary:
      "Fetches live weather data from the OpenWeatherMap API using requests, then visualizes it with Matplotlib and Seaborn — a practical exercise in API integration, key handling, and charting.",
    stack: ["Python", "requests", "Matplotlib", "Seaborn"],
    repoUrl: `${GITHUB}/API-INTEGRATION-AND-DATA-VISUALIZATION`,
    demoUrl: null,
    cover: "weather",
    featured: false,
  },

  /* ---------------------------------------------------------- */
  /* 10 — ML Model Implementation (secondary)                   */
  /* ---------------------------------------------------------- */
  {
    slug: "ml-model-implementation",
    index: "",
    title: "Spam Classification with Naive Bayes",
    shortTitle: "Spam Classifier",
    category: "Machine Learning",
    filter: "Machine Learning",
    tagline: "CountVectorizer + Multinomial Naive Bayes spam detection.",
    summary:
      "A text-classification walkthrough: emails are vectorized with CountVectorizer, a Multinomial Naive Bayes model is trained on a train/test split, and evaluation covers accuracy, precision, recall, F1, and a confusion matrix.",
    stack: ["Python", "Scikit-learn", "CountVectorizer", "MultinomialNB"],
    repoUrl: `${GITHUB}/MACHINE-LEARNING-MODEL-IMPLEMENTATION`,
    demoUrl: null,
    cover: "spam",
    featured: false,
  },
];

/** The four projects presented as full case studies. */
export const featuredProjects = projects.filter((p) => p.featured);

/** Distinct filter categories derived from the project data. */
export const projectFilters: string[] = [
  "All",
  "Machine Learning",
  "Recommendation Systems",
  "Backend Engineering",
  "NLP",
  "Data & Visualization",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}