# Lakeshore Misfits

The website color generator is a lightweight web application and tool intended to help developers select an aesthetically pleasing color palette for their website. The web application will check sets of paired colors from the generated color palette and determine which sets meet AA or AAA website accessibility level compliances. The web application will also have a layout color previewer for users to see what the color palette would look like if applied to a static web page and let them determine if they want to keep the colors or generate a new palette. The application may also include a contrast adjustment feature, which evaluates the values of each color in the palette and tweaks them to ensure there is enough contrast ratio between selected pairs of light and dark value colors used for the previews. High contrast ratio color pairs ensures visually impaired users, like those with color blindness, can still easily see and make out the content of the sites.

## Team Members and Roles

-   [Khiem Nguyen (Repository Owner, Note Taker, Developer, and etc.)](https://github.com/khnguyen88/CIS641-HW2-Nguyen)
-   [Selena Cade (Note Taker, Developer, etc. )](https://github.com/selenacade/CIS641-HW2-Cade)
-   [Munmi Thakuria (Note Taker, Developer, etc.)](https://github.com/munmithakuria/CIS641-HW2-Thakuria)

## Team and Project Websites

### Lakeshore Misfits' Team Website

-   [Project Team Website](https://khnguyen88.github.io/GVSU-CIS641-Lakeshore-Misfits/website/index.html)

### Website Color Generator App

-   [Website Color Generator App](https://khnguyen88.github.io/GVSU-CIS641-Lakeshore-Misfits/website/projects/website-color-generator-app/)

## Prerequisites

### To access the React Web Application

-   An internet connection
-   Any browser of choice, such as Firefox, Chrome, Edge, or Safari
-   Access the React web application, [**HERE**](https://khnguyen88.github.io/GVSU-CIS641-Lakeshore-Misfits/website/projects/website-color-generator-app/)

### For Clone/Fork the Project and Run the Application Locally

-   A GitHub account
-   Git program
-   An IDE program, such as Visual Studio Code
-   Installation of Node JS, a package manager, or the ability to run "npm" commands

### For Deployment

-   A GitHub account
-   Git program
-   An IDE program, such as Visual Studio Code
-   Installation of Node JS, a package manager, or the ability to run "npm" commands

## Local Project Setup Instructions

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

## Run Instructions (For Local Builds )

1. Follow the "Local Project Setup Instructions" first

2. Open up the project root folder

3. From the VS Code (or preferred IDE) terminal, do the following steps below.

4. From the project root folder, go into the React project directory (subdirectory):

    - `cd src/website-color-generator-app`

5. To Start The Application Locally, enter the following command:

    - `npm start`

6. To quit the application while it's running, enter the following command:

    - `CTRL+C`

## GitHub Project Deployment Instructions

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

10. Push the project code up to the GitHub repository, and wait a few minutes for the project to build and deploy your new application

11. Go to the website URL defined in the **homepage** attribute in the package.json file.

12. **Note:** Deployment on other web servers or web hosting sites will require additional setup on the server side that is not included in the instruction guides. However, the application build process will very similar.

    -   Contents in the React's **build** folder will need to be copied over into the same folder path in the web server's directory.
