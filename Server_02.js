/**
 * Created by JK on 2016-08-30.
 */

// Express 서버생성
var express = require('express');
var app = express();

// 10-1 내용 추가
var bodyParser = require('body-parser');

// express-session이 error발생 -> Cmd -> npm install express-session으로 설치완료.
var session = require('express-session');
var fs = require("fs")

// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
app.set('views', __dirname + '/views');

// 서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.
app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

// 스타일(CSS) 적용하기
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var routes = require('./routes/dudukri');
var users = require('./routes/users');

// "localhost:3000/dudukri"으로 접속 -> 농부페이지
app.use('/dudukri', routes);
app.use('/users', users);