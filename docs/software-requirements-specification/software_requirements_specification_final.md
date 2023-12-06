# Overview

The purpose of this SRS document is to provide a set of software requirements, the software artifacts, the traceability links, and the change management plans for the Website Color Generator Application. The requirements specify the features and functionalities that the application should have and exhibit. The software artifacts are the UML diagrams created and updated during the analysis and design phases of the software development lifecycle. The traceability links are tables that map the requirements to the items within the diagrams, such as use cases, activities, and classes. The change management plans discuss the team's plans for incorporating the application into the users' business and ecosystem.

# Software Requirements

This section provides the requirements that our application should have or exhibit. The requirements are broken down into functional and non-functional requirements. Functional requirements will focus on a feature's input, output, or process. Non-functional requirements will focus on the behaviors and constraints placed on them.

In terms of functional requirements, our team focused on the layout, the content, the style, and the features of the application. The categories of functional requirements discussed below are Application Layout, Color Palette, Control Panel, Navigation Panel, and Pages and Associated Components.

Regarding non-functional requirements, our team focused on usability, security, and accessibility of the application. The categories of non-functional requirements discussed below are Operational, Performance, Security, Accessibility, and Usability Requirements.

## Functional Requirements

### Application Layout

| ID  |                                                                Requirement                                                                |
| :-: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| FR1 | The application must have a control panel with actionable buttons that can manipulate or obtain information about a global color palette. |
| FR2 |                     The application must have a navigation panel that allows access to all pages through hyperlinks.                      |
| FR3 |                    The application must have a "panels" section that contains the control panel and navigation panel.                     |
| FR4 |         The application must have a "pages" section that loads and routes to a new page when the application's URL path changes.          |
| FR5 |        The application shall have a two-section layout with the "panels" section displayed on the left or top of the application.         |
| FR6 |       The application shall have a two-section layout with the "pages" section displayed on the right or bottom of the application.       |
| FR7 |                    The control panel and navigation panel shall be accessible regardless of what page the user is on.                     |
| FR8 |                 The application's default background colors shall be white or a shade of gray, except for the error page.                 |

### Color Palette

|  ID   |                                                                                Requirement                                                                                 |
| :---: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  FR9  |                                 The color palette shall be a global state within the application through the context and context provider.                                 |
| FR9A  |                             The color palette state, context, and context provider shall be created and contained within the palette context.                              |
| FR9B  |                                                 The global color palette state shall be assigned to the context provider.                                                  |
| FR9C  |             In the application, the top-level parent component shall connect the child components to the context provider to access the global color palette.              |
| FR10  |                                         The global color palette state shall be able to be replaced, set, or updated by the user.                                          |
| FR11  |                            The global color palette must be accessible by any components within the application by using the context provided.                             |
| FR11A |                              Any components within the application shall be able to utilize data provided by the global color palette state.                               |
| FR12  |             The components and HTML elements that apply the global color palette to its style shall change when a new color palette is generated or adjusted.              |
| FR13  |                        The default colors in the palette must have hexadecimal values of "#ffffff," "#e6e6e6," "#808080," "#191919," and "#000000."                        |
| FR14  |                                     The application shall have the functionality of a palette's color saturation and brightness level.                                     |
| FR15  |                                         The application shall be able to convert between the RGB, HSV, HSL, and HEX color values.                                          |
| FR16  |                      The application shall keep track of WCAG contrast rating information of all possible color pair combinations within the palette.                      |
| FR16A |                           When the global color palette state is set with a new palette, color pairs shall be updated to reflect the new colors.                           |
| FR17  |                      The application shall be able to estimate the contrast ratio and WCAG contrast ratings of a color pair independently of any API.                      |
| FR17A |                 When the global color palette state is set with a new palette, the WCAG contrast ratings shall be updated to reflect the new color pairs.                  |
| FR17B |                                            The colors received and used in this application shall be of a standard class type.                                             |
| FR17C |                                          The colors not of the standard class type shall be formatted to the standard class type.                                          |
| FR17D |                                                           The global palette shall be able to call API services.                                                           |
| FR17E |                     The global palette shall be able to generate (or create) and return a new palette based on the colors received by an API service.                      |
| FR17F |                                The global palette shall be able to adjust its colors and return a new palette based on the adjusted colors.                                |
| FR17G |                                                     The global palette shall be able to copy its color to a clipboard.                                                     |
| FR17H | All components shall be able to pass the global palette, the palette's properties, or the palette's methods to their child components through the child component's props. |
| FR17I |                                            The global palette shall contain and provide data about the colors and color pairs.                                             |
| FR17J |                                    The global palette's color pairs shall contain information about each color pair's contrast ratings.                                    |
| FR17K |                                      When a color palette recieves new colors, it shall assign and set those colors to its property.                                       |

### Control Panel

|  ID   |                                                    Requirement                                                    |
| :---: | :---------------------------------------------------------------------------------------------------------------: |
| FR18  |      The application's control panel shall have a button that allows users to generate a new color palette.       |
| FR19  |          The application's control panel shall have a button allowing users to adjust the color palette.          |
| FR20  | The application's control panel shall have a button that allows users to copy the color palette to the clipboard. |
| FR21  |     The application's control panel shall have a display for the user to preview the current palette colors.      |
| FR22  |      The control panel's palette previewer shall display color information of the colors within the palette.      |
| FR23  |   The color information displayed on the palette previewer shall show the color's HEX, HSL, and V information.    |
| FR24  |           The control panel's buttons shall have a black font color and a light cyan background color.            |
| FR24A |             When hovered over, the control panel's buttons shall change its background color to gold.             |
| FR25  |                       The header and buttons in the control panel shall be center-aligned.                        |
| FR26  |                   The control panel's button shall be able to use the global palette's methods.                   |
| FR26A |                The control panel's buttons shall assign the palette method it needs to its props.                 |
| FR26B |                 The control panel's buttons shall assign the palette method to its event handler.                 |
| FR26C |                The control panel shall display child components and all associated HTML elements.                 |

### Navigation Panel

|  ID   |                                                      Requirement                                                      |
| :---: | :-------------------------------------------------------------------------------------------------------------------: |
| FR27  |    The application's navigation panel shall have a hyperlink that routes users to the path of the Mock Site page.     |
| FR28  | The application's navigation panel shall have a hyperlink that routes users to the path of the Contrast Checker page. |
| FR29  |     The application's navigation panel shall have a hyperlink that routes users to the path of the About Us page.     |
| FR30  |                            The navigation panel's hyperlinks shall have a blue font color.                            |
| FR31  |         The navigation panel's hyperlinks shall change its background color to dark orange when hovered over.         |
| FR32  |                      The header and hyperlinks in the navigation panel shall be center-aligned.                       |
| FR32B |                 The navigation panel shall display child components and all associated HTML elements.                 |

### Pages and Associated Components

|  ID   |                                                                              Requirement                                                                               |
| :---: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| FR33  |                                            The pages accessed via hyperlinks within the application shall all have headers.                                            |
| FR34  |             The application must have a Mock Site page where all elements' background color and font styles update with the current global color palette.              |
| FR35  |                            The colors of the SVG images shown on the Mock Site page shall be updated with the current global color palette.                            |
| FR36  |              The application must have a Contrast Checker page that maps and displays cards representing all combinations of color pairs in the palette.               |
| FR37  |                                   The cards shown on the Contrast Checker page shall display the hexadecimal values of a color pair.                                   |
| FR38  |       The cards on the Contrast Checker page shall display the contrast ratio and the WCAG's AA, AA Large, AAA, and AAA Large contrast ratings of a pair color.        |
| FR39  |                           The cards on the Contrast Checker page shall display a green font color for contrast ratings with a "pass" value.                            |
| FR40  |                            The cards on the Contrast Checker page shall display a red font color for contrast ratings with a "fail" value.                             |
| FR41  | The cards shown on the Contrast Checker page shall provide a color pair previewer that sets the content's background color and text color to color pair, respectively. |
| FR42  |                       The color pairs used for all cards shown on the Contrast Checker page shall update with the current global color palette.                        |
| FR42A |                                                  The cards shall be assigned their color pair data through its props.                                                  |
| FR43  |                                  The application must have an About Us page that provides information about the project and the team.                                  |
| FR44  |                         The application must have an Error page that indicates the user is on an invalid page or path within the application.                          |
| FR45  |                            The user shall be able to access the different pages within the application if they enter the correct URL path.                             |
| FR46  |                                            The user shall be directed to the error page if they enter the invalid URL path.                                            |
| FR46A |                                            The pages shall display their child components and all associated HTML elements.                                            |

### API Services

|  ID   |                                                                   Requirement                                                                   |
| :---: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
| FR47  |                                 The application shall generate a new palette if the Color Generator API works.                                  |
| FR47A |                               The application shall have a service that makes request to the Color Generator API.                               |
| FR48  |          The application shall get the contrast ratio and web accessibility ratings of a color pair if the Contrast Checker API works.          |
| FR48A |                              The application shall have a service that makes request to the Contrast Checker API.                               |
| FR49  |                                          The successful API responses shall be in proper JSON format.                                           |
| FR50  |                          The application shall alert the user if the Color Generator API cannot create a new palette.                           |
| FR51  | The application shall alert the user if the accessibility contrast ratings of a pair color cannot be obtained through the Contrast Checker API. |
| FR52  |                               The application's API services shall handle the responses it receives from the API.                               |
| FR53  |                                     The application's API services log any errors it receives from the API.                                     |
| FR54  |    If the API services receive a valid response, they shall format the response data to a standard type before they return it to the caller.    |
| FR55  |                          If the API services receive an error response, they shall return a null value to the caller.                           |

## Non-Functional Requirements

### Operational Requirements

|  ID  |                                                         Requirement                                                         |
| :--: | :-------------------------------------------------------------------------------------------------------------------------: |
| NFR1 |                          The user shall be able to view the application even if the APIs are down.                          |
| NFR2 |                   The application shall still work with limited functionality even if the APIs are down.                    |
| NFR3 |                         The application shall still be usable on the major browsers on Windows OS.                          |
| NFR4 |                           The application shall still change between pages if the APIs are down.                            |
| NFR5 | The application shall still work with limited functionality on mobile or tablet devices when oriented in a horizontal view. |

### Performance Requirements

|  ID   |                                                      Requirement                                                      |
| :---: | :-------------------------------------------------------------------------------------------------------------------: |
| NFR6  |                         The application shall be able to load up all pages within 10 seconds.                         |
| NFR7  |                         The application shall generate a new color palette within 10 seconds.                         |
| NFR8  |                       The application shall adjust the current color palette within 10 seconds.                       |
| NFR9  |                               The application shall load all buttons within 10 seconds.                               |
| NFR10 |                                The application shall load all links within 10 seconds.                                |
| NFR11 | The application shall complete all API call requests within 10 seconds if the network and API servers are functional. |

### Security Requirements

|  ID   |                                                                   Requirement                                                                    |
| :---: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| NFR12 |                                       The application must not request or store personal user information.                                       |
| NFR13 |                                 The application shall not share personal user information with the API services.                                 |
| NFR14 |                                         The application shall not log or store user behavior and habits.                                         |
| NFR15 |                         The user-generated colors shall not persist if the application has been restarted or refreshed.                          |
| NFR16 |                                   The users shall not have the ability to navigate to pages that do not exist.                                   |
| NFR17 | The colors generated by the user shall not persist if the user does not access a page through one of the hyperlinks within the navigation panel. |

### Accessibility Requirements

|  ID   |                                                                                         Requirement                                                                                          |
| :---: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| NFR18 |                                                  The headers in the application shall meet the WCAG AA Large contrast rating at a minimum.                                                   |
| NFR19 |                                                       The control panel's buttons shall meet the WCAG AA contrast rating at a minimum.                                                       |
| NFR20 |                                                 The navigation panel's hyperlinks shall meet the WCAG AA Large contrast rating at a minimum.                                                 |
| NFR21 |                         The control panel's previewer shall toggle between a white or black font color depending on the perceived lightness of the background color.                         |
| NFR22 | The texts within the main section of the mock site page shall toggle between the lightest or darkest color within the palette, depending on the perceived lightness of the background color. |
| NFR23 |                    The headers and body texts of the mock site page shall meet the WCAG AA contrast ratings, at a minimum, when the user has adjusted the color palette.                     |

### Usability Requirements

|  ID   |                                                               Requirement                                                                |
| :---: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| NFR24 |     The application shall not require the user to perform more than one action or click to go to a new page within the application.      |
| NFR25 |           The application shall not require the user to perform more than one action or click to generate a new color palette.           |
| NFR26 |         The application shall not require the user to perform more than one action or click to adjust the current color palette.         |
| NFR27 | The application shall not require the user to perform more than one action or click to copy the hexadecimal values of the color palette. |
| NFR28 |                                             The application shall be simple and easy to use.                                             |
| NFR29 |      The application's mock site page shall have an aesthetically pleasing layout roughly following the UI/UX 60-30-10 color rules.      |
| NFR30 |                      The cards displayed on the contrast checker page shall have an aesthetically pleasing layout.                       |

# Change management plan

This section is about how we can ensure that the application will be compatible and incorporated with the users' ecosystem, the team's plan to train and aid our users to become proficient with the software, and our approach to communicating with our users and our plans to handle issues.

-   How will you train people to use it?

    -   The team can train people, such as developers and designers, who are interested in our application in several ways. The team can set up in-person or video-chat training sessions for any group who contacts us to show and demo how the application works.

    -   The team will set up a "How-To" or "Tutorial" page on the web application that will provide written step-by-step instructions with screenshots to aid first-time users with the application. The team will include the instructions on our GitHub repository's README file under a "How-To" or "Tutorial" section.

    -   The team will also record a walkthrough session of the application and host the recording on a video streaming website like YouTube. Links to the tutorial video will provided on our application's "How-To" or "Tutorial" page and our GitHub repository's README file so that any new user can refer to it easily in the future.

-   How will you ensure it integrates within their ecosystem / software?

    -   As our system is a web application, the team can check to see if users can access and use the application on their browser and device without issues. Suppose a lot of users contact us about usability and compatibility problems. In that case, we will do our best to patch the issues in future releases to ensure a smooth user experience and help enhance compatibility with the ecosystem.

    -   Ideally, the team would like to partner with a small group of users from various businesses or organizations who believe in and support our product to perform user-acceptance tests of any new versions of our application in development before and after we deploy the latest version publically. The small group of users will have some privileges on our GitHub site to submit issue tickets and will have access to our contacts for immediate feedback. The users will also have access to a private development version of our application to become familiar with the environment and make suggestions if needed. The team and the selected group of users can set up meetings to discuss improvements that can enhance the user and integration experiences.

    -   The goal is a dedicated group of users who continuously monitor and check for issues before and after releases/integration. If any problem arises, the team hopes it is resolved and fixed before publicly releasing it to a broader audience to mitigate the messages we may receive.

    -   To keep our users informed of any updates to our applications, the team will provide a pop-up notification in our application about any upcoming future version releases before deployment and provide change details. To ensure user satisfaction, the team will ensure users can access all prior application versions through links in the footer or navigation panel.

-   How will you ensure that it any discovered issues are resolved?

    -   The team will set up several means to provide technical support for users experiencing issues with our application.

    -   The team will set up a contact page with a form allowing users to submit any problems they discovered and wish the team would resolve. The form will have a dropdown enabling users to select from a list of common issue types and provide a description of it. The information in this form will be forwarded to our team email address; a copy will be stored in a database for analysis and metric-tracking purposes.

    -   The team will develop a partnership with a small group of users from various businesses and organizations to perform user-acceptance tests and track and monitor issues they may discover from the development version before deployment so that they can be resolved before the production version is released publically. This small group of users will have limited access to our GitHub and submit the issues directory to our remote repository. The group of users can also set up a meeting with us to review the issue and proposed solutions.

    -   The team will collect and aggregate the issues into various categories and levels of severity and frequency and will prioritize resolving the major bug fixes first through patches or version releases. The team will do our best to pinpoint the source of the bug, propose several solutions to our small group of users, and fix the bug based on the solution the extended team agrees on. All patched updates will get tested thoroughly before being deployed for production.

    -   Ideally, bug fixes are identified and resolved before the public production releases. Also, all bug fixes will be announced to the users by a notice pop-up message appearing on our application for a limited period.

# Traceability links

In this section, you will find a traceability matrix for our use case diagrams, class diagrams, and activity diagrams. The use case diagram traceability consists of the name of the use case diagram, the use case, and which requirement it is connected to. A similar process is created for both the class diagrams and activity diagrams. The class diagram traceability includes the class diagram and the requirement it is connected to. Lastly, the activity diagram traceability includes the activity diagram name, the present activity, and the requirement ID that is connected to it.

## Use Case Diagram Traceability

|            Artifact ID             |                  Artifact Name                  |                        Requirement ID                        |
| :--------------------------------: | :---------------------------------------------: | :----------------------------------------------------------: |
|               Colors               |                 Generate Colors                 |                       FR18, FR47, FR49                       |
|               Colors               |                  Return Colors                  |                             FR47                             |
|               Colors               |                   Set Colors                    |                             FR10                             |
|               Colors               |                 Receive Colors                  |                         FR10, FR17B                          |
|               Colors               |                  Adjust Colors                  |                         FR14, FR17F                          |
|               Colors               |              Convert Color Models               |                             FR15                             |
|               Colors               |                  Format Colors                  |                         FR17B, FR17C                         |
|            Color Pairs             |         Get Color Pair Contrast Ratings         |                             FR48                             |
|            Color Pairs             |       Return Color Pair Contrast Ratings        |                             FR48                             |
|            Color Pairs             |               Create Color Pairs                |                      FR16, FR17A, FR17I                      |
|            Color Pairs             |     Estimate Color Pair's Contrast Ratings      |                             FR17                             |
|            Color Pairs             |           Store Color Pairs in Array            |                         FR16, FR17I                          |
|            Color Pairs             |       Update Color Pair Contrast Ratings        |                      FR42, FR17, FR17J                       |
|   User Control Panel Interaction   |          Click Generate Palette Button          |                             FR18                             |
|   User Control Panel Interaction   |                Generate Palette                 |                             FR18                             |
|   User Control Panel Interaction   |           Click Adjust Palette Button           |                             FR19                             |
|   User Control Panel Interaction   |                 Adjust Palette                  |                            FR17F                             |
|   User Control Panel Interaction   |            Click Copy Palette Button            |                             FR20                             |
|   User Control Panel Interaction   |                  Copy Palette                   |                             FR20                             |
|   User Control Panel Interaction   |              Provide Palette State              |                             FR9                              |
|   User Control Panel Interaction   |                   Set Palette                   |                             FR10                             |
|   User Control Panel Interaction   |                 Return Palette                  |                         FR17E, FR17F                         |
| Page Viewing from Navigation Panel |                    View Page                    |                          FR4, NFR1                           |
| Page Viewing from Navigation Panel |              Go to Mock Site Page               |                       FR2, FR27, FR34                        |
| Page Viewing from Navigation Panel |           Go to Contrast Cheker Page            |                          FR2, FR28                           |
| Page Viewing from Navigation Panel |               Go to About Us Page               |                          FR2, FR29                           |
| Page Viewing from Navigation Panel |                Click Page Links                 |                    FR2, FR27, FR28, FR29                     |
|   Page Viewing from Address Bar    |                    View Page                    |                          FR4, NFR1                           |
|   Page Viewing from Address Bar    |              Go to Mock Site Page               |                       FR4, FR27, FR34                        |
|   Page Viewing from Address Bar    |           Go to Contrast Checker Page           |                          FR4, FR28                           |
|   Page Viewing from Address Bar    |               Go to About Us Page               |                          FR4, FR29                           |
|   Page Viewing from Address Bar    |                Go to Error Page                 |                             FR44                             |
|   Page Viewing from Address Bar    |                  Type Page URL                  |                       FR4, FR44, FR45                        |
|   Page Viewing from Address Bar    |              Type Invalid Page URL              |                             FR46                             |
|            Context Hook            |                 Create Context                  |                          FR9, FR9A                           |
|            Context Hook            |              Create Palette State               |                          FR9, FR9A                           |
|            Context Hook            |             Create Context Provider             |                          FR9, FR9A                           |
|            Context Hook            |        Assign State to Context Provider         |                          FR9, FR9B                           |
|            Context Hook            |                Set Palette State                |                             FR10                             |
|            Context Hook            |          Use Context to Retrieve State          |                             FR11                             |
|            Context Hook            |                Use Palette State                |                            FR11A                             |
|            Context Hook            | Connect Children Components to Context Provider |                             FR9C                             |
|       Color Mind API Service       |               Send Request to API               |                         FR47, FR47A                          |
|       Color Mind API Service       |                 Handle Response                 |                             FR52                             |
|       Color Mind API Service       |                    Log Error                    |                             FR53                             |
|       Color Mind API Service       |              Return Colors or Null              |                       FR47, FR54, FR55                       |
|       Color Mind API Service       |      Convert Response to Formatted Colors       |                       FR47, FR54, FR55                       |
|       Color Mind API Service       |                  Send Reponse                   |                             FR52                             |
|       Color Mind API Service       |                Call API Service                 |                            FR17D                             |
|       Color Mind API Service       |                   Alert Error                   |                             FR50                             |
|       Color Mind API Service       |        Generate New Palette from Colors         |                            FR17E                             |
|       Color Mind API Service       |              Return (New) Palette               |                            FR17E                             |
|    Contrast Checker API Service    |               Send Request to API               |                         FR48, FR48A                          |
|    Contrast Checker API Service    |                 Handle Response                 |                             FR52                             |
|    Contrast Checker API Service    |                    Log Error                    |                             FR53                             |
|    Contrast Checker API Service    |         Return Contrast Ratings or Null         |                       FR48, FR54, FR55                       |
|    Contrast Checker API Service    |                  Send Reponse                   |                             FR52                             |
|    Contrast Checker API Service    |                Call API Service                 |                            FR17D                             |
|    Contrast Checker API Service    |                   Alert Error                   |                             FR50                             |
|    Contrast Checker API Service    |               Provide Color Pairs               |                         FR16, FR17I                          |
|    Contrast Checker API Service    |            Update Color Pair Ratings            |                            FR17A                             |
|       Control Panel Display        |              Provide Palette State              |                             FR9                              |
|       Control Panel Display        |                 Provide Colors                  |                         FR11, FR17I                          |
|       Control Panel Display        |              Display HTML Elements              | FR18, FR19, FR20, FR21, FR22, FR23, FR24, FR24A, FR25, FR26C |
|       Control Panel Display        |               Display Components                |          FR18, FR19, FR20, FR21, FR22, FR23, FR26C           |
|       Control Panel Display        |          Assign Palette Method to Prop          |                   FR1, FR11A, R17H, FR26A                    |
|       Control Panel Display        |     Assign Palette Method to Event Handler      |                          FR1, FR26B                          |
|       Control Panel Display        |             Assign Palette to Prop              |                      FR11A, FR12, FR22                       |
|       Control Panel Display        |         Set Elements Styles with Colors         |                      FR11A, FR12, FR22                       |
|       Control Panel Display        |          Set Elements Text with Colors          |                            FR11A                             |
|       Contrast Checker Page        |              Provide Palette State              |                             FR9                              |
|       Contrast Checker Page        |               Provide Color Pairs               |                         FR11, FR17I                          |
|       Contrast Checker Page        |           Map Cards from Color Pairs            |                             FR36                             |
|       Contrast Checker Page        |              Display HTML Elements              |          FR36, FR37, FR38, FR39, FR40, FR41, FR46A           |
|       Contrast Checker Page        |                Display Component                |                            FR46A                             |
|       Contrast Checker Page        |           Assign Color Pairs to Prop            |                     FR42A, FR17H, FR11A                      |
|       Contrast Checker Page        |      Set Elements Styles with Color Pairs       |                         FR41, FR11A                          |
|       Contrast Checker Page        |       Set Elements Text with Color Pairs        |                      FR37, FR38, FR11A                       |
|           Mock Site Page           |              Display HTML Elements              |                      FR34, FR35, FR46A                       |
|           Mock Site Page           |                 Provide Colors                  |                         FR11, FR17I                          |
|           Mock Site Page           |              Provide Palette State              |                             FR9                              |
|           Mock Site Page           |             Set Styles with Colors              |                      FR34, FR35, FR11A                       |

## Class Diagram Traceability

|                          Artifact ID                          |       Artifact Name       | Requirement ID                                                                                                              |
| :-----------------------------------------------------------: | :-----------------------: | --------------------------------------------------------------------------------------------------------------------------- |
|             Palette Class and Associated Classes              |          Palette          | FR9, FR13, FR14, FR16, FR16A, FR17, FR17A, FR17B, FR17C, FR17D, FR17E, FR17E, FR17F, FR17G, FR17I, FR17J, FR17K, FR50, FR51 |
|             Palette Class and Associated Classes              | ContrastCheckerAPIService | FR17B, FR17C, FR48, FR48A, FR52, FR53, FR54, FR55                                                                           |
|             Palette Class and Associated Classes              |      ContrastRating       | FR16, FR17, FR17A, FR17J, FR38, FR39, FR40 NFR18, NFR19, NFR20                                                              |
|             Palette Class and Associated Classes              |    ColorMindAPIService    | FR17B, FR17X, R47, FR47A, R49, FR52, FR53, FR54, FR55                                                                       |
|             Palette Class and Associated Classes              |         TinyColor         | FR14, FR15, FR17B, FR17C                                                                                                    |
|             Palette Class and Associated Classes              |         ColorPair         | FR16, FR16A, FR17, FR17A, FR17B, FR17C, FR36, FR37, FR41, FR42, FR48                                                        |
| API Component, Child Components, Global Context State Classes |            App            | FR1, FR2, FR3, FR4, FR5, FR6, FR7                                                                                           |
| API Component, Child Components, Global Context State Classes |      PaletteProvider      | FR9C                                                                                                                        |
| API Component, Child Components, Global Context State Classes |      PaletteContext       | FR9B, FR11A                                                                                                                 |
| API Component, Child Components, Global Context State Classes |          Router           | FR4, FR45, FR46                                                                                                             |
| API Component, Child Components, Global Context State Classes |       PagesSection        | FR4                                                                                                                         |
| API Component, Child Components, Global Context State Classes |          Routes           | FR4, FR45, FR46                                                                                                             |
| API Component, Child Components, Global Context State Classes |           Route           | FR4, FR45, FR46                                                                                                             |
| API Component, Child Components, Global Context State Classes |         ErrorPage         | FR4, FR44, FR46                                                                                                             |
| API Component, Child Components, Global Context State Classes |          AboutUs          | FR4, FR29, FR43, FR45                                                                                                       |
| API Component, Child Components, Global Context State Classes |      ContrastChecker      | FR4, FR12 FR28, FR36, FR45                                                                                                  |
| API Component, Child Components, Global Context State Classes |         MockSite          | FR4, FR12, FR27, FR34, FR35, FR45                                                                                           |
| API Component, Child Components, Global Context State Classes |   ColorPairContrastCard   | FR12, FR17H, FR36, FR37, FR38, FR39, FR40, FR41, FR41, FR42A                                                                |
| API Component, Child Components, Global Context State Classes |       PanelsSection       | FR3, FR7                                                                                                                    |
| API Component, Child Components, Global Context State Classes |      NavigationPanel      | FR2, FR32B                                                                                                                  |
| API Component, Child Components, Global Context State Classes |           Link            | FR2                                                                                                                         |
| API Component, Child Components, Global Context State Classes |       React Context       | FR9, FR11, FR11A                                                                                                            |
| API Component, Child Components, Global Context State Classes |       ControlPanel        | FR1, FR25, FR26C                                                                                                            |
| API Component, Child Components, Global Context State Classes |     PalettePreviewer      | FR12, FR17H, FR21, FR22, FR23, FR24, FR24A, FR25, FR26A, FR26B                                                              |
| API Component, Child Components, Global Context State Classes |        ReactState         | FR9, FR9B                                                                                                                   |
| API Component, Child Components, Global Context State Classes |       ActionButton        | FR1, FR10, FR17H, R18, FR19, FR20                                                                                           |
| API Component, Child Components, Global Context State Classes |          Palette          | FR9, FR13, FR14, FR16, FR16A, FR17, FR17A, FR17B, FR17C, FR17D, FR17E, FR17E, FR17F, FR17G, FR17I, FR17J, FR17K, FR50, FR51 |

## Activity Diagram Traceability

|                      Artifact ID                       |                          Artifact Name                          |                        Requirement ID                        |
| :----------------------------------------------------: | :-------------------------------------------------------------: | :----------------------------------------------------------: |
|              Navigation and Page Viewing               |                        load Application                         |                      FR3, FR4, FR5, FR6                      |
|              Navigation and Page Viewing               |                         Go to Mock Site                         |                          FR2, FR27                           |
|              Navigation and Page Viewing               |                         View Mock Site                          |                          FR34, NFR1                          |
|              Navigation and Page Viewing               |                       Go to About Us Page                       |                     FR2, FR4, FR29, FR45                     |
|              Navigation and Page Viewing               |                       View About Us Page                        |                          FR43, NFR1                          |
|              Navigation and Page Viewing               |                        Go to Error Page                         |                        FR2, FR4, FR46                        |
|              Navigation and Page Viewing               |                         View Error Page                         |                          FR44, NFR1                          |
|              Navigation and Page Viewing               |                   Go to Contrast Checker Page                   |                     FR2, FR4, FR28, FR45                     |
|              Navigation and Page Viewing               |                   View Contrast Checker Page                    |                       FR29, FR36, NFR1                       |
|              Navigation and Page Viewing               |                        Close Application                        |                      FR3, FR4, FR5, FR6                      |
|             User Control Panel Interaction             |                        Start Application                        |                      FR3, FR4, FR5, FR6                      |
|             User Control Panel Interaction             |                 Get Palette State from Context                  |                             FR9                              |
|             User Control Panel Interaction             |                  Press Generate Palette Button                  |                             FR18                             |
|             User Control Panel Interaction             |                        Generate Palette                         |                             FR18                             |
|             User Control Panel Interaction             |                   Press Adjust Palette Button                   |                             FR19                             |
|             User Control Panel Interaction             |                         Adjust Palette                          |                             FR19                             |
|             User Control Panel Interaction             |                          Keep Palette                           |                         FR11A, FR20                          |
|             User Control Panel Interaction             |                       Return New Palette                        |                         FR17E, FR17F                         |
|             User Control Panel Interaction             |                         Set New Palette                         |                   FR1, FR10, FR16A, FR17A                    |
|             User Control Panel Interaction             |                    Press Copy Palette Button                    |                             FR20                             |
|             User Control Panel Interaction             |                          Copy Palette                           |                             FR20                             |
|             User Control Panel Interaction             |                       Do Not Copy Palette                       |                             FR20                             |
|      Color Generation with Color Mind API Service      |                   Call Color Mind API Service                   |                            FR17D                             |
|      Color Generation with Color Mind API Service      |               Make API Request to Color Mind API                |                         FR47, FR47A                          |
|      Color Generation with Color Mind API Service      |                         Handle Response                         |                             FR52                             |
|      Color Generation with Color Mind API Service      |              Convert Response to Formatted Colors               |                            FR17E                             |
|      Color Generation with Color Mind API Service      |                          Return Colors                          |                             FR47                             |
|      Color Generation with Color Mind API Service      |                            Log Error                            |                             FR53                             |
|      Color Generation with Color Mind API Service      |                           Return Null                           |                             FR55                             |
|      Color Generation with Color Mind API Service      |                           Alert Error                           |                             FR50                             |
|      Color Generation with Color Mind API Service      |              Convert Response to Formatted Colors               |                             FR54                             |
|      Color Generation with Color Mind API Service      |                Generate New Palette From Colors                 |                            FR17E                             |
|      Color Generation with Color Mind API Service      |                       Return New Palette                        |                            FR17E                             |
| Updating Color Pairs with Contrast Checker API Service |                 Retrieve Palette's Color Pairs                  |                         FR17I, FR17J                         |
| Updating Color Pairs with Contrast Checker API Service |                   Iterate Through Color Pairs                   |                             FR16                             |
| Updating Color Pairs with Contrast Checker API Service |                    Call Checker API Service                     |                            FR17D                             |
| Updating Color Pairs with Contrast Checker API Service |            Make API Request to Contrast Checker API             |                         FR48, FR48A                          |
| Updating Color Pairs with Contrast Checker API Service |                         Handle Response                         |                             FR52                             |
| Updating Color Pairs with Contrast Checker API Service |                     Return Contrast Ratings                     |                          FR48, FR54                          |
| Updating Color Pairs with Contrast Checker API Service |                Update ColorPair Contrast Ratings                |                            FR16A                             |
| Updating Color Pairs with Contrast Checker API Service |                            Log Error                            |                             FR53                             |
| Updating Color Pairs with Contrast Checker API Service |                           Return Null                           |                             FR55                             |
| Updating Color Pairs with Contrast Checker API Service |                           Alert Error                           |                             FR51                             |
|               Palette Context and State                |                         Create Context                          |                          FR9, FR9A                           |
|               Palette Context and State                |                     Create Context Provider                     |                          FR9, FR9A                           |
|               Palette Context and State                |                      Create Palette State                       |                          FR9, FR9A                           |
|               Palette Context and State                |                        Set Palette State                        |                             FR10                             |
|               Palette Context and State                |            Assign Palette State to Context Provider             |                          FR9, FR9B                           |
|               Palette Context and State                |         Connect Children Components to Context Provider         |                             FR9C                             |
|               Palette Context and State                |                  Use Context to Retrieve State                  |                             FR11                             |
|               Palette Context and State                |                        Use Palette State                        |                            FR11A                             |
|             Palette Instantiation Process              |               Instantiate Palette with New Colors               |                          FR9, FR10                           |
|             Palette Instantiation Process              |                       Receive New Colors                        |                      FR17E, FR17F, FR47                      |
|             Palette Instantiation Process              |                          Format Colors                          |                         FR17B, FR17C                         |
|             Palette Instantiation Process              |                           Set Colors                            |                         FR10, FR17K                          |
|             Palette Instantiation Process              |                        Create Color Pair                        |                         FR16, FR17I                          |
|             Palette Instantiation Process              |             Estimate Color Pair's Contrast Ratings              |                             FR17                             |
|             Palette Instantiation Process              |                   Store Color Pairs in Array                    |                            FR17I                             |
|             Contrast Checker Page Display              |                            Load Page                            |                           FR4, FR6                           |
|             Contrast Checker Page Display              |               Retrieve Palette State from Context               |                             FR9                              |
|             Contrast Checker Page Display              |                 Obtain Color Pairs from Palette                 |                         FR11, FR17I                          |
|             Contrast Checker Page Display              |              Map Card Components from Color Pairs               |                             FR36                             |
|             Contrast Checker Page Display              |                Assign a Color Pair to Each Card                 |                     FR42A, FR17H, FR11A                      |
|             Contrast Checker Page Display              |             Set Element Styles with Color Pair Data             |                         FR41, FR11A                          |
|             Contrast Checker Page Display              |             Set Element Texts with Color Pair Data              |                      FR37, FR38, FR11A                       |
|             Contrast Checker Page Display              |                 Display Components and Elements                 |          FR36, FR37, FR38, FR39, FR40, FR41, FR46A           |
|                 Mock Site Page Display                 |                            Load Page                            |                           FR4, FR6                           |
|                 Mock Site Page Display                 |               Retrieve Palette State from Context               |                             FR9                              |
|                 Mock Site Page Display                 |                   Obtain Colors from Palette                    |                         FR11, FR17I                          |
|                 Mock Site Page Display                 |               Set Element Styles with Color Data                |                      FR34, FR35, FR11A                       |
|                 Mock Site Page Display                 |                        Display Elements                         |                      FR34, FR35, FR46A                       |
|                 Control Panel Display                  |                          Load Section                           |                           FR4, FR6                           |
|                 Control Panel Display                  |               Retrieve Palette State from Context               |                             FR9                              |
|                 Control Panel Display                  |  Assign Palette's Method as Prop for Action Button Components   |                   FR1, FR11A, FR17H, FR26A                   |
|                 Control Panel Display                  |                Set Palette in Action Button Prop                |                   FR1, FR10, FR16A, FR17A                    |
|                 Control Panel Display                  | Assign Palette's Method as Prop for Palette Previewer Component |                       FR11, FR12, FR22                       |
|                 Control Panel Display                  |                   Obtain Colors from Palette                    |                         FR11, FR17I                          |
|                 Control Panel Display                  |          Set Element Styles with Palette's Color Data           |                      FR11A, FR12, FR22                       |
|                 Control Panel Display                  |           Set Element Text with Palette's Color Data            |                            FR11A                             |
|                 Control Panel Display                  |                 Display Components and Elements                 | FR18, FR19, FR20, FR21, FR22, FR23, FR24, FR24A, FR25, FR26C |

# Software Artifacts

This section contains hyperlinks to all our use case diagrams, class diagrams, and activity diagrams. There are 11 use case diagrams, 5 class diagrams, and 9 activity diagrams.

## Use Case Diagrams

-   [Colors](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-01-Colors.pdf)
-   [Color Pairs](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-02-Color-Pairs.pdf)
-   [User Control Panel Interaction](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-03-User-Control-Panel-Interaction.pdf)
-   [Page Viewing from Navigation Panel](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-04-Page-Viewing-from-Navigation-Panel.pdf)
-   [Page Viewing from Address Bar](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-05-Page-Viewing-from-Address-Bar.pdf)
-   [Context Hook](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-06-Context-Hook.pdf)
-   [Color Mind API Service Color Generation](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-07-Color-Mind-API-Service-Color-Generation.pdf)
-   [Contrast Cheker API Service](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-08-Contrast-Checker-API-Service.pdf)
-   [Control Panel Display](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-09-Control-Panel-Display.pdf)
-   [Contrast Checker Page](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-10-Contrast-Checker-Page.pdf)
-   [Mock Site Page](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/use-case-diagrams/final-deliverables/Use-Case-Diagrams-UC-11-Mock-Site-Page.pdf)

## Class Diagrams

-   [Palette Class and Associated Class](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/class-diagrams/final-deliverables/Class-Diagrams-CD-01-Palette-Class-And-Associated-Classes.pdf)
-   [Palette Class Descprition Methods, Preconditions, and Postconditions](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/class-diagrams/final-deliverables/Class-Diagrams-CD-01A-Palette-Class-Description-Methods-Preconditions-And-Postconditions.pdf)
-   [TinyColor Class Description, Methods, Preconditions, and Postconditions](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/class-diagrams/final-deliverables/Class-Diagrams-CD-01B-TinyColor-Class-Description-Methods-Preconditions-And-Postconditions.pdf)
-   [Associated Classes of Palette Descriptions, Methods, Preconditions, and Postconditions](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/class-diagrams/final-deliverables/Class-Diagrams-CD-01C-Associated-Classes-of-Palette-Descriptions-Methods-Preconditions-And-Postconditions.pdf)
-   [API Component, Child Components, and Global Context State Classes](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/class-diagrams/final-deliverables/Class-Diagrams-CD-02-API-Component-Child-Components-and-Global-Context-State-Classes.pdf)

## Acitivity Diagrams

-   [Navigation and Page Viewing](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/activity-diagrams/final-deliverables/Activity-Diagrams-AD-01-Navigation-and-Page-Viewing.pdf)
-   [User Control Panel Interaction](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/activity-diagrams/final-deliverables/Activity-Diagrams-AD-02-User-Control-Panel-Interaction.pdf)
-   [Color Generation with Color Mind API Service](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/activity-diagrams/final-deliverables/Activity-Diagrams-AD-03-Color-Generation-with-Color-Mind-API-Service.pdf)
-   [Updating Color Pairs with Contrast Checker API Service](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/activity-diagrams/final-deliverables/Activity-Diagrams-AD-04-Updating-Color-Pairs-with-Contrast-Checker-API-Service.pdf)
-   [Palette Context and State](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/activity-diagrams/final-deliverables/Activity-Diagrams-AD-05-Palette-Context-and-State.pdf)
-   [Palette Instantiation Process](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/activity-diagrams/final-deliverables/Activity-Diagrams-AD-06-Palette-Instantiation-Process.pdf)
-   [Contrast Checker Page Display](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/activity-diagrams/final-deliverables/Activity-Diagrams-AD-07-Contrast-Checker-Page-Display.pdf)
-   [Mock Site Page Display](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/activity-diagrams/final-deliverables/Activity-Diagrams-AD-08-Mock-Site-Page-Display.pdf)
-   [Control Panel Display](https://github.com/khnguyen88/GVSU-CIS641-Lakeshore-Misfits/blob/main/docs/activity-diagrams/final-deliverables/Activity-Diagrams-AD-09-Control-Panel-Display.pdf)
