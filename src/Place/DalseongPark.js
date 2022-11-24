import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DalseongParkF from './DalseongParkF';
import { useAuthContext } from '../Hooks/useAuthContext';
import './Dogg.css';


function DalseongPark() {  
    const { user } = useAuthContext();
    return (
        <dir className='DalseongPark'>
            <Link to="/Main">
                <button type='button' className= 'place홈으로'> &#60;홈으로</button>
            </Link>
            <Link to="/MyHome">
                <button type='button' className= 'place선택하기'> 여행지 목록</button>
            </Link>
            <DalseongParkF uid={user.uid} />
        </dir>
    )
}


export default DalseongPark;