## Canonical Vite Template for React projects

This is an opinionated template repository for React applications at Canonical, bootstrapped with Vite.

### What's included?

I've included a set of basic dependencies that are used by most existing React applications in Canonical. You can see the full list in `package.json`, but the important ones are:

*   `vanilla-framework`
*   `@canonical/react-components`
*   `formik`
*   `react-router-dom`
*   `@playwright/test`
*   `eslint`
*   `sass`
*   `typescript`

I've also included an example implementation of the side navigation which is implemented in most Canonical applications.

Basic routing has been implemented with `react-router-dom`.

### Getting started

#### Prerequisites

This was written on Ubuntu 22.10, but in theory should work on any *nix operating system.

You will need:

*   yarn
*   NodeJS (v16 or higher)
*   A code editor

#### Instructions

To start a new project using this template:

1.  Install [degit](https://github.com/Rich-Harris/degit#installation):  
    `yarn add -G degit`
2.  Download the template:  
    `degit https://github.com/ndv99/canonical-vite-react-template your-project-name`
3.  `cd your-project-name`
4.  Install dependencies:  
    `yarn`
5.  Run the dev server:  
    `yarn dev`

And that's it, you should be ready to go. Just open a web browser, and your site should be running at `your-ip-address:8999`

You can now get started on your project. Key things to change first:

*   This file (`src/pages/index.tsx`)
*   Your project title in `package.json`, `src/components/Navigation/NavigationBanner/NavigationBanner.tsx`, and `src/components/MainLayout/MainLayout.tsx`

For an official Canonical project, make sure you change `VITE_UI_PORT` in the `.env` file according to the [webteam standards](https://webteam.canonical.com/practices/project-ports).