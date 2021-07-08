import React,{useState} from 'react';
import Signup from '../components/Admin/Signup';
import Login from '../components/Admin/Login';

function AdminLogin() {
    const [isLogin,setIsLogin] = useState(true)
    return (
        <section className="bg-gray-100">
            {isLogin ? <Login handleClick={() => setIsLogin(!isLogin)} /> : <Signup handleClick={()=>setIsLogin(!isLogin)}/>}
          
        </section>
    )
}

export default AdminLogin
