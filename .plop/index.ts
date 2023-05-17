/* eslint-disable import/extensions */
import { NodePlopAPI } from "plop";
import { reactComponentGenerator } from "./generator/component.js";
import { reactPageGenerator } from "./generator/page.js";

const componentTypes = {
  REACT_COMPONENT: "React component",
  REACT_PAGE: "React Router"
};

export default (plop: NodePlopAPI) => {
  plop.setGenerator(
    componentTypes.REACT_COMPONENT,
    reactComponentGenerator(componentTypes.REACT_COMPONENT)
  );
  plop.setGenerator(
    componentTypes.REACT_PAGE,
    reactPageGenerator(componentTypes.REACT_PAGE)
  );
};
