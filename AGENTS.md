# Portfolio Project Guide

## Project purpose

Build a professional, welcoming portfolio for Vasundhara Aher, a Software Developer. Present resume-backed experience, skills, and projects clearly, with a responsive interface that is easy to navigate.

Use the resume as the source of truth. Do not invent employers, dates, achievements, projects, education, or contact details. If a resume detail is unavailable or unclear, ask Vasundhara before publishing it.

## Collaboration and learning preference

- Vasundhara wants to learn React, not just receive finished code.
- By default, explain the next step, the file to work in, and why the approach uses React. Let Vasundhara write and test the code.
- Do not edit or create application code directly unless Vasundhara explicitly asks for direct implementation.
- When reviewing work, identify the specific issue and explain how to fix it rather than silently changing files.

## Visual theme

Use a bright, cheerful blue, turquoise-blue, white palette with readable dark text:

| Purpose | Color |
| --- | --- |
| Bright blue / primary actions | `#60CDF6` |
| Turquoise-blue accents | `#22B1C3` |
| Happy blue / secondary accents | `#2B91BF` |
| Supporting blue/teal accents | `#79CED8`, `#54C1C5`, `#4FBAAD` |
| White surfaces | `#FFFFFF` |
| Navy text | `#15324B` |
| Pale blue page background | `#F3FAFC` |

The CSS variables are defined in `src/index.css`. Keep contrast, responsive behavior, and accessibility in mind; use saturated colors as accents rather than overwhelming the page.

## React and application conventions

- Use React components, props, composition, and data-driven rendering to teach and structure the app; do not make a single oversized page component.
- Keep static portfolio content in data modules and pass it to presentational components through props.
- Use `useState` only for meaningful interactive state; do not add state just to demonstrate a hook.
- Render collections with `.map()` and stable, unique keys.
- Use React Router `Link` or `NavLink` for internal navigation instead of browser-reloading anchors.
- Use semantic HTML for accessible structure. JSX elements are expected; React features should organize the content and behavior.
- Do not add a route or navigation link unless the destination page exists or is being created in the same requested task.
- Keep changes focused and explain new React concepts in plain language.

## CSS organization

- `src/index.css`: global reset, typography, and theme variables.
- `src/pages/<Page>.css`: styles specific to that page; import the stylesheet from its page component.
- `src/App.css`: only application-wide layout or styles shared across pages.
- Keep styles in one place; remove an old page-specific rule when moving it to a page stylesheet.
- If a reusable component becomes shared across pages, consider a component-specific stylesheet.

## Current structure

```text
src/
├── components/
│   ├── ExperienceCard.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   └── SkillTag.jsx
├── assets/
│   └── constant.js
├── data/
│   ├── expData.js
│   ├── homeData.js
│   └── projectData.js
├── pages/
│   ├── Home.jsx
│   └── Home.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

The app currently has a Home route. Future portfolio areas may include About, Experience, Skills, Projects, and Contact; decide whether each should be a separate route or a Home-page section based on the user's request.

## Resume content status

The provided resume has been reviewed. Experience, project, and grouped-skill content is curated in the corresponding modules under `src/data/`; use those as the source for portfolio content and verify any new claims against the resume before adding them.
