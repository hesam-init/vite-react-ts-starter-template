import shell from "shelljs";

interface PrettifyCustomActionData {
  path: string;
}

function prettierFiles(answers, config) {
  const data = config!.data as PrettifyCustomActionData;
  shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
  return "";
}

export default prettierFiles;
