module.exports = {
  plugins: [
    [
      '@snowpack/plugin-sass',
      '@snowpack/plugin-typescript',
      '@snowpack/plugin-run-script',
      {
        cmd: 'eslint src --ext .js,jsx,.ts,.tsx',
        // Optional: Use npm package "eslint-watch" to run on every file change
        watch: 'esw -w --clear src --ext .js,jsx,.ts,.tsx',
      },
    ],
  ],
};
