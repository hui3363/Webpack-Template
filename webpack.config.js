//import
const path = require('path') //node js 환경에서 기본으로 사용할수 있는 전역 모듈
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: path.resolve(__dirname, 'js/main.js'),

  // 결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, 'dist'), 
		// '__dirname' : node js에서 사용할수 있는 전역변수 (현재 파일이 있는 경로)
    // path.resolve : 첫 번째 인수와 두번째 인수에 있는 경로를 합쳐준다.
		// 사용하는 이유 : node js에서 사용하는 절대 경로가 필요함
		// default : ./dist 이므로 굳이 명시 안해도 됨
		filename: 'main.js',
		// default : entry 와 같은 파일명이 디폴트라서 같으면 굳이 명시 안해도 됨
		clean: true, //기존 구성옵션에서 빌드된 내용을 삭제할 것인지
  },

	module: {
		rules: [
			{
				// scss, css 확장자 파일은 아래 모듈을 사용
				// scss 를 쓸경우를 대비해서 sass-loader가 가장 먼저 동작하도록
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				// 웹팩이 babel을 해석할 수 있게
				test: /\.js$/,
				use: [
					'babel-loader'
				]
			}
		]
	},

	plugins: [
		new HtmlPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'static' } // static 폴더 하위의 파일들을 전부 dist에 복사
			]
		})
	]
}