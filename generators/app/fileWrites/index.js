module.exports = {
  writePckg() {
    const { appName } = this.answers;
    const app = {
      name: appName,
    };

    this.fs.copyTpl(
      this.templatePath('package.ejs'),
      this.destinationPath(appName, 'package.json'),
      app,
    );
  },
  writeEntries() {
    const { appName } = this.answers;
    const app = {
      name: appName,
    };

    this.fs.copyTpl(
      this.templatePath('src/index-html.ejs'),
      this.destinationPath(appName, 'src/index.html'),
      app,
    );

    this.fs.copyTpl(
      this.templatePath('src/index.ejs'),
      this.destinationPath(appName, 'src/index.tsx'),
    );

    this.fs.copyTpl(
      this.templatePath('src/app/App.ejs'),
      this.destinationPath(appName, 'src/app/App.tsx'),
      app,
    );
  },
  writeConfig() {
    const { appName, editorconfig } = this.answers;

    this.fs.copyTpl(
      this.templatePath('.env'),
      this.destinationPath(appName, '.env'),
    );

    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath(appName, '.babelrc'),
    );

    if (editorconfig) {
      this.fs.copyTpl(
        this.templatePath('.editorconfig'),
        this.destinationPath(appName, '.editorconfig'),
      );
    }

    this.fs.copyTpl(
      this.templatePath('.prettierrc.json'),
      this.destinationPath(appName, '.prettierrc.json'),
    );

    this.fs.copyTpl(
      this.templatePath('tsconfig.ejs'),
      this.destinationPath(appName, 'tsconfig.json'),
    );

    this.fs.copyTpl(
      this.templatePath('parcel.d.ts'),
      this.destinationPath(appName, 'parcel.d.ts'),
    );
  },
  writeAssets() {
    const { appName } = this.answers;

    this.fs.copyTpl(
      this.templatePath('src/assets/parcel.png'),
      this.destinationPath(appName, 'src/assets/parcel.png'),
    );
  },
};
