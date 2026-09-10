# Nikhil Lather — Portfolio

Single-page portfolio built with React + Vite. Plain CSS, no UI library, no state
library. Every section is its own component.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
```

## Editing the content

All the text lives in `src/data/content.js`. Change it there — the components
just render whatever that file contains. You should not need to edit any
component to update your details.

## Structure

```
src/
  data/content.js       all copy: profile, skills, experience, projects, education
  index.css             theme tokens + all styles
  App.jsx               section order
  components/
    Navbar.jsx          sticky nav, mobile menu toggle
    Hero.jsx            name, tagline, quick facts
    Section.jsx         shared heading + content layout used by every section
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx        maps over projects
    ProjectCard.jsx     one project row
    Education.jsx
    Contact.jsx
    Footer.jsx
```

## Still to fill in

- `repo` is empty on all four projects in `content.js`. Paste the GitHub URLs in
  and a "View code" button appears automatically. Leave it empty and nothing
  breaks.
- Notes Manager has no live link and its stack is a guess — correct it in
  `content.js`.

## Theme

Dark is the default. The **Light / Dark** button in the navbar switches it, and
the choice is saved in `localStorage` so it sticks on the next visit. Both
palettes are just CSS variables at the top of `src/index.css` — dark under
`:root`, light under `[data-theme="light"]`. Change a colour there and it
updates everywhere. To make light the default instead, swap the two variable
blocks and change `useState` in `App.jsx` plus `data-theme` in `index.html`.

## Resume

`public/Nikhil_Lather_Resume.pdf` is served at `/Nikhil_Lather_Resume.pdf` and is
linked from the hero button and the contact section. Replace that file whenever
you update the resume — keep the same filename and nothing else needs changing.

## Deploying

Vercel or Netlify: connect the repo, framework preset **Vite**, build command
`npm run build`, output directory `dist`. Nothing else to configure.

live at :: https://nikhil-lather.github.io/my-portfolio/
