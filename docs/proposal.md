Team name: Lakeshore Misfits

Team members:

-   Selena Cade
-   Munmi Thakuria
-   Khiem Nguyen

# Introduction

The Color Generator Website will be a user-friendly web application that allows users to generate and select a color palette for their personal use, such as illustration, graphic design, or web design. Users can preview and auto-adjust the generated colors' intensities by values and contrast.

The website will allow users to preview the color in a static mock webpage. Users can also check all of the colors from the generated palette to determine which pairs of colors meet or fail the Web Accessibility's AA, AA-Large, AAA, and AAA-Large ratings in terms of contrast ratio values. The website will allow users to copy the color values from their favorite palette to reference and use for future projects.

Nowadays, many professionals, such as developers, illustrators, designers, and developers, must work with colors and consider accessibility in their design or work. Users who do not understand color theories or do not account for accessibility in their work users will benefit from our application by streamlining the process of identifying and selecting harmonious colors and light values that meet web accessibility guidelines. The application will also provide proper information about combinations of colors they should or shouldn't use in the palette based on the Web Content Accessibility Guidelines for educational purposes.

# Anticipated Technologies

-   The group formulated and discussed the anticipated technologies needed for this project during our in-class and online meetings. We started an idea of the project concept and its requirements. We used a thought-exercise approach, asking the "how," "what," and "why" questions to each feature in the proposed system or process in the development lifecycle and investigating our options online.

## Communication Tools

-   **Discord** - A free messaging and video chat platform and application. Discord has many benefits. It provides a centralized communication hub for the team to have group texts and video calls. Text conversations and media files shared through Discord are logged and kept on record. The logged conversation provides a source of truth for the team to fall back on and makes note-taking, record-keeping, and documentation more accessible. Our Project Sponser has created a private chat and voice channels for our team, and our team has made good use of it in our initial planning phase.

-   **SMS Group Text Message** - The text message application is available on all modern phones. SMS Group Text Messages are just a free and convenient way for the team to coordinate with each other. The benefit of the text message application is that users, by default, receive a notification anytime a chat comes in, improving the odds of them reading the message. The team has been using group text messaging as a means to set meetup times and places, inform each other of desired conversation topics to cover, and make any changes to the project repository.

## Project Management

-   **Git / Github** - Git and GitHub are two separate repository applications. Git is a desktop-based local repository that can usually be used in conjunction with an integrated development environment (IDE), and GitHub is a remote and online repository. Both applications are used in conjunction and communicate with each other and are used to centralize and save records of all the project files and data sources locally on a user's personal computer and remotely online.

-   **GitHub Project** - GitHub Project is a feature the GitHub repository application provides. The feature offers a collection of basic "agile-like" project management tools to allow individuals or teams to document and track the progress of the project and the development of their software. The tools available in GitHub Project include Task Table (Backlog List), Task Board (Kaban Board), RoadMap (Gantt Chart), Issues (Bug List), Insights (Burndown Chart), and Milestones. It is anticipated that most of the tools will be used to track the team project's progress, schedule, and deadlines.

## Software & Libraries/Dependencies

-   **Visual Studio Code** - A free integrated development environment (IDE) each team member uses to code and implement the proposed software application.

-   **NPM** - A package manager used with Visual Studio Code to install the necessary framework and library dependencies to build the project web application.

-   **Postman** - A web application that will be used test and validate HTTP requests and responses to and from APIs.

-   **React** - A popular free web application framework that will be used to develop and build the project web application.

-   **Axios** - A library and a dependency of React needed to make HTTP Requests in React.

-   **React Router** - A library and a dependency of React needed to route between pages and manage URL paths in the React-based web application.

-   **JEST** - A JavaScript testing framework, that can be used in conjunction with React to possibly provide some unit testing for the project if time allows for it.

-   **AwesomeIcons** - An online open-source icon library that allows user to place visually pleasing icons on their web application

-   **Bootstrap** - A free and easy-to-use CSS framework that allows users to implement aesthetically pleasing components and elements in their web applications.

-   **StackBlitz** - A online web IDE that allow users to develop, build, preview, and save web application with frameworks like React and Angular. The online web IDE allows for the installation of dependncies and libraries.

-   **Google Docs/Microsoft Office** - Word and powerpoint desktop and cloud applications that allow the team to make notes and and a powerpoint presentation for the proejct.

-   **Adobe Acrobat** - A PDF reader that allows users to read, create, and comments PDF file. The application will allow users to convert word documents into PDF format. Also through the powerful comment tools, users should be able to draw and sketch out the various models and diagrams required for the project.

-   **Figma (Optional)** - A UX/UI web application that allows users to mock up and design UI and screen. Figma might be used to provide teams with a high level understanding of the project application's layout of the screens and componments from a visual perspective. Might be able to use to draw and sketch out the various models and diagrams required for the project.

## APIs

-   **[Colormind Color Palette Generator](http://colormind.io/api-access/)** - A color palette generator API of the Colormind web application. It will generate and return a 5-color color-palette. The data return will be a nested array of five elements, each element representing a color. Within each child element is an array of three numeric elements, each representing a color's R, G, and B values.

-   **[WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/)** – A color contrast checker API. It takes two color values in HEX format, one as a foreground color and the other as a background color, calculates the contrast ratio between the two colors, and determines if the value meets the standard online web accessibility's AA, AAA, AA-Large, AAA-Large requirements. The data will be returned in a JSON format.

# Method/Approach

The team plans to use the Agile Software Methodology to develop our project. The team's current plan of attack is to complete all required in-class and homework assignments to help us develop the necessary documents and models needed in the software development life cycle's planning, analysis, and design phases. The team will verify with the Project Sponsor and determine if more effort is needed beyond the course assignments to develop the initial documents and models for the project to start the initial implementation. In addition, the team will work with the Project Sponsor to estimate anticipated completion dates for specific documents, such as the requirements definition report and UML models/diagrams, so that the team can begin creating the user stories and tasks of the first sprint of the project as soon as possible. Due to short time window of the semester and the project, each sprint cycle will only be a week long.

The team will use Git and GitHub repositories to centralize our project files and documents, locally and remotely. Our project's GitHub repository is the primary source of truth and records that can be shared amongst the group.

Team members should avoid working directly from the main branch for code implementations of individual tasks or features. Team members should create a sub-branch from the main branch to work on the task. Upon completion, team members must make a pull request and review their code or peers' code before merging the changes into the main branch.

The team will use GitHub Project and its tools to manage the project during its development life cycle. The team will use tools of GitHub Project to track the team project's progress, schedule, and deadlines. The team will also use GitHub Project in finer detail to create a collection of tasks required for the project and check the status and progress of individual tasks.

The team plans to be in constant communication with each other throughout the life cycle of the project. The team will use text messaging to keep in touch with each other casually to plan and coordinate meetings. The team will use Discord and in-person meetings to have more in-depth discussions about the project, such as stand-ups, backlog and task refinement, planning poker, requirement and model revisions, task assignments, bugs, scheduling, and deadlines. The team will meet at least once a week but will try and meet more frequently to keep the project moving and all project members on the same page. Each major meeting

The team has already investigated the technologies needed for the proposed web application's features through our in-class and online meetings and discussions. The team created and shared a resource document on Discord from this investigation. The team has already discussed our expertise in the technologies required to develop the system, and we have a general idea of the essential features needed to make the project scope feasible. It was determined that while the team has some programming experience, everyone has little to no experience with the React library or some of the dependencies needed to implement the features desired for the project.

The team agreed that before implementing the actual project, the team should spend some time investigating, implementing, and playing with some of the required technologies to get familiar with it. This effort will be done during the earlier workflows and phases of the project. The team is considering using an online sandbox IDE environment, known as StackBlitz, to play and get acquainted with specific React libraries, dependencies, and features like Axios, React Router/Routing, JEST, Props, Hooks, etc., before implementing it for the actual project. The benefit of StackBlitz is that applications created on there can be shared between team members via hyperlinks and documented. Another advantage of this approach is that it keeps rough/dirty code separate from the project repository. Further discussion with the Project Sponsor is needed to determine if this is a route that we can take.

In terms of stories and tasks, the team believes most major modules (components and services) can be built independently and later integrated together. The team will utilize mock data as placeholder until real data can be recieved from the APIs. Here is a rough layout of our file system:

**Component Folder**

-   Main App/Root Component
    -   Control Panel Component (Left or Top)
        -   Button Components
            -   Generate Palette Button Component
            -   Adjust Color Contrast Button Component
            -   Undo Color Contrast Adjustment Button Component
        -   Palette (Preview) Component
        -   Navigation Component
            -   Link Components (Associated w/ URL assigned to Routes)
    -   View Component (Right or Bottom)
        -   Switch / Router Component
            -   Route Components (Associated w/ URL assigned to Links and Screen Components)
    -   Screen Components
        -   Color Layout Render Screen Component (Main)
        -   Color Contrast Checker Screen Component

**Service Folder**

-   Color Palette API Service File
-   Contrast Checker API Service File
-   Color Contrast Adjustment Service File

Ideally, the team hopes to begin the first sprint of the project and start on implementation right after the midterm. The group plans to timebox the project and stop implementation at least a one before the presentation's date. The purpose of this hard stop is to provide the team with sufficient time to build and host the web application, finalize documents needed for the deliverables, work on the presentation slide, and practice for the presentation.

# Estimated Timeline

## Important Dates and Team Homework Deliverables

-   System Request Document due September 21
-   System Proposal Document due September 27
-   UML Diagrams due before October 11
-   Project Status and Midterm Presentation due Mid October
-   Fall Break October 22-24
-   Class Diagrams due Late October or Early November
-   Thanksgiving Break 22-26
-   Project Presentation due The Week of December 3

## Software Design Lifecycle: Agile Approach

### Planning

-   Create System Request Document by September 21
-   Create System Proposal Document by September 27

### Analysis and Design

-   Watch videos and tutorials on the technology being used between September 27 and October 8
-   Determine the technical, econmic, and organizational feasibilities for the project by October 4
-   Determine Functional and Non-funcitonal Requirements by October 8
-   Create UML Diagrams by October 11
-   Create first prototype by October 20
-   Create Class Diagrams by October 25
-   Create the initial set of User Stories/Tasks by October 25

### Implementation and Testing

-   Start experimenting and learn the technologies needed to implement the project (Elaboration Workflow) by October 11
-   Kickoff the first sprint cycle and iteration of implementation by October 25 (or November 1st at the latest)
-   A timebox is set to stop any significant implementation work one week before the project presentation.
-   At a minimum, a user acceptance test will be performed each iteration.

### Agile Iterations

-   Due to the short semester-length, our sprint cycle will be only one week long.
-   The first sprint kickoff will occur by October 25 (or November 1st at the latest).
-   The last sprint will end at least one week before the project presentation.
-   At the start of each new sprint cycle, refinements will be made to our initial documents, such as the requirements, models, and user stories.

# Anticipated Problems

-   As stated above, we are using tehcnologies such as React and Axios. Our team isn't familar with these technologies so we need to watch tutorials and read any articles that will help us. Before starting the design and implementation phase, we have to go through each technology and make sure every group members understands it enough to perorm the tasks needed for this project.

-   Another problem we anticpate is the actual setup of the technologies. In order to understand the setup, we need to do proper research for each technology. We also need to spend time understanding the different versions of the technologies and make sure they are all compatible with one another. Each team members needs to communicate to ensure we all have the same versions of each technology.

-   Along with having little experience with Axios and React, we also have little experience with using GitHub Pages or Google Cloud's Virtual Machine. Each memeber needs to dedicate time to watch tutorials, performing demos, and communicating with our project sponsor about using one of those applications to deploy our project. These steps need to be done well in advance before we can work on the implemenation and testing phases of our project. We have created a reasonable schedule and scope to accomodate this forseen problem.

-   NEED TO UPDATE There are time constraints with all project members since we are taking other courses and working. We strive to communicate and find a time for every member to meet to work on the project. To ensure we meet our schedule properly and complete our project on time, we will create a realistic scope, factor setbacks or slack time into our schedule, and adjust our requirements as necessary.

-   NEED TO UPDATE While the APIs we use are free, there might be constraints if those APIs switch over to a pay-to-use model. We will watch closely for each API and ensure they remain free and accessible for the duration of the course.
