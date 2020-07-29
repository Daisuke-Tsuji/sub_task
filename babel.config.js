module.exports = function(api) {
  var validEnv = ['development', 'test', 'production']
  var currentEnv = api.env()
  var isDevelopmentEnv = api.env('development')
  var isProductionEnv = api.env('production')
  var isTestEnv = api.env('test')

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      'Please specify a valid `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(currentEnv) +
        '.'
    )
  }

  return {
    presets: [
      isTestEnv && [
<<<<<<< HEAD
        require('@babel/preset-env').default,
=======
        '@babel/preset-env',
>>>>>>> origin/master
        {
          targets: {
            node: 'current'
          }
        }
      ],
      (isProductionEnv || isDevelopmentEnv) && [
<<<<<<< HEAD
        require('@babel/preset-env').default,
=======
        '@babel/preset-env',
>>>>>>> origin/master
        {
          forceAllTransforms: true,
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol']
        }
      ]
    ].filter(Boolean),
    plugins: [
<<<<<<< HEAD
      require('babel-plugin-macros'),
      require('@babel/plugin-syntax-dynamic-import').default,
      isTestEnv && require('babel-plugin-dynamic-import-node'),
      require('@babel/plugin-transform-destructuring').default,
      [
        require('@babel/plugin-proposal-class-properties').default,
=======
      'babel-plugin-macros',
      '@babel/plugin-syntax-dynamic-import',
      isTestEnv && 'babel-plugin-dynamic-import-node',
      '@babel/plugin-transform-destructuring',
      [
        '@babel/plugin-proposal-class-properties',
>>>>>>> origin/master
        {
          loose: true
        }
      ],
      [
<<<<<<< HEAD
        require('@babel/plugin-proposal-object-rest-spread').default,
=======
        '@babel/plugin-proposal-object-rest-spread',
>>>>>>> origin/master
        {
          useBuiltIns: true
        }
      ],
      [
<<<<<<< HEAD
        require('@babel/plugin-transform-runtime').default,
=======
        '@babel/plugin-transform-runtime',
>>>>>>> origin/master
        {
          helpers: false,
          regenerator: true,
          corejs: false
        }
      ],
      [
<<<<<<< HEAD
        require('@babel/plugin-transform-regenerator').default,
=======
        '@babel/plugin-transform-regenerator',
>>>>>>> origin/master
        {
          async: false
        }
      ]
    ].filter(Boolean)
  }
}
