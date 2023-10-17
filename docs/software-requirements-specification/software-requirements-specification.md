# Overview

The purpose of this SRS document is a list out the a requirements for Website Color Generator Application. The requirements specify the features and functionalities that the application will have or shall exhibit. The requirements are broken down into functional and non-functional requirements. Functional requirements will focus on input, output, or process of a feature. Non-functional requirements will focus on the behaviors and constraints placed on it. In terms of functional requirements, our team focused on the layout, the content, the style, and the features of the application. In terms of non-functional requirements, our team focused on usability, security, and accessibility of the application.

# Functional Requirements

1. Application Layout

    1. The application shall have a two-section layout, with the control and navigation panels in the left or top section and the pages in the right or bottom section.

    2. The control panel and navigation panel shall be accessible regardless of what page the user is on.

    3. The application shall start off with a default color palette of white background, black font color, and grey accents.

2. Control Panel

    1. The application shall have a control panel with buttons that allow users to generate, adjust, and copy the color palette.


3. Navigation Panel

    1. The application must have a navigation panel that allows access to all pages through hyperlinked buttons.

4. Application Pages

    1. The application must have a static mock page where all elements’ background color and font styles update with the current color palette.

    2. The application must have a contrast check page that displays all combinations of paired colors in the palette and their contrast ratio and accessibility ratings.

    3. The application must have an about page that provides information about the project and the team.

    4. The color palette generator shall pass through the Web Content Accessibility Guidelines.

5. API Services and Custom Services

    1. The application shall generate a new palette if the Color Generator API works.

    2. The application shall get the contrast ratio and web accessibility ratings of a color pair if the Contrast Checker API works.

    3. The application shall be able to convert between the RGB, HSV, HSL, and HEX color values.

    4. The successful API responses shall be in proper JSON format.

    5. The application shall have the adjust color functionality, which will adjust the saturation level, brightness or lighting.



6. Error Handling

    1. The application shall alert the user if the Color Generator API cannot create a new palette.

    2. The application shall output a set of “ERROR” values for the accessibility ratings of pair colors when the Contrast Checker API is not working.

# Non-Functional Requirements

1. Operational Requirements

    1. The user shall be able to view all screens even if the APIs are down.

    2. The application shall still work with limited functionality even if the APIs are down.

    3. The application shall still be usable on the major browsers on Windows OS.

2. Performance Requirements

    1. The application shall be able to load up all pages within 10 seconds.

    2. The system shall generate a new color pallete within 10 seconds.

    3. The system shall load all buttons within 10 seconds.

3. Security Requirements

    1. The application must not request or store any personal user information.

    2. The users shall not have the ability to navigate to pages that do not exist.

4. Cultural and Political Requirements

    1. There are no cultural and political requirements for this project.
