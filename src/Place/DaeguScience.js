import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DaeguScienceF from './DaeguScienceF';
import { useAuthContext } from '../Hooks/useAuthContext';
import './Dogg.css';


function DaeguScience() {  
    const { user } = useAuthContext();
    return (
        <dir className='DaeguScience'>
            <Link to="/Main">
                <button type='button' className= 'place홈으로'> &#60;홈으로</button>
            </Link>
            <Link to="/MyHome">
                <button type='button' className= 'place선택하기'> 여행지 목록</button>
            </Link>
            <DaeguScienceF uid={user.uid} />
        </dir>
    )
}


export default DaeguScience;