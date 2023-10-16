import type { GatsbySSR } from "gatsby"
import * as React from "react"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Cyberfall.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="cyberfall"
    />,
    <link
      rel="preload"
      href="/fonts/Cyberfall-Italic.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="cyberfall-italic"
    />,
    <meta name="msapplication-TileColor" content="#da532c"/>,
    <meta name="theme-color" content="#ffffff"/>
    // non Gatsby format to set all favicons set below, moot for this project
    // <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png"/>,
    // <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png"/>,
    // <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png"/>,
    // <link rel="manifest" href="/static/favicons/site.webmanifest"/>,
    // <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5"/>,
  ])
}
