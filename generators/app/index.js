const Generator = require('yeoman-generator');

const {
  writePckg,
  writeEntries,
  writeConfig,
  writeAssets,
} = require('./fileWrites');

const prompts = require('./prompts/index');

const { conclude } = require('./replies');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // writing
    this.writePckg = writePckg.bind(this);
    this.writeParcelEntries = writeEntries.bind(this);
    this.writeConfigFiles = writeConfig.bind(this);
    this.writeAssets = writeAssets.bind(this);

    // ending
    this.conclude = conclude.bind(this);
  }

  async prompting() {
    // Next line should only have any effect when generator options are available in the constructor
    let remainingPrompts = prompts.filter(p => {
      return !this.options[p.name] && p;
    });

    this.answers = await this.prompt(remainingPrompts);
  }

  writing() {
    this.writePckg();
    this.writeParcelEntries();
    this.writeConfigFiles();
    this.writeAssets();
  }

  installing() {
    // const { appName, yarn } = this.answers;
    // this[`${yarn ? 'yarnInstall' : 'npmInstall'}`](null, {}, { cwd: appName });
  }

  ending() {
    this.conclude();
  }
};
