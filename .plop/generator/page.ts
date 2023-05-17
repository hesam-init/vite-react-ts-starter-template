export const reactPageGenerator = (desc: string) => ({
  description: desc,
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Page name"
    }
  ],
  actions(data: any) {
    const actions: any[] = [];

    return actions;
  }
});
