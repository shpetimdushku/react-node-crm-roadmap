# React + Node.js Roadmap: Build a CRM in 8 Weeks

![Status](https://img.shields.io/badge/status-learning_in_progress-blue) ![React](https://img.shields.io/badge/React-TypeScript-149ECA?logo=react&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs&logoColor=white) ![Database](https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql&logoColor=white) ![ORM](https://img.shields.io/badge/ORM-Prisma-2D3748?logo=prisma&logoColor=white)

A practical learning log for moving from Senior PHP/Laravel development to React, TypeScript, and Node.js. Over 56 days I will build a CRM dashboard with users, leads, clients, authentication, and reporting. **This is a roadmap and work in progress; features and deployment links will be added when complete.**

## Goal and routine

- **Time:** About 2–3 hours a day.
- **Daily:** Learn one topic (30–45 min), code (60–90 min), check/refactor (15–30 min), then commit and record a short note.
- **Definition of done:** The day's feature runs, I can explain it, and I have recorded the result. Check a box only after finishing.
- **Laravel analogy:** React components resemble reusable Blade pieces with local state; Express routes/controllers and middleware will feel familiar, while TypeScript catches many mistakes before runtime.

## Stack (planned)

| Layer | Tools |
| --- | --- |
| Frontend | React, TypeScript, Vite, React Router, Tailwind CSS, Recharts |
| Backend | Node.js, Express, TypeScript |
| Data | PostgreSQL, Prisma |
| Authentication | Password hashing, server-managed sessions or short-lived tokens with secure HTTP-only cookies |
| Quality | Linting, selected API and UI tests, manual verification |
| Deployment | Frontend and API hosts to be chosen in Week 8 |

> Choose versions and hosting when setting up each part. Never commit `.env`, credentials, production data, or signing keys.

## Week 1 — React + TypeScript foundations

**Deliverable:** Small todo app and login form mockup.

- [ ] **Day 01:** Create a Vite React + TypeScript app; build `Header`, `Footer`, and `Button`; render five sample items.
- [ ] **Day 02:** Pass typed props to a reusable `Card`; handle a button click that changes visible text.
- [ ] **Day 03:** Practice `useState` with a counter; add and remove todos using immutable updates.
- [ ] **Day 04:** Use `useEffect` to synchronize a timer with start/stop controls; clean up the interval.
- [ ] **Day 05:** Define `Todo` and form types; type props and change/submit events; edit a todo.
- [ ] **Day 06:** Add React Router with Home, Todos, and Login pages and active navigation.
- [ ] **Day 07:** Review, fix bugs, and finish a login UI plus todo app; write a weekly recap.

## Week 2 — Data and navigation

**Deliverable:** Users dashboard using JSONPlaceholder (read-only data).

- [ ] **Day 08:** Fetch users from a public API; display loading, empty, success, and error states.
- [ ] **Day 09:** Render lists with stable keys; add local search and page controls.
- [ ] **Day 10:** Extract fetching into a typed custom hook; prevent stale responses after navigation.
- [ ] **Day 11:** Use Context for a simple theme preference; avoid putting every state value in Context.
- [ ] **Day 12:** Add `/users` and `/users/:id`; handle an unknown user and a missing route.
- [ ] **Day 13:** Complete search, list, and details views in the users dashboard.
- [ ] **Day 14:** Review effect dependencies, accessibility, errors, and mobile layout; recap.

## Week 3 — UI components and tables

**Deliverable:** Reusable dashboard shell and searchable client table using mock data.

- [ ] **Day 15:** Set up Tailwind; build a responsive dashboard card.
- [ ] **Day 16:** Create typed Button, Input, and Modal components with keyboard-friendly controls.
- [ ] **Day 17:** Build a semantic table with local sorting and search.
- [ ] **Day 18:** Add pagination; measure before applying `useMemo` or `useCallback` where helpful.
- [ ] **Day 19:** Build sidebar, header, and main dashboard layout.
- [ ] **Day 20:** Combine table, filters, and page controls; handle no-match results.
- [ ] **Day 21:** Review responsive behavior, labels, focus, and reusable component APIs; recap.

## Week 4 — Frontend application flows

**Deliverable:** Admin dashboard prototype with mock authentication only.

- [ ] **Day 22:** Build accessible login and registration forms with client-side validation.
- [ ] **Day 23:** Prototype protected navigation with mock user state; note that API authorization comes later.
- [ ] **Day 24:** Add feedback for form success/failure and a way to dismiss notifications.
- [ ] **Day 25:** Build a local file picker with image preview and type/size feedback; do not upload yet.
- [ ] **Day 26:** Visualize mock lead counts and trends with Recharts.
- [ ] **Day 27:** Assemble dashboard, table, forms, and charts into one navigable prototype.
- [ ] **Day 28:** Review flow, remove confusing mock behavior, and list API endpoints needed next week.

## Week 5 — Node.js and Express

**Deliverable:** Local API with in-memory users (data resets on restart).

- [ ] **Day 29:** Initialize a TypeScript Node project; run a minimal HTTP response.
- [ ] **Day 30:** Add Express; split routes from controllers; implement `GET /health`.
- [ ] **Day 31:** Add request logging, JSON parsing, a 404 response, and centralized error handling.
- [ ] **Day 32:** Design resource URLs and status codes; implement in-memory users CRUD.
- [ ] **Day 33:** Configure CORS for the local frontend origin; call `GET /users` from React.
- [ ] **Day 34:** Validate request bodies and test success and failure paths with an API client.
- [ ] **Day 35:** Refactor endpoints, document example requests, and recap REST versus Laravel routing.

## Week 6 — Database and authentication

**Deliverable:** Persisted leads/clients API with login and authorization.

- [ ] **Day 36:** Run PostgreSQL locally; configure Prisma and migrate a `User` table.
- [ ] **Day 37:** Add `Lead` and `Client` models, relations, constraints, and seed data.
- [ ] **Day 38:** Implement registration and login; hash passwords; never return password hashes.
- [ ] **Day 39:** Add authenticated session/token verification and server-side access checks.
- [ ] **Day 40:** Add validated search, filtering, and bounded pagination to list endpoints.
- [ ] **Day 41:** Implement and exercise leads/clients CRUD; limit edits and deletes by role or ownership.
- [ ] **Day 42:** Test unauthorized access, invalid input, and database failures; recap migrations and auth.

## Week 7 — Connect the CRM

**Deliverable:** Working end-to-end CRM on a local machine.

- [ ] **Day 43:** Create a typed API client; connect the login form to the backend.
- [ ] **Day 44:** Restore the signed-in user using a server-verified endpoint; handle logout and expired sessions.
- [ ] **Day 45:** Load leads/clients into the table from the API; implement create and edit forms.
- [ ] **Day 46:** Implement delete confirmation, search, pagination, and helpful error messages.
- [ ] **Day 47:** Add summary endpoints and display charts using actual persisted data.
- [ ] **Day 48:** Record an activity entry for meaningful CRM changes and display recent events.
- [ ] **Day 49:** Walk through register → login → CRUD → logout; fix integration issues.

## Week 8 — Quality, deployment, documentation

**Deliverable:** Documented, accessible deployed project if hosting is available.

- [ ] **Day 50:** Add focused API tests for auth and CRUD permissions; run build and lint.
- [ ] **Day 51:** Add frontend checks for forms and the main CRM flow; review keyboard navigation.
- [ ] **Day 52:** Prepare deployment configuration, database migrations, allowed origins, and secrets.
- [ ] **Day 53:** Deploy database and API; verify health endpoint and migration results.
- [ ] **Day 54:** Deploy frontend, configure API URL and cookie/CORS settings, and verify login in production.
- [ ] **Day 55:** Add loading placeholders, useful error screens, setup steps, and screenshots to this README.
- [ ] **Day 56:** Run an end-to-end smoke test, record a short demo if useful, and publish a final recap.

## CRM acceptance checklist

- [ ] Users can register, sign in, sign out, and recover from expired sessions.
- [ ] The API rejects unauthorized requests; roles or ownership are enforced server-side.
- [ ] Leads and clients support create, view, edit, delete, search, and pagination.
- [ ] Dashboard charts reflect actual database data.
- [ ] Invalid input and failed requests show useful messages.
- [ ] Database migrations, local setup, tests, and deployment steps are documented.

## Planned repository layout

```text
react-node-crm-roadmap/
├── README.md
├── frontend/                 # React + TypeScript application
│   ├── src/
│   └── package.json
├── backend/                  # Express + TypeScript API
│   ├── src/
│   ├── prisma/
│   └── package.json
└── docs/                     # Screenshots and weekly notes (as added)
```

## Progress log

| Week | What I built | What I learned | Link |
| --- | --- | --- | --- |
| 1 | Pending | Pending | — |
| 2 | Pending | Pending | — |
| 3 | Pending | Pending | — |
| 4 | Pending | Pending | — |
| 5 | Pending | Pending | — |
| 6 | Pending | Pending | — |
| 7 | Pending | Pending | — |
| 8 | Pending | Pending | — |

## Getting started with this repository

1. Create a GitHub repository named `react-node-crm-roadmap` (leave GitHub's **Initialize with README** unchecked if publishing this local file).
2. Put this `README.md` in a new local directory named `react-node-crm-roadmap`.
3. In that directory, run:

   ```bash
   git init
   git add README.md
   git commit -m "docs: add eight-week React and Node roadmap"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/react-node-crm-roadmap.git
   git push -u origin main
   ```

4. Replace `YOUR_USERNAME` with your GitHub username. GitHub may ask you to authenticate through your credential manager or browser.
5. Each day, check off completed tasks, commit the code, and push with `git push`. Add screenshots and a real demo link only when they exist.
6. Before adding application code, add a `.gitignore` covering `node_modules/`, `dist/`, `.env`, `.env.*`, and local logs. Keep a safe `.env.example` with variable names but no secrets.

**If you create the GitHub repository with a README already**, clone that repository first and replace its README locally before committing; this avoids unrelated initial histories.

## Documentation

- [React documentation](https://react.dev/learn)
- [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Node.js learning resources](https://nodejs.org/en/learn)
- [Express documentation](https://expressjs.com/)
- [Prisma documentation](https://www.prisma.io/docs)
- [PostgreSQL documentation](https://www.postgresql.org/docs/)

## Author

**Shpetim Dushku** — Senior PHP/Laravel developer expanding into React, TypeScript, and Node.js. [Portfolio](https://shpetimdushku.com/)
