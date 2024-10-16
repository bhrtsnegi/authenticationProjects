import { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            setEmail('');
            setPassword('');
        }).catch((error) =>{
            console.log(error);
        })
        
    }
  return (
    <div className='text-center'>
        <form onSubmit={handleSignIn}>
            <h1 className='text-2xl font-bold mt-4'>Login to your account</h1>
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
                <button type='submit' className='font-bold bg-green-600 border rounded-lg border-gray-400 p-1'>Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default SignIn