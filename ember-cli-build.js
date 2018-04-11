'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const fastbootTransform = require('fastboot-transform');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    nodeAssets: {
      'popper.js': {
        srcDir: 'dist/umd',
        import: {
          include: ['popper.js'],
          processTree(input) {
            return fastbootTransform(input);
          }
        },
        public: ['popper.js.map']
      }
    }
  });

  app.import('node_modules/bootstrap/dist/js/bootstrap.js');

  // funnel bootstrap 4 scss files in
  const bootstrapTree = new Funnel('node_modules/bootstrap/scss', {
    destDir: 'bootstrap'
  });
  app.trees.styles = mergeTrees([app.trees.styles, bootstrapTree]);

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
