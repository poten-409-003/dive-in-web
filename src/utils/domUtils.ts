// src/utils/domUtils.ts

import ReactDOMServer from "react-dom/server";

export const convertReactComponentToHTMLElement = (
  component: JSX.Element
): HTMLElement => {
  const contentString = ReactDOMServer.renderToString(component);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = contentString;
  return wrapper.firstChild as HTMLElement;
};
