import React, { useState } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import {useLogout} from '../Hooks/useLogout'



function Main(props) {
  const { logout } = useLogout();

  let [소제목내용, 내용변경] = useState(['대구를 잘 모른다면?', '대구 여행지를 추천 받고 싶다면?',
  '간단한 여행 일정과 메모를 작성하고 싶다면?', '간편한 여행 가계부를 작성하고 싶다면?',
  '작성한 내용을 한눈에 보고 싶다면?', '나만의 여행 일지를 작성하고 싶다면?']);

  return (

    <div className="Main">
      <dir className='header'>
        
        <Link to="/MyHome">
          <button type='button' className='로그인'>마이홈</button>
        </Link>
        
          <button type='button' className='회원가입' onClick={logout}>로그아웃</button>
        
        
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

      <dir className='footer'>
        <Link to="/Dogg"><button type="button" className="동성로" id="동성로">
          <img src="test.jpg"></img><img src="동성로.jpg" className='jpg'></img></button></Link>

        <Link to="/E"><button type="button" className="이월드" id="이월드">
          <img src="test.jpg"></img><img src="이월드.jpg" className='jpg'></img></button></Link>

        <Link to="/Spa"><button type="button" className="스파밸리" id="스파밸리">
          <img src="test.jpg"></img><img src="스파밸리.jpg" className='jpg'></img></button></Link>

        <Link to="/Bongmu"><button type="button" className="봉무공원" id="봉무공원">
          <img src="test.jpg"></img><img src="봉무공원.jpg" className='jpg'></img></button><br/></Link>

        <Link to="/Sparkland"><button type="button" className="스파크랜드" id="스파크랜드">
          <img src="test.jpg"></img><img src="스파크랜드.jpg" className='jpg'></img></button></Link>

        <Link to="/Aquariun"><button type="button" className="대구아쿠아리움" id="대구아쿠아리움">
          <img src="test.jpg"></img><img src="대구아쿠아리움.jpg" className='jpg'></img></button></Link>

        <Link to="/Palgongsan"><button type="button" className="팔공산케이블카" id="팔공산케이블카">
          <img src="test.jpg"></img><img src="팔공산케이블카.jpg" className='jpg'></img></button></Link>

        <Link to="/DaeguMuseum"><button type="button" className="국립대구박물관" id="국립대구박물관">
          <img src="test.jpg"></img><img src="국립대구박물관.jpg" className='jpg'></img></button><br/></Link>

        <Link to="/NaturePark"><button type="button" className="네이처파크" id="네이처파크">
          <img src="test.jpg"></img><img src="네이처파크.jpg" className='jpg'></img></button></Link>

        <Link to="/83Tower"><button type="button" className="타워" id="타워">
          <img src="test.jpg"></img><img src="타워.jpg" className='jpg'></img></button></Link>

        <Link to="/FrontMountain"><button type="button" className="앞산해넘이전망대" id="앞산해넘이전망대">
          <img src="test.jpg"></img><img src="앞산해넘이전망대.jpg" className='jpg'></img></button></Link>

        <Link to="/DaeguScience"><button type="button" className="국립대구과학관" id="국립대구과학관">
          <img src="test.jpg"></img><img src="국립대구과학관.jpg" className='jpg'></img></button><br/></Link>

        <Link to="/FlowerGarden"><button type="button" className="화원유원지" id="화원유원지">
          <img src="test.jpg"></img><img src="화원유원지.jpg" className='jpg'></img></button></Link>

        <Link to="/DaeguArboretum"><button type="button" className="대구수목원" id="대구수목원">
          <img src="test.jpg"></img><img src="대구수목원.jpg" className='jpg'></img></button></Link>

        <Link to="/DalseongPark"><button type="button" className="달성공원" id="달성공원">
          <img src="test.jpg"></img><img src="달성공원.jpg" className='jpg'></img></button></Link>

        <Link to="/Dinosaur"><button type="button" className="고산골공룡공원" id="고산골공룡공원">
          <img src="test.jpg"></img><img src="고산골공룡공원.jpg" className='jpg'></img></button></Link>
      </dir>
      
    </div>
  );
}

export default Main;