# Existing React Project Setup

-   Open up the course project folder

-   From the VS Code terminal do the following steps below:

-   From the course project folder go into the react project directory (subdirectory):

    -   cd src/website-color-generator-app

-   Install all dependencies

    -   npm install

-   If the previous steps does not work, try to enter this command before trying it again:

    -   $env:NODE_OPTIONS='--openssl-legacy-provider'

# First Time React Project Setup

**Note:** This is section is for documentation purposes only. The steps does not need to be follow. This is just the process took to set up the initial react project.

-   Open up course project folder

-   From the VS Code terminal do the following steps below:

-   Change directory to the source folder. This is where we will install the project.

    -   cd src/

-   Create the react project

    -   npx create-react-app website-color-generator-app

-   From the source folder go into the react project directory

    -   cd website-color-generator-app/

-   From the The VSCode Explorer (or through the terminal), copy the .gitignore file react created in the react project directory

    -   Duplicate the existing paths and files to ignore
    -   Add paths from starting at the course project folder down into the react project subdirectory
    -   **Note:** This is very important so that node-module won't get tracked!!!
    -   **Example:** `/node_modules --> /src/website-color-generator-app/node_modules`

-   Install react bootstrap dependencies

    -   npm install react-bootstrap bootstrap

-   Install axios dependencies

    -   npm install axios

-   Install the react router dependencies

    -   npm install react-router react-router-dom --save
