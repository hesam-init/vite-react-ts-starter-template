/* eslint-disable import/extensions */
import { NodePlopAPI } from "node-plop";
import { reactComponentGenerator } from "./generator/component/index";
import prettierFiles from "./actions/prettify";

export const enum GenerateTypes {
  reactComponent = "React component",
  reactPage = "React Router"
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator(GenerateTypes.reactComponent, reactComponentGenerator);
  plop.setActionType("prettify", prettierFiles);
  // plop.setGenerator(GenerateTypes.reactPage, { description: "",  });
}
