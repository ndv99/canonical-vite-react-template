const Index: React.FC = () => (
  <section>
    <h2>Welcoe!</h2>
    <p>This is an opinionated template repository for React applications at Canonical, bootstrapped with Vite.</p>

    <h3>What's included?</h3>
    <p>
      I've included a set of basic dependencies that are used by most existing React applications in Canonical. You can
      see the full list in <code>package.json</code>, but the important ones are:
      <ul>
        <li>
          <code>vanilla-framework</code>
        </li>
        <li>
          <code>@canonical/react-components</code>
        </li>
        <li>
          <code>formik</code>
        </li>
        <li>
          <code>react-router-dom</code>
        </li>
        <li>
          <code>@playwright/test</code>
        </li>
        <li>
          <code>eslint</code>
        </li>
        <li>
          <code>sass</code>
        </li>
        <li>
          <code>typescript</code>
        </li>
      </ul>
    </p>
    <p>
      I've also included an example implementation of the side navigation which is implemented in most Canonical
      applications.
    </p>
    <p>
      Basic routing has been implemented with <code>react-router-dom</code>.
    </p>

    <h3>Getting started</h3>

    <h4>Prerequisites</h4>

    <p>This was written on Ubuntu 22.10, but in theory should work on any *nix operating system.</p>
    <p>You will need:</p>
    <ul>
      <li>yarn</li>
      <li>NodeJS (v16 or higher)</li>
      <li>A code editor</li>
    </ul>

    <h4>Instructions</h4>
    <p>To start a new project using this template:</p>
    <ol>
      <li>
        Install{" "}
        <a href="https://github.com/Rich-Harris/degit#installation">
          degit:
          <br />
        </a>
        <code>yarn add -G degit</code>
      </li>
      <li>
        Download the template:
        <br />
        <code>degit https://github.com/ndv99/canonical-vite-react-template your-project-name</code>
      </li>
      <li>
        <code>cd your-project-name</code>
      </li>
      <li>
        Install dependencies:
        <br />
        <code>yarn</code>
      </li>
      <li>
        Run the dev server:
        <br />
        <code>yarn dev</code>
      </li>
    </ol>
    <p>
      And that's it, you should be ready to go. Just open a web browser, and your site should be running at{" "}
      <code>your-ip-address:8999</code>
    </p>

    <p>You can now get started on your project. Key things to change first:</p>
    <ul>
      <li>
        This file (<code>src/pages/index.tsx</code>)
      </li>
      <li>
        Your project title in <code>package.json</code>,{" "}
        <code>src/components/Navigation/NavigationBanner/NavigationBanner.tsx</code>, and{" "}
        <code>src/components/MainLayout/MainLayout.tsx</code>
      </li>
    </ul>

    <p>
      For an official Canonical project, make sure you change <code>VITE_UI_PORT</code> in the <code>.env</code> file
      according to the <a href="https://webteam.canonical.com/practices/project-ports">webteam standards</a>.
    </p>
  </section>
);

export default Index;
