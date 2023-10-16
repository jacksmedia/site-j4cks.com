import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui"

const theme = merge(originalTheme, {
  fonts: {
    body: `"Cyberfall", monospace`,

  },
})

export default theme