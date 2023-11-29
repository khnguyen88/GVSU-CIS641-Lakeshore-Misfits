# Deploying React Project onto GitHub Page

-   This process assumes the users has a forked or cloned copy of the GitHub project repository

-   First, turn on the GitHub repository's GitHub Pages or website

    -   In the github repository, click on the **Settings** tab

    -   In the Setting's **General** section, make sure the repository name and default branch is set

    -   In the Setting's **Pages** section, under to **Build and Deployment - Source** header, select _Deploy From A Branch_ under the dropdown list

    -   In the Setting's **Pages** section, under to **Build and Deployment - Branch** header, select our default branch under the dropdown list

-   From the course root project folder, create a blank file called `.nojekyll`

    -   This tells GitHub to bypass Jekyll processes and not to build the website main the README file. It will instead build it from other html files.

-   From the course project root folder go into the react project directory (subdirectory):

    -   `cd src/website-color-generator-app`

-   In the package.json file, add or update the **homepage** attribute w/ the following setup:

    -   **template** - `"homepage": "WEBSITE-ROOT-URL/REPOSITORY-DIRECTORY/SUB-DIRECTORY/FOLDER/PATH/YOU/WANT/PLACE/YOUR/APP/IN",`

    -   **actual** - `"homepage": "https://khnguyen88.github.io/GVSU-CIS641-Lakeshore-Misfits/website/projects/website-color-generator-app",`

-   Next, we need to adjust our Router component's **basename** attribute in the App parent componenet to reflect the sub-directory path or location of our deployed react application, or the links will direct to the root url.

    -   In the react project folder, go into the `src/App.js` file, aka the Palette Model JS file

    -   On line 17 of the Palette.js file, replace sub-directory paths in the **basename** attribute to your website.

    -   The format should be akin to, `basename='/REPOSITORY-DIRECTORY/SUB-DIRECTORY/FOLDER/PATH/YOU/WANT/PLACE/YOUR/APP/IN`

    -   Replace this old code **`colorGeneratorService = new ColorMindAPIService()`** with this new code **`colorGeneratorService = new RandomColorGeneratorService()`**

-   Due to the Color Mind API Service Issue, we will have to swap out the Color Generation Service for deployment

    -   In the react project folder, go into the `src/models/Palette.js` file, aka the Palette Model JS file

    -   On line 23 of the Palette.js file, replace the service we are using for color generation.

    -   Replace this old code **`colorGeneratorService = new ColorMindAPIService()`** with this new code **`colorGeneratorService = new RandomColorGeneratorService()`**

-   To create a deployment build, in our react project directory, we simply run the react build command in the terminal:

    -   Build command to run: `npm run build`

-   Once the build is complete, we can see a bunch of file generated in the react project's **build** subdirectory or folder

-   Copy the contents in the build folder and place the desired folder path within our github repository starting from the root level.

    -   Note: A GitHub repository, it considers our root level to be `WEBSITE-ROOT-URL/REPOSITORY-DIRECTORY`, so we just need to make sure that our files are located in the subsequent subpath: `SUB-DIRECTORY/FOLDER/PATH/YOU/WANT/PLACE/YOUR/APP/IN`

    -   **actual** - All files are placed under the GitHub repository's `website/projects/website-color-generator-app` subdirectory path

-   Push the project code up to the GitHub repository, and wait a few minutes for the project to build and deploy your new application

# Existing React Project Setup

-   Fork or clone the project repository from the project GitHub repository

    -   [https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits)

-   For team members and collaborators looking to clone the repository

    -   In the project Github repository, click on the green, **Code** button

    -   Copy the HTTPS Web URL: **https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits.git**

    -   Go to a project folder in your IDE and in your IDE terminal, type in: **git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY**

    -   Alternatively, if you have an SSH setup, you can simply copy the SSH URL and past it into your GitHub.

-   Open up the course project folder

-   From the VS Code (or preferred IDE) terminal do the following steps below:

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
