import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DaeguMuseumF from './DaeguMuseumF';
import { useAuthContext } from '../Hooks/useAuthContext';
import './Dogg.css';


function DaeguMuseum() {  
    const { user } = useAuthContext();
    return (
        <dir className='DaeguMuseum'>
            <Link to="/Main">
                <button type='button' className= 'place홈으로'> &#60;홈으로</button>
            </Link>
            <Link to="/MyHome">
                <button type='button' className= 'place선택하기'> 여행지 목록</button>
            </Link>

            <DaeguMuseumF uid={user.uid} />
        </dir>
    )
}


export default DaeguMuseum;