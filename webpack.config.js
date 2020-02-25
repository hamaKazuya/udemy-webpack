const path = require('path')
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
      {
        // どういったファイルに適応するのかを指定
        test: /\.scss$/,
        // どのローダーを適用するか
        // cssファイルをjsとしてモジュールに化けさせる
        use: [
          // 後ろから順に実行されるので逆に記述する
          'style-loader', // styleをmoduleにしてimportできるようにする
          'css-loader', // cssの読み込みを行う
          // node-sass ?
          'sass-loader' // sassの読み込みを行う
        ]
      },
      {
        // どういったファイルに適応するのかを指定
        test: /\.css$/,
        // どのローダーを適用するか
        // cssファイルをjsとしてモジュールに化けさせる
        use: [
          // 後ろから順に実行されるので逆に記述する
          'style-loader', // styleをmoduleにしてimportできるようにする
          'css-loader' // cssの読み込みを行う
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        // file-laoderを有効にさせるにはoptionを設定する必要がある
        options: {
          limit: 2048,
          name: './images/[name].[ext]'
        }
      }
    ]
  },
  // rootの変更
  devServer: {
    contentBase: outputPath
  }
}