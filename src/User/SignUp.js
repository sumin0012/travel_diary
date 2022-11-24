import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import styles from './Signup.module.css';
import { useSignup } from '../Hooks/useSignup'



function SignUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나입니다. 
		// 때문에 다른 변수명을 사용하지 말아주세요. ( 참고 : https://firebase.google.com/docs/reference/js/auth.md#updateprofile)
    const [displayName, setDisplayName] = useState('');

    // 직접 만든 useSignup 커스텀 훅을 이용합니다. useSignup 훅은 세 가지 프로퍼티를 가지는 객체를 반환합니다.
    const { error, isPending, signup } = useSignup();


    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        } else if (event.target.type === "text") {
            setDisplayName(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // 훅에서 받아온 signup 함수를 실행합니다.
        signup(email, password, displayName);
    }

    
    return (
        <dir className='Sign'>
          
            <Link to="/">
              <button type='button' className='Login홈으로'>&#60;홈으로</button>
            </Link>
            
            <h1 className='제목login'>Sign Up</h1>
            <dir className='User_Form'>
            <form className={styles.signup_form} onSubmit={handleSubmit} >
                <fieldset>
                    <label htmlFor="myEmail">email : </label>
                    <input type="email" id="myEmail" required onChange={handleData} value={email} />

                    <label htmlFor="myPassWord">password : </label>
                    <input type="password" id="myPassWord" required onChange={handleData} value={password} />

                    <label htmlFor="myNickName">name : </label>
                    <input type="text" id="myNickName" required onChange={handleData} value={displayName} />

                    <button type="submit" className="btn">회원가입</button>
                </fieldset>
            </form>
            </dir>
          
        </dir>
            

    )
};


export default SignUp;
