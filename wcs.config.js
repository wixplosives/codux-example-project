module.exports = {
  scripts: {
    install: {
      title: "Install",
      description: "Run install",
      command: "npm i",
      trigger: ["checkout", "pull", "setup"],
    },
  },
  newComponent: {
    componentsPath: 'src/components',
  },
};
