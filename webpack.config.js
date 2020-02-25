const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  // loaderの登録
  module: {
    rules: [
      // 
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        // どういったファイルに適応するのかを指定
        test: /\.(sc|c)ss$/,
        // どのローダーを適用するか
        // cssファイルをjsとしてモジュールに化けさせる
        use: [
          // 後ろから順に実行されるので逆に記述する
          // 'style-loader', // styleをmoduleにしてimportできるようにする
          MiniCssExtractPlugin.loader,
          'css-loader', // cssの読み込みを行う
          // node-sass は勝手にやってくれてんのかな
          'sass-loader' // sassの読み込みを行う
        ]
      },
      // {
      //   // どういったファイルに適応するのかを指定
      //   test: /\.css$/,
      //   // どのローダーを適用するか
      //   // cssファイルをjsとしてモジュールに化けさせる
      //   use: [
      //     // 後ろから順に実行されるので逆に記述する
      //     MiniCssExtractPlugin.loader,
      //     // 'style-loader', // styleをmoduleにしてimportできるようにする
      //     'css-loader' // cssの読み込みを行う
      //   ]
      // },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        // file-laoderを有効にさせるにはoptionを設定する必要がある
        options: {
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  // rootの変更
  devServer: {
    contentBase: outputPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html' // 出力するファイル
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',

    })
  ]
}