module.exports = {
  optimize: {
    bundle: false,
    minify: true,
    target: 'es2018',
  },
  routes: [{match: 'routes', src: '.*', dest: '/index.html'}],
  plugins: [
    [
      '@snowpack/plugin-sass',
      '@snowpack/plugin-run-script',
      {
        cmd: 'eslint src --ext .js,jsx,.ts,.tsx',
        // Optional: Use npm package "eslint-watch" to run on every file change
        watch: 'esw -w --clear src --ext .js,jsx,.ts,.tsx',
      },
      '@snowpack/plugin-typescript',
      '@snowpack/plugin-webpack',
    ],
  ],
};
