const chalk = require('chalk');

module.exports = {
  conclude() {
    const { appName, yarn } = this.answers;
    const scripts = {
      dev: `${yarn ? 'yarn' : 'npm'} start`,
      prod: `${yarn ? 'yarn' : 'npm'} build`,
    };

    this.log(
      chalk.black.bgCyanBright.bold(
        '\n',
        `✨ ◂◂◂◂ ${appName} ▸▸▸▸ was generated! ✨`,
        '\n',
      ),
    );
    this.log(chalk.black.bgMagenta.bold(scripts.dev));
    this.log(chalk.whiteBright.bgBlackBright('development'), '\n');
    this.log(chalk.black.bgYellow.bold(scripts.prod));
    this.log(chalk.whiteBright.bgBlackBright('production'), '\n');
  },
};
