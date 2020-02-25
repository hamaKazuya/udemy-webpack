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
        test: /\.css$/,
        // どのローダーを適用するか
        // cssファイルをjsとしてモジュールに化けさせる
        use: [
          // 後ろから順に実行されるので逆に記述する
          'style-loader', // styleをmoduleにしてimportできるようにする
          'css-loader' // cssの読み込みを行う
        ]
      }
    ]
  },
  // rootの変更
  devServer: {
    contentBase: outputPath
  }
}