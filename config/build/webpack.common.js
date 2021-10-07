import HtmlWebpackPlugin from 'html-webpack-plugin'

export const ROOT_PATH = new URL('../..', import.meta.url).pathname

export default {
  entry: `${ROOT_PATH}/src/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: `${ROOT_PATH}/config/style/postcss.config.cjs`,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${ROOT_PATH}/public/index.html`,
    }),
  ],
  output: {
    filename: 'main.js',
    path: `${ROOT_PATH}/dist`,
    clean: true,
  },
}
