/* eslint-disable import/extensions */

import promptDirectory from "inquirer-directory";

import { reactComponentGenerator } from "./generator/component.js";
import { reactPageGenerator } from "./generator/page.js";

const componentTypes = {
  REACT_COMPONENT: "React component",
  REACT_PAGE: "React Router"
};

export default (plop) => {
  plop.setPrompt("directory", promptDirectory);
  plop.setGenerator(
    componentTypes.REACT_COMPONENT,
    reactComponentGenerator(componentTypes.REACT_COMPONENT)
  );
  plop.setGenerator(
    componentTypes.REACT_PAGE,
    reactPageGenerator(componentTypes.REACT_PAGE)
  );
};
