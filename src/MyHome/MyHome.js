import React, { useState } from 'react';
import './MyHome.css';
import MyHomeList from './MyHomeList';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useCollection} from '../Hooks/useCollection';

function MyHome() {
    const { user } = useAuthContext();
    const { documents, error } = useCollection('Place', ["uid", "==", user.uid]);
    
    return (
        <dir className='MyHome'>

            <Link to="/Main">
                <button type='button' className= '홈으로'> &#60;홈으로</button>
            </Link>

            <h1 className='큰마이홈'>마이홈</h1>

            <h4 className='부제1'>&#62;여행지 목록</h4>

            <dir className='title1'>
                
                <button type='button' className= 'M_여행지목록'>여행지 목록</button>
                
                <Link to="/MyWork">
                    <button type='button' className= '나의일정'>나의 일정</button>
                </Link>
                <Link to="/MyMemo">
                    <button type='button' className= '나의메모'>나의 메모</button>
                </Link>
                <Link to="/MyBook">
                    <button type='button' className= '나의가계부'>나의 가계부</button>
                </Link>
                <Link to="/MyRecord">
                    <button type='button' className= '나의기록'>나의 기록</button>
                </Link>
                
            </dir>

            <dir className='Home'>
                <main className='cont'>
                    
                    <ul >
                        {error && <strong>{error}</strong>}
                        {documents && <MyHomeList HomePlace={documents} />}
                    </ul>

                </main>

            </dir>

        </dir>

    )
}

export default MyHome;