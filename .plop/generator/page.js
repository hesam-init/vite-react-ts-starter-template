export const reactPageGenerator = (desc) => ({
  description: desc,
  prompts: [
    {
      type: "list",
      name: "baseDir",
      message: "base directory",
      choices: ["ui", "app"],
      default: 1
    },
    {
      type: "directory",
      name: "directory",
      message: "select directory",
      basePath: "./src/ui",
      when: (answers) => answers.baseDir === "ui"
    },
    {
      type: "directory",
      name: "directory",
      message: "select directory",
      basePath: "./src/app",
      when: (answers) => answers.baseDir === "app"
    },
    {
      type: "input",
      name: "name",
      message: "component name"
    }
  ],
  actions(data) {
    const actions = [
      {
        type: "add",
        path: `src/${data.baseDir}/{{directory}}/{{camelCase name}}/{{pascalCase name}}.tsx`,
        templateFile: "plop-templates/component/Component.hbs"
      },
      {
        type: "add",
        path: `src/${data.baseDir}/{{directory}}/{{camelCase name}}/{{pascalCase name}}.test.tsx`,
        templateFile: "plop-templates/component/Component.test.hbs"
      },
      {
        type: "add",
        path: `src/${data.baseDir}/{{directory}}/{{camelCase name}}/{{pascalCase name}}.types.ts`,
        templateFile: "plop-templates/component/Component.types.hbs"
      }
    ];

    return actions;
  }
});
