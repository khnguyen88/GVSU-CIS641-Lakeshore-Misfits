# Deploying the React Application onto GitHub Page

1.  Note: This process assumes the user has a forked or cloned copy of the GitHub project repository

2.  First, turn on the GitHub repository's GitHub Pages or website


    -   In the GitHub repository, click on the **Settings** tab

    -   In the Setting's **General** section, make sure the repository name and default branch is set

    -   In the Setting's **Pages** section, under to **Build and Deployment - Source** header, select _Deploy From A Branch_ under the dropdown list

    -   In the Setting's **Pages** section, under the **Build and Deployment - Branch** header, select our default branch under the dropdown list

3.  From the project root folder, create a blank file called `.nojekyll`


    -   This tells GitHub to bypass Jekyll processes and not build the website from the main README file. It will instead make it from other HTML files.

4.  From the project root folder , go into the React project directory (subdirectory):


    -   `cd src/website-color-generator-app`

5.  In the package.json file, add or update the **homepage** attribute w/ the following setup:


    -   **template** - `"homepage": "WEBSITE-ROOT-URL/REPOSITORY-DIRECTORY/SUB-DIRECTORY/FOLDER/PATH/YOU/WANT/PLACE/YOUR/APP/IN",`

    -   **actual** - `"homepage": "https://khnguyen88.github.io/GVSU-CIS641-Lakeshore-Misfits/website/projects/website-color-generator-app",`

6.  Next, the Router component's **basename** attribute in the App parent component needs to be updated to reflect the sub-directory path or location of our deployed React application, or the links will be directed to the root URL.


    -   In the React project folder, go into the `src/App.js` file, aka the Palette Model JS file

    -   On line 17 of the Palette.js file, replace sub-directory paths in your website's **basename** attribute.

    -   The format should be akin to `basename='/REPOSITORY-DIRECTORY/SUB-DIRECTORY/FOLDER/PATH/YOU/WANT/PLACE/YOUR/APP/IN`

    -   Replace this old code **`colorGeneratorService = new ColorMindAPIService()`** with this new code **`colorGeneratorService = new RandomColorGeneratorService()`**

7.  Due to the Color Mind API Service Issue, we will have to swap out the Color Generation Service for deployment


    -   In the React project folder, go into the `src/models/Palette.js` file, aka the Palette Model JS file

    -   On line 23 of the Palette.js file, replace the service we use for color generation.

    -   Replace this old code **`colorGeneratorService = new ColorMindAPIService()`** with this new code **`colorGeneratorService = new RandomColorGeneratorService()`**

8.  To create a deployment build in our React project directory, we simply run the React build command in the terminal:


    -   Build command to run: `npm run build`

    -   Once the build is complete, there will be a bunch of files generated in the React project's **build** subdirectory or folder.

9.  Copy the contents in the build folder and place the desired folder path within our GitHub repository starting from the root level.


    -   Note: A GitHub repository, considers our root level to be `WEBSITE-ROOT-URL/REPOSITORY-DIRECTORY`, so we need to make sure that our files are located in the subsequent subpath: `SUB-DIRECTORY/FOLDER/PATH/YOU/WANT/PLACE/YOUR/APP/IN`

    -   **actual** - All files are placed under the GitHub repository's `website/projects/website-color-generator-app` subdirectory path

9.  Push the project code up to the GitHub repository, and wait a few minutes for the project to build and deploy your new application

10. Go to the website URL defined in the **homepage** attribute in the package.json file.

# Existing React Project Setup

1.  Fork or clone the project repository from the project GitHub repository


    -   [https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits)

2.  For team members and collaborators looking to clone the repository


    -   In the project GitHub repository, click on the green, **Code** button

    -   Copy the HTTPS Web URL: **https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits.git**

    -   Go to a project folder in your IDE, and in your IDE terminal, type in **git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY**

    -   Alternatively, if you have an SSH setup, copy and paste the SSH URL into your GitHub.

3.  Open up the project root folder

4.  From the VS Code (or preferred IDE) terminal, do the following steps below:

5.  From the project root folder, go into the React project directory (subdirectory):


    -   `cd src/website-color-generator-app`

6.  Install all dependencies


    -   `npm install`

7.  If the previous steps does not work, try to enter this command before trying it again:


    -   `$env:NODE_OPTIONS='--openssl-legacy-provider'`

8.  If you need to create a new component, go to the React project directory in the terminal, and use the follow commands:


    -   General Components: `npx generate-react-cli component <FileName>`
    -   Page Components: `npx generate-react-cli component <FileName> --type=page`
    -   Section Components: `npx generate-react-cli component <FileName> --type=section`
    -   Layout Components: `npx generate-react-cli component <FileName> --type=layout`
    -   Service Components: `npx generate-react-cli component <FileName> --type=service`

9.  To Start The Application Locally:


    -  `npm start`

10. To quit the application while it's running:


    -   `CTRL+C`

# First Time React Project Setup

**Note:** This is section is for documentation purposes only. The steps does not need to be follow. This is just the process took to set up the initial React project.

-   Open up the project root folder

-   From the VS Code terminal, do the following steps below:

-   Change the directory to the source folder. This is where we will install the project.

    -   `cd src/`

-   Create the React project

    -   `npx create-react-app website-color-generator-app`

-   From the source folder, go into the React project directory

    -   `cd website-color-generator-app/`

-   From the VSCode Explorer (or through the terminal), copy the .gitignore file React created in the React project directory

    -   Duplicate the existing paths and files to ignore
    -   Add paths from starting at the project root folder down into the React project subdirectory
    -   **Note:** This is very important so that node-module won't get tracked!!!
    -   **Example:** `/node_modules --> /src/website-color-generator-app/node_modules`

-   Install the React bootstrap dependencies

    -   `npm install react-bootstrap bootstrap`

-   Install axios dependencies

    -   `npm install axios`

-   Install the React router dependencies

    -   `npm install react-router react-router-dom@latest --save`

-   Install generate-React-cli package

    -   [https://www.npmjs.com/package/generate-react-cli](https://www.npmjs.com/package/generate-react-cli)

    -   `npx generate-react-cli`

    -   This command will create an initial configuration file called **_ 'generate-react-cli.json' _**

-   Modify generate-react-cli Configuration file to create different paths the project 'src' directory:

    -   https://www.npmjs.com/package/generate-react-cli#custom-component-types

    -   **_Exact_**: `{ "usesTypeScript": false, "usesCssModule": false, "cssPreprocessor": "scss", "testLibrary": "Testing Library", "component": { "default": { "path": "src/components", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "page": { "path": "src/pages", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "layout": { "path": "src/layouts", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "section": { "path": "src/sections", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "service": { "path": "src/services", "withLazy": false, "withStory": false, "withStyle": false, "withTest": true } }, "usesStyledComponents": false }`

    -   We created a different type of components: default (normal components), page, layout, section, service

-   Install sass

    -   `npm install -g sass`

-   Install tinycolor2 library (A JS color and color manipulation library);

    -   `npm i tinycolor2`

    -   It saves time since I don't need to write the code from scratch!

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
