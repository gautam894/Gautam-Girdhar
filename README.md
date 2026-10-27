# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Symptom Checker integration

The SymptomCare module is integrated into MedGuide at `/symptom-checker`. Use the main navigation link to open it. The module keeps its own scoped styles and local Context providers. Its symptom matching is educational guidance only and is not a medical diagnosis. Hospital names and specialties are sample data; verify local details before relying on them.

## Run locally

1. Install Node.js (a compatible current LTS version).
2. Open this project folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
