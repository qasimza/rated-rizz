# Rated Rizz

## Overview
Professor Recommendation System for Students, with Course-Specific assignment lookup and AI Tutoring. 

_This repo contains frontend applicaiton._

#### Live Link: [RatedRizz](https://qasimza.github.io/rated-rizz/)

## Directory Structure

```bash
.
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── routes                              # Stores routes
│   │   ├── assignments
│   │   │   ├── AITutor.tsx
│   │   │   ├── Assignments.tsx
│   │   │   └── ViewAssignment.tsx
│   │   ├── errors
│   │   │   ├── ErrorPage.tsx
│   │   │   └── UnderConstruction.tsx
│   │   ├── home                           # Landing page & associated components
│   │   │   ├── About.tsx
│   │   │   ├── ContactUs.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Home.tsx
│   │   │   └── Navbar.tsx
│   │   ├── Login.tsx
│   │   ├── professor
│   │   │   └── Professor.tsx
│   │   ├── search-results
│   │   ├── SearchResults.tsx
│   │   └── Signup.tsx
│   ├── services                        # Stores services for hooks and other cosmetic methods
│   └── setupTests.ts
├── tailwind.config.js
└── tsconfig.json
```

## Developer Instructions

In the project directory, you can run:

#### `npm ci`

Performs a clean install of required packages/modules.\
Do this when you first download the repo. And every time you create a new branch.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm deploy`
Deploys page to live site. Currently hooked to `gh-pages`

### Other Scripts

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## References

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).

[MaterialUI documentation](https://rhttps://mui.com/material-ui/).

[TailwindCSS documentation](https://https://tailwindcss.com/docs/).