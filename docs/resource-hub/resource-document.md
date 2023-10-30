## Color Palette and Contrast Checker APIs

-   Colormind Color Palette Generator – Generate a 5-colors, color palette

    -   [http://colormind.io/api-access/](http://colormind.io/api-access/)

-   WebAim – Contrast Checker – Generate AA, AAA, AA-Large, AAA-Large
    -   [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)

## Word Puzzle APIs (If we decide to switch to this project)

-   Word Generator API – Generate words by letter count search

    -   [https://random-word-api.herokuapp.com/home](https://random-word-api.herokuapp.com/home)

-   Dictionary API – Output definition based on provided word
    -   [https://dictionaryapi.dev/](https://dictionaryapi.dev/)

## Things We Need to Investigate

### Application's Components Layout , Initial Thoughts

#### Color Palette Website Generator

-   Parent Component

    -   Overview or Container Screen
        -   All "global" data are stored there

-   Child Components

    -   Control Panel Bar Component (Left Side / Top)

        -   Simplified Controls to generate colors (and maybe adjust it)
        -   Contains some navigation links that route the view component to different pages

    -   Main View Page Component (Right Side / Bottom)

        -   Route screens to different pages
        -   Main view displays a basic page layout that changes color via color generation.

    -   Contrast checker Page Component
        -   Displays collection of colors to show whether or not various pairs of colors in the palette pass ADA compliances

-   Service Files
    -   We should have a service file that makes all of the API calls and returns output
    -   We should have a service file for handling the color algorithms

#### Word Puzzle Game Application

-   Parent Component

    -   Overview or Container Screen

-   Child Components

    -   Navbar Component

    -   Main View Components

        -   Landing Page / "Sign-in" Screen
        -   Maybe we just have user for now, provide their names

    -   Game Play Screen Component

        -   Where the game play occurs

    -   Game Over/High Score Screen Component
        -   Where the player is directed to after the game is over

-   Service Files
    -   We should have a service file that makes all of the API calls and returns output
    -   We should have a service file for work validation and checking algorithms

## React (This is probably the most crucial thing we need to get familiar with)

### How do we think in terms of React?

-   Resource Links:

    -   [https://react.dev/learn/thinking-in-react](https://react.dev/learn/thinking-in-react)
    -   [https://react.dev/learn/describing-the-ui](https://react.dev/learn/describing-the-ui)
    -   [https://www.upbeatcode.com/react/clean-api-architecture-for-react-project/](https://www.upbeatcode.com/react/clean-api-architecture-for-react-project/)
    -   [https://dev.to/chema/services-layer-approach-in-reactjs-1eo2](https://dev.to/chema/services-layer-approach-in-reactjs-1eo2)
    -   [https://react.dev/learn/tutorial-tic-tac-toe](https://react.dev/learn/tutorial-tic-tac-toe)

### How do we create react components with CLI?

-   Resource Links:

    -   [https://www.npmjs.com/package/generate-react-cli](https://www.npmjs.com/package/generate-react-cli)

    -   Template we are using:
    -   `{ "usesTypeScript": false, "usesCssModule": false, "cssPreprocessor": "scss", "testLibrary": "Testing Library", "component": { "default": { "path": "src/components", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "page": { "path": "src/pages", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "layout": { "path": "src/layouts", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "section": { "path": "src/sections", "withLazy": false, "withStory": false, "withStyle": true, "withTest": true }, "service": { "path": "src/services", "withLazy": false, "withStory": false, "withStyle": false, "withTest": true } }, "usesStyledComponents": false }`

### What is the naming conventions we should use in our React Project?

-   Resource Links:

    -   [https://softwareengineering.stackexchange.com/questions/327806/camelcase-pascalcase-or-underscore-if-you-start-from-scratch-with-reactjs](https://softwareengineering.stackexchange.com/questions/327806/camelcase-pascalcase-or-underscore-if-you-start-from-scratch-with-reactjs)

### How do we create and nest components in React?

-   We should investigate and learn how to create components in React.
-   Resource Links:
    -   [https://react.dev/learn](https://react.dev/learn)

## How can we manage and store data within a component?

-   We should investigate and learn how to use **React's State Hook**.
-   Resource links:
    -   [https://react.dev/learn/state-as-a-snapshot](https://react.dev/learn/state-as-a-snapshot)

### What technologies do we need to make API calls in React? How do we use it?

-   We should investigate and learn how to use **Axios (Dependency)**.
-   We should investigate and learn how to use **React's Effect Hook**.
-   Resource Links:
    -   [https://www.npmjs.com/package/react-axios](https://www.npmjs.com/package/react-axios)
    -   [https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/](https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/)
    -   [https://stackoverflow.com/questions/54224164/trouble-getting-local-json-data-with-axios](https://stackoverflow.com/questions/54224164/trouble-getting-local-json-data-with-axios)
    -   [https://stackoverflow.com/questions/59559168/react-js-how-to-call-axios-sequentially](https://stackoverflow.com/questions/59559168/react-js-how-to-call-axios-sequentially)
    -   [https://dev.to/rajeshj3/api-request-to-local-json-file-in-react-n7f](https://dev.to/rajeshj3/api-request-to-local-json-file-in-react-n7f)
    -   [https://stackoverflow.com/questions/54224164/trouble-getting-local-json-data-with-axios](https://stackoverflow.com/questions/54224164/trouble-getting-local-json-data-with-axios)
    -   [https://builtin.com/software-engineering-perspectives/react-api](https://builtin.com/software-engineering-perspectives/react-api)
    -   [https://react.dev/reference/react/useEffect](https://react.dev/reference/react/useEffect)

### How do we switch or change to a new screen in React?

-   We should investigate and learn how to use **React Routers (Dependency)**.
-   Resource links:
    -   [https://reactrouter.com/en/main](https://reactrouter.com/en/main)
    -   [https://reactrouter.com/en/main/start/tutorial](https://reactrouter.com/en/main/start/tutorial)
    -   [https://github.com/remix-run/react-router/tree/dev/examples](https://github.com/remix-run/react-router/tree/dev/examples)
    -   [https://stackblitz.com/edit/react-yjfvnm?file=src%2FApp.js](https://stackblitz.com/edit/react-yjfvnm?file=src%2FApp.js)
    -   [https://www.w3schools.com/react/react_router.asp](https://www.w3schools.com/react/react_router.asp)
    -   [https://hygraph.com/blog/routing-in-react](https://hygraph.com/blog/routing-in-react)
    -   [https://stackoverflow.com/questions/73746766/how-to-define-another-routes-inside-a-routes-component-in-a-child-component](https://stackoverflow.com/questions/73746766/how-to-define-another-routes-inside-a-routes-component-in-a-child-component)

### How do we send data from the parent component to the child components?

-   We should investigate and learn how to use **React's Props** and **Context API**.
-   Resource links:
    -   [https://react.dev/learn/sharing-state-between-components](https://react.dev/learn/sharing-state-between-components)
    -   [https://www.freecodecamp.org/news/pass-data-between-components-in-react/](https://www.freecodecamp.org/news/pass-data-between-components-in-react/)
    -   [https://www.pluralsight.com/guides/passing-state-of-parent-to-child-component-as-props](https://www.pluralsight.com/guides/passing-state-of-parent-to-child-component-as-props)
    -   [https://www.altogic.com/blog/passing-data-from-parent-to-child-in-react](https://www.altogic.com/blog/passing-data-from-parent-to-child-in-react)
    -   [https://www.geeksforgeeks.org/how-to-share-state-across-react-components-with-context/](https://www.geeksforgeeks.org/how-to-share-state-across-react-components-with-context/)

### How do we send data from the child components to the parent component?

-   We should investigate and learn how to use **React's Props** and **Context API**.
-   Resource links:
    -   [https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs](https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs)
    -   [https://stackoverflow.com/questions/55726886/react-hook-send-data-from-child-to-parent-component](https://stackoverflow.com/questions/55726886/react-hook-send-data-from-child-to-parent-component)
    -   [https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/](https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/)

### How do we send data between child component to child component?

-   We should investigate and learn how to use **Props** and **Context API**.
-   Resource links:
    -   [https://react.dev/learn/sharing-state-between-components](https://react.dev/learn/sharing-state-between-components)
    -   [https://www.freecodecamp.org/news/pass-data-between-components-in-react/](https://www.freecodecamp.org/news/pass-data-between-components-in-react/)

### How to use UseContext and UseState?

-   [https://stackblitz.com/edit/react-usecontext-demo?file=index.js](https://stackblitz.com/edit/react-usecontext-demo?file=index.js)
-   [https://stackblitz.com/edit/react-usecontext-example?file=index.tsx](https://stackblitz.com/edit/react-usecontext-example?file=index.tsx)
-   [https://stackoverflow.com/questions/57840535/passing-multiple-value-and-setter-pairs-to-context-provider-in-react](https://stackoverflow.com/questions/57840535/passing-multiple-value-and-setter-pairs-to-context-provider-in-react)
-   [https://medium.com/comsystoreply/how-to-use-react-context-with-usestate-c8ae4fe72fb9](https://medium.com/comsystoreply/how-to-use-react-context-with-usestate-c8ae4fe72fb9)
-   [https://github.com/pmndrs/zustand#react-context](https://github.com/pmndrs/zustand#react-context)
-   [https://stackoverflow.com/questions/57144498/how-to-use-react-context-with-usestate-hook-to-share-state-from-different-compon](https://stackoverflow.com/questions/57144498/how-to-use-react-context-with-usestate-hook-to-share-state-from-different-compon)

### How do we update an element's style properties in React?

-   [https://upmostly.com/tutorials/changing-the-background-color-in-react](https://upmostly.com/tutorials/changing-the-background-color-in-react)
-   [https://stackoverflow.com/questions/55987002/how-to-change-style-property-on-one-react-component-without-changing-them-all](https://stackoverflow.com/questions/55987002/how-to-change-style-property-on-one-react-component-without-changing-them-all)

### How do we update an element's text in React?

-   We should investigate and learn how to use **React's State Hook**.
-   Resource links:
-   [https://react.dev/learn/state-as-a-snapshot](https://react.dev/learn/state-as-a-snapshot)

### How to use bootstrap CSS framework in React?

-   [https://react-bootstrap.netlify.app/](https://react-bootstrap.netlify.app/)

## Resource Links Related to Website Color Palette Test

-   **Note** : Most of these links aren't super important right now, but they're just a collection of resource I researched and wanted to share with the group. Most of these are optional lookup if we want to take a deeper dive to some of the potential features that we can extend on the project.

### Color Palette and Contrast Checker APIs (Also Websites)

-   Colormind Color Palette Generator – Generate a 5-colors, color palette

    -   [http://colormind.io](http://colormind.io/)
    -   [http://colormind.io/api-access/](http://colormind.io/api-access/)

-   WebAim – Contrast Checker – Generate AA, AAA, AA-Large, AAA-Large
    -   [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)

### RGB to HEX Formula and RGB Color Chart

-   [https://www.rapidtables.com/web/color/RGB_Color.html](https://www.rapidtables.com/web/color/RGB_Color.html)
    -   RGB and HEX format are ways two ways we describe colors in CSS
    -   Colormind API output values in RGB
-   [https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript](https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript)
    -   How to convert decimals to HEX value in JS

### RGB to Hue Formulas

-   [https://stackoverflow.com/questions/23090019/fastest-formula-to-get-hue-from-rgb](https://stackoverflow.com/questions/23090019/fastest-formula-to-get-hue-from-rgb)
    -   Differences in Hue of 2 color Provides contrasts, relates to color harmony.

### RGB to HSV Formulas

-   [https://www.had2know.org/technology/hsv-rgb-conversion-formula-calculator.html](https://www.had2know.org/technology/hsv-rgb-conversion-formula-calculator.html)
    -   Note: H stands for Hue, S stands for Saturation, and V stand for Value
    -   Differences in Value of 2 colors Provides contrast

### RGB to HSL Formulas

-   [https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/](https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/)

### Science of Value Contrast

-   [https://www.annamieka.com/blog/learning-about-value-contrast](https://www.annamieka.com/blog/learning-about-value-contrast)

### Science of Color Contrast

-   [https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156](https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156)
-   [https://www.g2.com/articles/color-contrast](https://www.g2.com/articles/color-contrast)

    -   Differences in Hue of 2 color Provides contrasts, relates to color harmony.

### Basics of Color Theory

-   [https://www.colormatters.com/color-and-design/basic-color-theory](https://www.colormatters.com/color-and-design/basic-color-theory)
-   [https://www.interaction-design.org/literature/topics/color-theory](https://www.interaction-design.org/literature/topics/color-theory)

### Understanding Composition and Design Value

-   [https://feltingandfiberstudio.com/2016/11/21/composition-and-design-value/](https://feltingandfiberstudio.com/2016/11/21/composition-and-design-value/)

### Color Formula Conversion for Color Blindness

-   [https://dev.to/ndesmic/exploring-color-math-through-color-blindness-2m2h](https://dev.to/ndesmic/exploring-color-math-through-color-blindness-2m2h)

### UX for Color Blindness

-   [https://davidmathlogic.com/colorblind/](https://davidmathlogic.com/colorblind/)
-   [https://www.designmantic.com/community/website-design-guide-color-blind.php](https://www.designmantic.com/community/website-design-guide-color-blind.php)

### WCAG Levels – A, AA, AAA Information

-   [https://www.boia.org/blog/whats-the-difference-between-wcag-level-a-level-aa-and-level-aaa](https://www.boia.org/blog/whats-the-difference-between-wcag-level-a-level-aa-and-level-aaa)
-   [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)
-   [https://www.w3.org/WAI/WCAG2AAA-Conformance](https://www.w3.org/WAI/WCAG2AAA-Conformance)
-   [https://ux.stackexchange.com/questions/5374/font-sizes-for-wcag2-0-aaa](https://ux.stackexchange.com/questions/5374/font-sizes-for-wcag2-0-aaa)
    -   Relates to contrast ratio, font size, font weight for visual accessibility

### Font Size Chart

-   [https://fontsaga.com/font-point-size-chart/](https://fontsaga.com/font-point-size-chart/)
-   [https://codepen.io/2kool2/pen/dyPgebN?editors=0101](https://codepen.io/2kool2/pen/dyPgebN?editors=0101)

### Types of Color Blindness

-   [https://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/](https://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/)
