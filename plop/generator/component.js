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
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop/template/component/component.tsx.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "plop/template/component/style.module.scss.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: "plop/template/component/index.ts.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/types.ts",
        templateFile: "plop/template/component/types.ts.hbs"
      }
    ];

    return actions;
  }
});
