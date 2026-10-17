# Mahalakshmi S — Data Engineering Portfolio

A responsive React + Vite portfolio website with a dark, modern visual style.

## Included
- Responsive homepage and navigation
- About, skills, projects, experience, education, and contact sections
- Profile photo and resume PDF
- Project cards based on the supplied resume
- Mobile-friendly layout

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this project folder.
3. Open a terminal in the folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local address Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## Before publishing — personalize these links

In `src/main.jsx`, update:
- GitHub links currently set to `https://github.com/`
- LinkedIn link currently set to `https://www.linkedin.com/`
- Each project's GitHub link if you want to link directly to its repository

The website intentionally avoids inventing project metrics beyond those present in the supplied resume. The semantic search and HR Assistant entries are based on the resume's personal-project descriptions. Confirm any implementation details and add repository links before presenting them as public, finished projects.

## Deploy options

### Vercel
1. Push the project to a GitHub repository.
2. Import that repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

### Netlify
1. Push the project to GitHub.
2. Add a new site from Git.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.

## Notes
- The resume PDF is served from `public/Mahalakshmi-S-Resume.pdf`.
- Your profile image is served from `public/profile.jpg`.
- To change the resume, replace the PDF in `public` and keep the same filename, or update the link in `src/main.jsx`.
