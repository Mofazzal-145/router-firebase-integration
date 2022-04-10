import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../Hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const Login = () => {
    // const {signInWithGoogle} = useFirebase();
    const [ signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Login here.</h3>
            <div style={{margin: '20px'}}>
                <button onClick={() => signInWithGoogle ()}>Google Sign In</button>
                {/* <button onClick={signInWithGoogle}>Google Sign In</button> */}
            </div>

            <form>
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" name="" id="" placeholder='password please' />
                <br />
                <input type="Submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;