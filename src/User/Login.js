import { Link } from 'react-router-dom';
import './Login.css';
import styles from './Login.module.css';
import React, { useState } from 'react'
import { useLogin } from '../Hooks/useLogin'



function Login () {  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        login(email, password);
    }


    return (
      
        <dir className='Login'>
          
            <Link to="/">
              <button type='button' className='Login홈으로'>&#60;홈으로</button>
            </Link>

            <h1 className='제목login'>LOGIN</h1>
            <dir className='User_Form'>
            <form className={styles.login_form} onSubmit={handleSubmit} >
            <fieldset>
                <label htmlFor="myEmail">email : </label>
                <input type="email" id="myEmail" required onChange={handleData} value={email} />

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id="myPassWord" required onChange={handleData} value={password} />

                <button type="submit" className={styles.btn}>로그인</button>
            </fieldset>
        </form>
            </dir>
        </dir>
   
    )
}


export default Login;