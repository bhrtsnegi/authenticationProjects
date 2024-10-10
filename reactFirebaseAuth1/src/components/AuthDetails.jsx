import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { onLog } from 'firebase/app';

const AuthDetails = () => {
    const [authUser, setauthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setauthUser(user)
            }
            else{
                setauthUser(null)
            }
        })
        return () => {
            listen();
        }
    }, [])

    const handleSignOut = () =>{
        signOut(auth).then(()=>{
            console.log("Sign Out Successfully");
        })
        .catch((error) =>{
            console.log(error);
            
        })
    }
  return (
    <div className='text-center'>
    { 
        authUser ? 
            <>
                <p className='my-4'>
                    Signed in as <p className='text-blue-500'>{authUser.email}</p>
                </p>
                <button 
                    onClick={handleSignOut}
                    className='font-semibold text-white text-xl border rounded-lg border-gray-700 p-1 bg-red-700'
               >
                    SignOut
                </button>
            </> : 
                <p>
                    Signed Out
                    </p>
    }
    </div>
  )
}

export default AuthDetails