<h1 align="center">
  Jacks Media AI Images Portfolio
</h1>

[View website](https://jacksmedia.netlify.app)


## Features

- MDX
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Create a project by creating an MDX file and dropping the images into the same folder
- Extensible custom pages
- Define colors for each page and the sidebar & content will adapt while maintaining WCAG 2 AA contrast ratios
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- WebApp Manifest


### 3. **Open the code and start customizing!**

Start the site by running `npm run develop`.

Your site is now running at `http://localhost:8000`!

If you want to learn more about how you can use a Gatsby starter that is configured with a Gatsby theme, you can check out this [shorter](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-gatsby-theme/) or [longer](https://www.gatsbyjs.com/tutorial/using-a-theme/) tutorial. The tutorials don't exactly apply to this starter however the concepts are the same.

## 📝 Using and modifying this starter

**Important Note:** Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the underlying theme!

This starter creates a new Gatsby site that installs and configures the theme [`@lekoarts/gatsby-theme-jodie`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie).

Have a look at the theme's README and files to see what options are available and how you can shadow the various components including Theme UI. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-jodie/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.


### Customizing the homepage

Both your projects and pages are displayed on the homepage (located at `/` in the live project and [`src/components/homepage.tsx`](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/src/components/homepage.tsx) in the theme itself). Of course, you can always shadow this and other files to customize the theme to your liking.

However, before completely overriding the homepage you should consider the three available options:

1. `homepagePageLimit`
2. `homepageProjectLimit`
3. Shadowing [`modify-grid.ts`](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/src/utils/modify-grid.ts)

The options 1) and 2) are explained in the theme options -- they limit the number of projects and pages that will randomly be distributed on the page.

Option 3) is a really powerful one! The `modifyGrid` function is wrapping the entire array of projects & pages before passing it to the `render` function of the React component. Or in other words: As the name suggests you can modify the items that are passed to the grid on the homepage.

You can achieve this by shadowing [`modify-grid.ts`](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/src/utils/modify-grid.ts): Create a file at `src/@lekoarts/gatsby-theme-jodie/utils/modify-grid.js` and define a default export for `modifyGrid`.

#### `modifyGrid` examples

_All code snippets are placed inside `src/@lekoarts/gatsby-theme-jodie/utils/modify-grid.js`_

**Default behavior:**

```js
const modifyGrid = (data) => data;

export default modifyGrid;
```

I've also created some resolver templates that you can use. They are exported in [`resolver-templates.ts`](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/src/utils/resolver-templates.ts). They cover the most common use cases and can give you an idea on what to do with the resolver.

**Only pages / Only projects:**

```js
import {
  onlyPages,
  onlyProjects,
} from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => onlyPages(data);
// const modifyGrid = (data) => onlyProjects(data)

export default modifyGrid;
```

**Filter by slug:**

```js
import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => filterBySlug(data, ["/about"]);

export default modifyGrid;
```

**Shuffle:**

```js
import { shuffle } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => shuffle(data);

export default modifyGrid;
```

### Change your `static` folder

The `static` folder contains the icons, social media images and `robots.txt`. Don't forget to change these files, too! You can use [Real Favicon Generator](https://realfavicongenerator.net/) to generate the image files inside `static`.

## 🤔 Questions or problems?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this project, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.


## Attribution

Based upon the Gatsby Theme [`@lekoarts/gatsby-theme-jodie`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie).
