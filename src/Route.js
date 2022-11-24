import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './User/Login.js';
import SignUp from './User/SignUp.js';

import MyHome from './MyHome/MyHome.js';
import MyWork from './MyHome/MyWork.js';
import MyMemo from './MyHome/MyMemo.js';
import MyBook from './MyHome/MyBook.js';
import MyRecord from './MyHome/MyRecord.js';

import App from './App.js';
import Main from './Main/Main.js';


import Dogg from './Place/Dogg.js';
import E from './Place/E.js';
import Spa from './Place/Spa.js';
import Bongmu from './Place/Bongmu.js';
import Sparkland from './Place/Sparkland.js';
import Aquariun from './Place/Aquariun.js';
import Palgongsan from './Place/Palgongsan.js';
import DaeguMuseum from './Place/DaeguMuseum.js';
import NaturePark from './Place/NaturePark.js';
import Tower from './Place/83Tower.js';
import FrontMountain from './Place/FrontMountain.js';
import DaeguScience from './Place/DaeguScience.js';
import FlowerGarden from './Place/FlowerGarden.js';
import DaeguArboretum from './Place/DaeguArboretum.js';
import DalseongPark from './Place/DalseongPark.js';
import Dinosaur from './Place/Dinosaur.js';

import { useAuthContext } from './Hooks/useAuthContext'


export default function Render() {

     // 통신이 완료되었다면 true를 반환받습니다.
    const { isAuthReady, user } = useAuthContext();

    return(
        <div className="route">
            {isAuthReady ? (
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={!user ? <App /> : <Navigate to="/Main" replace={true} />} exact={true}/>
                    <Route path="/Main" element={user ? <Main /> : <Navigate replace={true} to="/" />} />
                    

                    <Route path="/Login" element={!user ? <Login /> : <Navigate to="/Main" replace={true} />} />
                    <Route path="/SignUp" element={!user ? <SignUp /> : <Navigate to="/Main" replace={true} />} />
                

                    <Route path="/MyHome" element={user ? <MyHome /> : <Navigate replace={true} to="/" />} />
                    <Route path="/MyWork" element={user ? <MyWork /> : <Navigate replace={true} to="/" />} />
                    <Route path="/MyMemo" element={user ? <MyMemo /> : <Navigate replace={true} to="/" />} />
                    <Route path="/MyBook" element={user ? <MyBook /> : <Navigate replace={true} to="/" />} />
                    <Route path="/MyRecord" element={user ? <MyRecord /> : <Navigate replace={true} to="/" />} />

                    <Route path="/Dogg" element={user ? <Dogg /> : <Navigate replace={true} to="/" />} />
                    <Route path="/E" element={user ? <E /> : <Navigate replace={true} to="/" />} />
                    <Route path="/Spa" element={user ? <Spa /> : <Navigate replace={true} to="/" />} />
                    <Route path="/Bongmu" element={user ? <Bongmu /> : <Navigate replace={true} to="/" />} />
                    <Route path="/Sparkland" element={user ? <Sparkland /> : <Navigate replace={true} to="/" />} />
                    <Route path="/Aquariun" element={user ? <Aquariun /> : <Navigate replace={true} to="/" />} />
                    <Route path="/Palgongsan" element={user ? <Palgongsan /> : <Navigate replace={true} to="/" />} />
                    <Route path="/DaeguMuseum" element={user ? <DaeguMuseum /> : <Navigate replace={true} to="/" />} />
                    <Route path="/NaturePark" element={user ? <NaturePark /> : <Navigate replace={true} to="/" />} />
                    <Route path="/83Tower" element={user ? <Tower /> : <Navigate replace={true} to="/" />} />
                    <Route path="/FrontMountain" element={user ? <FrontMountain /> : <Navigate replace={true} to="/" />} />
                    <Route path="/DaeguScience" element={user ? <DaeguScience /> : <Navigate replace={true} to="/" />} />
                    <Route path="/FlowerGarden" element={user ? <FlowerGarden /> : <Navigate replace={true} to="/" />} />
                    <Route path="/DaeguArboretum" element={user ? <DaeguArboretum /> : <Navigate replace={true} to="/" />} />
                    <Route path="/DalseongPark" element={user ? <DalseongPark /> : <Navigate replace={true} to="/" />} />
                    <Route path="/Dinosaur" element={user ? <Dinosaur /> : <Navigate replace={true} to="/" />} />
                    
                </Routes>
                </BrowserRouter>
           ) : "loading..."}
           </div>
    )
}