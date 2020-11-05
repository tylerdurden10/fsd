// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Load Styles
export const loadStyles = env => ({
  plugins:
    env === 'production'
      ? [
          new MiniCssExtractPlugin({
            filename:
              env === 'production' ? '[name].[contenthash].css' : '[name].css',
          }),
        ]
      : [],
  module: {
    rules: [
      {
        test: /\.s[ca]ss$/,
        use: [
          {
            loader:
              env === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
            options: {},
          },
          {
            loader: 'css-loader',
            options: {},
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
    ],
  },
});
