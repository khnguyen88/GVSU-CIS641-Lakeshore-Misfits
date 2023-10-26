# Existing React Project Setup

-   Open up the course project folder

-   From the VS Code terminal do the following steps below:

-   From the course project folder go into the react project directory (subdirectory):

    -   `cd src/website-color-generator-app`

-   Install all dependencies

    -   `npm install`

-   If the previous steps does not work, try to enter this command before trying it again:

    -   `$env:NODE_OPTIONS='--openssl-legacy-provider'`

-   If you need to create a new component, go to the react project directory in the terminal, and use the follow commands:

    -   General Components: `npx generate-react-cli component <FileName>`
    -   Page Components: `npx generate-react-cli component <FileName> --type=page`
    -   Section Components: `npx generate-react-cli component <FileName> --type=section`
    -   Layout Components: `npx generate-react-cli component <FileName> --type=layout`
    -   Service Components: `npx generate-react-cli component <FileName> --type=service`

-   To Start The Application Locally:

    -   `npm start`

-   To quit the application while it's running:

    -   `CTRL+C`

# First Time React Project Setup

**Note:** This is section is for documentation purposes only. The steps does not need to be follow. This is just the process took to set up the initial react project.

-   Open up course project folder

-   From the VS Code terminal do the following steps below:

-   Change directory to the source folder. This is where we will install the project.

    -   `cd src/`

-   Create the react project

    -   `npx create-react-app website-color-generator-app`

-   From the source folder go into the react project directory

    -   `cd website-color-generator-app/`

-   From the The VSCode Explorer (or through the terminal), copy the .gitignore file react created in the react project directory

    -   Duplicate the existing paths and files to ignore
    -   Add paths from starting at the course project folder down into the react project subdirectory
    -   **Note:** This is very important so that node-module won't get tracked!!!
    -   **Example:** `/node_modules --> /src/website-color-generator-app/node_modules`

-   Install react bootstrap dependencies

    -   `npm install react-bootstrap bootstrap`

-   Install axios dependencies

    -   `npm install axios`

-   Install the react router dependencies

    -   `npm install react-router react-router-dom@latest --save`

-   Install generate-react-cli package

    -   [https://www.npmjs.com/package/generate-react-cli](https://www.npmjs.com/package/generate-react-cli)

    -   `npx generate-react-cli`

    -   This command will create an initial configuration file called **_ 'generate-react-cli.json' _**

-   Modify generate-react-cli Configuration file to create different paths the project 'src' directory:

    -   https://www.npmjs.com/package/generate-react-cli#custom-component-types

    -   **_Exact_**: `{ "usesTypeScript": false, "usesCssModule": false, "cssPreprocessor": "scss", "testLibrary": "Testing Library", "component": { "default": { "path": "src/components", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "page": { "path": "src/pages", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "layout": { "path": "src/layouts", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "section": { "path": "src/sections", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "service": { "path": "src/services", "withLazy": false, "withStory": false, "withStyle": false, "withTest": true } }, "usesStyledComponents": false }`

    -   We creating a different type of components: default (normal components), page, layout, section, service

-   Install sass

    -   `npm install -g sass`

-   Install tinycolor2 library (A JS color and color manipulation library);

    -   `npm i tinycolor2`

    -   Saves time since I don't need to write the code from scratch!

-   Install font awesome icon libraries

    -   ```
        npm i --save @fortawesome/fontawesome-svg-core
        npm install --save @fortawesome/free-solid-svg-icons
        npm install --save @fortawesome/react-fontawesome
        ```

-   Create new pages: `npx generate-react-cli component <FileName> --type=page`

    -   MockSite
    -   ContrastChecker
    -   AboutUs
    -   ErrorPage

-   Create new general components: `npx generate-react-cli component <FileName>`

    -   NavigationPanel
    -   ControlPanel

-   Create new section components: `npx generate-react-cli component <FileName> --type=section`

    -   PanelsSection
    -   PagesSection

-   Create new services files: `npx generate-react-cli component <FileName> --type=service`
    -   ColorService
    -   ColorMindAPIService
    -   WebAimAPIService
