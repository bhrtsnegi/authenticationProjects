import { useState } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) =>{
            console.log(error);
        })
        
    }
  return (
    <div className='text-center'>
        <form onSubmit={handleSignUp}>
            <h1 className='text-2xl font-bold mt-4'>Create Your Account</h1>
            <input 
                type="email" 
                placeholder='Enter Your Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className='border rounded-lg border-gray-500 m-3 p-1'
            />
            <input 
                type="password" 
                placeholder='Enter Your Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className='border rounded-lg border-gray-500 m-3 p-1'
            />
            <div>
                <button type='submit' className='font-bold bg-blue-400 border rounded-lg border-gray-400 p-1'>
                    SignUp
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default SignUp