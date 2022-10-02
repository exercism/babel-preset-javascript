module.exports = function () {
  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          targets: {
            node: 'current',
          },
          useBuiltIns: 'usage',
          corejs: '3.25',
        },
      ],
    ],
    plugins: [],
  };
};
