/* eslint-disable import/extensions */
import { NodePlopAPI } from "node-plop";
import { reactComponentGenerator } from "./generator/component/index";

export const enum GenerateTypes {
  reactComponent = "React component",
  reactPage = "React Router"
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator(GenerateTypes.reactComponent, reactComponentGenerator);
  // plop.setGenerator(GenerateTypes.reactPage, { description: "",  });
}
