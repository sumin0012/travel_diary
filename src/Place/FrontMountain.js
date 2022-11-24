import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FrontMountainF from './FrontMountainF';
import { useAuthContext } from '../Hooks/useAuthContext';
import './Dogg.css';


function FrontMountain() {  
    const { user } = useAuthContext();
    return (
        <dir className='FrontMountain'>
            <Link to="/Main">
                <button type='button' className= 'place홈으로'> &#60;홈으로</button>
            </Link>
            <Link to="/MyHome">
                <button type='button' className= 'place선택하기'> 여행지 목록</button>
            </Link>
            <FrontMountainF uid={user.uid} />
        </dir>
    )
}


export default FrontMountain;