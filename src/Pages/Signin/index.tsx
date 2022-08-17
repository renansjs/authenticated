import { FaGoogle } from 'react-icons/fa'

import {  GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'

import './style.scss';
import { auth } from '../../services/firebase';
import { useState } from 'react';

export function Signin () {

    const [user, setUser] = useState<User>({} as User)


    // const isLoggedIn = user.providerId;
 
    function handleGoogleSignIn() {

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (

        <div className="container">

            <div className='user'>
                {user.photoURL && <img src={user.photoURL} alt="Foto do usuário"/>}
                <strong>{user.displayName} </strong>
                <small> {user.email} </small>

            </div>

            {user.providerId ? <h1>Seja Bem vindo</h1> : <h1>Acesse sua conta</h1>}
            {/* <h1>Acesse sua conta </h1> */}

            <span>Treiando metodos de autenticação com Firebase</span>

            <button 
                type="button" 
                className="btn"
                onClick={handleGoogleSignIn}
                
            >
                    <FaGoogle  size={16}/>
                    <h3>Entrar com google</h3>
            </button>
        </div>
    )
}