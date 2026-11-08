# LeadHive AI Platform

A Vite and React marketing site with an interactive AI Experience Centre and a demo-request flow.

## Project layout

```
public/                  Static production assets
src/
  components/
    common/              Shared navigation, footer, and channel icons
    home/                Homepage sections
    experience/          Interactive experience and telemetry UI
    demo/                Demo-request page
  data/                  Scenario content and configuration
  services/              Client-side services, including analytics
  App.jsx                Route selection and shared application shell
  main.jsx               React entry point
```

## Commands

```bash
npm run dev
npm run build
npm run preview
```

Production image assets belong in `public/`. Generated visual QA screenshots are ignored at the repository root.
