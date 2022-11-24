import React, { useState } from 'react';
import './App.css';
import './Place/Dogg.js';
import './MyHome/MyHome.js';
import { Link } from 'react-router-dom';
import './index.js';
import './Route.js';



function App() {
  let [소제목내용, 내용변경] = useState(['대구를 잘 모른다면?', '대구 여행지를 추천 받고 싶다면?',
  '간단한 여행 일정과 메모를 작성하고 싶다면?', '간편한 여행 가계부를 작성하고 싶다면?', '작성한 내용을 한눈에 보고 싶다면?', '나만의 여행 일지를 작성하고 싶다면?']);

  return (

    <div className="App">
      <dir className='header'>
        
        <Link to="/Login">
          <button type='button' className='로그인'>로그인</button>
        </Link>
        <Link to="/SignUp">
          <button type='button' className='회원가입'>회원가입</button>
        </Link>
      </dir>

      <dir className='title'>
        <h1>travel diary</h1>
        <h3>나만의 여행일지</h3>
      </dir>

      <dir className='subhead'>
        <h3>이럴 때 travel diary를 사용하세요!!</h3>
        <h4>
          <li>{ 소제목내용[0] }</li>
          <li>{ 소제목내용[1] }</li>
          <li>{ 소제목내용[2] }</li>
          <li>{ 소제목내용[3] }</li>
          <li>{ 소제목내용[4] }</li>
          <li>{ 소제목내용[5] }</li>
          </h4>
      </dir>

      
    </div>
  );
}

export default App;
