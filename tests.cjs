const { describe, it } = require('node:test');
const { pluginTester } = require('babel-plugin-tester');
const preset = require('./index.cjs');

globalThis.describe = describe;
globalThis.it = it;

pluginTester({
  preset,
  presetName: '@exercism/babel-preset-javascript',
  tests: {
    'makes strict': `'use strict';\n'hello';`,
    'changes this code': {
      // Input to the plugin
      code: `export class MyService {
    static { this.initialLoadingState = {
        fetchUsers: false
    }; }
    static { this.initialState = {
        loadingState: MyService.initialLoadingState
    }; }
}`,
      // Expected output
      output:
        "'use strict';\n" +
        '\n' +
        "Object.defineProperty(exports, '__esModule', {\n" +
        '  value: true,\n' +
        '});\n' +
        'exports.MyService = void 0;\n' +
        'class MyService {\n' +
        '  static {\n' +
        '    this.initialLoadingState = {\n' +
        '      fetchUsers: false,\n' +
        '    };\n' +
        '  }\n' +
        '  static {\n' +
        '    this.initialState = {\n' +
        '      loadingState: MyService.initialLoadingState,\n' +
        '    };\n' +
        '  }\n' +
        '}\n' +
        'exports.MyService = MyService;',
    },
  },
});
