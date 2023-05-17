export const reactComponentGenerator = (desc) => ({
  description: desc,
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component name:"
    }
  ],
  actions(data) {
    const actions = [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "template/component/component.tsx.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/style.module.scss",
        templateFile: "template/component/style.module.scss.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.ts",
        templateFile: "template/component/index.ts.hbs"
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/types.ts",
        templateFile: "template/component/types.ts.hbs"
      }
    ];

    return actions;
  }
});
