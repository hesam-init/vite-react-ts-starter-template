import config from "../../config";
import inquirer from "inquirer";
import { Actions, PlopGeneratorConfig } from "node-plop";
import { pathExists } from "../../utils/path";
import { baseGeneratorPath } from "../../utils/path";
import { ComponentPromptNames } from "./promptNames";

inquirer.registerPrompt("directory", require("inquirer-directory"));
type Answers = { [P in ComponentPromptNames]: string };

const templateRoot = config.plop.templateDir.componentDir;

export const reactComponentGenerator: PlopGeneratorConfig = {
  description: "Add a component",
  prompts: [
    {
      type: "input",
      name: ComponentPromptNames.componentName,
      message: "What should it be called?"
    },
    {
      type: "directory",
      name: ComponentPromptNames.path,
      message: "Where do you want it to be created?",
      basePath: `${baseGeneratorPath}`
    } as any
  ],
  actions: (data) => {
    const answers = data as Answers;
    const componentPath = `${baseGeneratorPath}/${answers.path}/{{properCase ${ComponentPromptNames.componentName}}}`;
    const actualComponentPath = `${baseGeneratorPath}/${answers.path}/${answers.componentName}`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }

    const actions: Actions = [
      {
        type: "add",
        path: `${componentPath}/index.tsx`,
        templateFile: `${templateRoot}/index.ts.hbs`,
        abortOnFail: true
      },
      {
        type: "add",
        path: `${componentPath}/{{pascalCase ${ComponentPromptNames.componentName}}}.tsx`,
        templateFile: `${templateRoot}/component.tsx.hbs`,
        abortOnFail: true
      },
      {
        type: "add",
        path: `${componentPath}/style.module.scss`,
        templateFile: `${templateRoot}/style.module.scss.hbs`,
        abortOnFail: true
      },
      {
        type: "add",
        path: `${componentPath}/types.ts`,
        templateFile: `${templateRoot}/types.ts.hbs`,
        abortOnFail: true
      }
    ];

    return actions;
  }
};
