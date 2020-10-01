module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: 'Your project name',
    required: true,
    default: this.appname,
  },
  {
    type: 'confirm',
    name: 'yarn',
    required: true,
    message: 'Yarn?',
  },
  {
    type: 'confirm',
    name: 'editorconfig',
    required: true,
    message: 'Include editor config? https://editorconfig.org/',
  },
];
