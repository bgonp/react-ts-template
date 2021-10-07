const postcssPresetEnv = require('postcss-preset-env')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    tailwindcss({
      config: 'config/style/tailwind.config.cjs',
    }),
  ],
}
