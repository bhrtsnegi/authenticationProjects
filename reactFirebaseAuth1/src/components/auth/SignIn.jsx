import { useState } from 'react'
import { auth } from '../../firebase'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) =>{
        e.preventDefault();
        
    }
  return (
    <div className='text-center'>
        <form onSubmit={handleSignIn}>
            <h1 className='text-2xl'>Login</h1>
            <input 
                type="email" 
                placeholder='Enter Your Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className='border rounded-sm border-gray-700 m-3 p-1'
            />
            <input 
                type="password" 
                placeholder='Enter Your Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className='border rounded-sm border-gray-700 m-3 p-1'
            />
            <div>
                <button className='bg-gray-600 text-white border rounded-sm border-gray-800 p-1'>Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default SignIn