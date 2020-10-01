const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

const appName = 'bin2dec';
const cwd = `${appName}/`;
const generator = path.join(__dirname, '../generators/app');
const truePrompts = { appName, yarn: true, editorconfig: true };
const falsePrompts = { appName, yarn: false, editorconfig: false };

describe('generator-react-parcelv2:app', () => {
  it('creates a package.json file with dependencies described', async () => {
    await helpers.run(generator).withPrompts(truePrompts);

    assert.jsonFileContent(`${cwd}package.json`, {
      name: appName,
      devDependencies: {
        prettier: '^2.1.2',
        parcel: 'next',
      },
      dependencies: {
        react: '^16.13.1',
        'react-dom': '^16.13.1',
      },
    });
  });

  it('creates Parcel entry files', async () => {
    await helpers.run(generator).withPrompts(truePrompts);

    assert.fileContent([
      [`${cwd}src/index.html`, new RegExp(`<title>${appName}<\/title>`, 'gm')],
      [`${cwd}src/index.tsx`, /\b(React|StrictMode)\b/gm],
      [`${cwd}src/app/App.tsx`, new RegExp(`<h1>${appName}<\/h1>`, 'gm')],
    ]);
  });

  it('creates config files, including: editorconfig', async () => {
    await helpers.run(generator).withPrompts(truePrompts);

    const files = [
      '.babelrc',
      '.env',
      '.prettierrc.json',
      '.editorconfig',
      'tsconfig.json',
      'parcel.d.ts',
    ];

    assert.file(files.map(f => cwd + f));
  });

  it('creates config files, excluding: editorconfig', async () => {
    await helpers.run(generator).withPrompts(falsePrompts);

    const files = [
      '.babelrc',
      '.env',
      '.prettierrc.json',
      'tsconfig.json',
      'parcel.d.ts',
    ];

    const excluded = ['.editorconfig'];

    assert.file(files.map(f => cwd + f));
    assert.noFile(excluded.map(f => cwd + f));
  });
});
