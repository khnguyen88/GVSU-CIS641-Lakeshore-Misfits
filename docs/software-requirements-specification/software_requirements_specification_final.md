# Overview

The purpose of this SRS document is a list out the a requirements for Website Color Generator Application. The requirements specify the features and functionalities that the application will have or shall exhibit. The requirements are broken down into functional and non-functional requirements. Functional requirements will focus on input, output, or process of a feature. Non-functional requirements will focus on the behaviors and constraints placed on it. In terms of functional requirements, our team focused on the layout, the content, the style, and the features of the application. In terms of non-functional requirements, our team focused on usability, security, and accessibility of the application.

# Software Requirements

<Describe the structure of this section>

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
| FR17I |                                              The global palette shall contain and provide data about the colors, color pairs.                                              |
| FR17J |                                       The global palette's color pairs shall contain information about each pair's contrast ratings.                                       |

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
| FR32  |                        The header and hyperlinks in the control panel shall be center-aligned.                        |
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

This section is about how can we ensure if the application will be compatible with the users ecosystem and how we will handle any issues.

-   How will you train people to use it?
    -   We will set up some training session with teams who will be using our application, and we can show them the demo of how the application works. We will also record and document the session, so that any new user in the future can refer easily.
-   How will you ensure it integrates within their ecosystem / software?
    -   As it's a web application, we can check if they are able to access the application in the browser without any issues. We can ask them to test the beta version before they start using the final version, so that they get the hang of the environment. We will work on future releases which also helps in enhancing the compatibity with the ecosystem. We will also setup meetings with the teams who will also monitor and check for any issues after the integration.
-   How will you ensure that it any discovered issues are resolved?
    -   We will ensure by tracking of the encountered bugs and to document the resolution steps, so that, if in future, the same bug arises, we can resolve it. Also, we will provide future updates to fix the bugs in the newer versions. We will provide them the techincal support with respect to any issues with the application.

# Traceability links

In this section, you will find a traceability matrix for our use case diagrams, class diagrams, and activity diagrams. The use case diagram traceability consists of the name of the use case diagram, the use case, and which requirement it is connected to. A similar process is created for both the class diagrams and activity diagrams. The class diagram traceability includes the class diagram and the requirement it is connected to. Lastly, the activity diagram traceability includes the activity diagram name, the present activity, and the requirement ID that is connected to it.

## Use Case Diagram Traceability

| Artifact ID | Artifact Name | Requirement ID |
| :---------: | :-----------: | :------------: |
|  UseCase1   |  Move Player  |      FR5       |
|      …      |       …       |       …        |

## Class Diagram Traceability

| Artifact Name | Requirement ID |
| :-----------: | :------------: | --- |
|  classPlayer  |   NFR3, FR5    |
|       …       |       …        | …   |

## Activity Diagram Traceability

<In this case, it makes more sense (I think, feel free to disagree) to link to the file and to those requirements impacted>

| Artifact ID |    Artifact Name    | Requirement ID |
| :---------: | :-----------------: | :------------: |
| <filename>  | Handle Player Input |  FR1-5, NFR2   |
|      …      |          …          |       …        |

# Software Artifacts

<Describe the purpose of this section>
The purpose of this section..

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
