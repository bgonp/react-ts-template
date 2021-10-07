import { merge } from 'webpack-merge'
import common, { ROOT_PATH } from './webpack.common.js'

const production = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: `${ROOT_PATH}/config/typescript/tsconfig.json`,
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
}

export default merge(common, production)
