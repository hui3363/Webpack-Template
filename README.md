# webpack-template
Webpack ( postcss, babel ) 을 이용한 기본 프로젝트 구조

# 사용한 패키지

__webpack__: 모듈(패키지) 번들러의 핵심 패키지<br>
__webpack-cli__: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음<br>
__webpack-dev-server__: 개발용으로 Live Server를 실행(HMR)<br>

__html-webpack-plugin__: 최초 실행될 HTML 파일(템플릿)을 연결<br>
__copy-webpack-plugin__: 정적 파일(파비콘, 이미지 등)을 제품(`dist`) 폴더로 복사<br>

__sass-loader__: SCSS(Sass) 파일을 로드<br>
__postcss-loader__: PostCSS(Autoprefixer)로 스타일 파일을 처리<br>
__css-loader__: CSS 파일을 로드<br>
__style-loader__: 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
__babel-loader__: JS 파일을 로드<br>

__@babel/core__: ES6 이상의 코드를 ES5 이하 버전으로 변환<br>
__@babel/preset-env__: Babel 지원 스펙을 지정<br>
__@babel/plugin-transform-runtime__: Async/Await 문법 지원<br>

__sass__: SCSS(Sass) 문법을 해석(스타일 전처리기)<br>
__postcss__: Autoprefixer 등의 다양한 스타일 후처리기 패키지<br>
__autoprefixer__: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br> 

## 주의사항

- `package.json` 옵션으로 `browserslist` 추가<br>
- `.postcssrc.js` 생성(PostCSS 구성 옵션)<br>
- `.babelrc.js` 생성(Babel 구성 옵션)<br>

## 이 템플릿 복사해서 쓰기

- `npx degit hui3363/webpack-template [새로운 폴더 이름]`
- `cd 새로운 폴더`
- `code . -r` (현재폴더를 vscode 창에 열기)  
( npx degit : 특정 git 계정의 리파지토리를 내 로컬 폴더에 복사하는 명령어 )
