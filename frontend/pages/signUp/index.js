import Image from 'next/Image';
import { useState } from 'react';

export default function App(props){
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="bg-[#E8F0FF] flex-col w-[100vw] h-[100vh] flex content-center">
            <div className='mt-[30px] self-center w-[200px]'>
             <Image src={require("../../assets/logo.png")}/>
            </div>
            <div className='bg-[#fff] flex flex-col self-center shadow-md w-[584px] h-[350px] mt-[10px]'>
                <h1 className="self-center font-['Raleway'] font-bold text-[2rem] mt-[1.5rem]">Welcome Back</h1>
                <h3 className="self-center font-['Raleway'] text-[2.1rem] mb-[1.4rem]">It will take few seconds to Sign Up</h3>
                <p className="ml-[10%] mb-[6px] font-['Raleway'] text-[1.5rem]">Email Id</p>
                <input name="username" className='rounded-md mb-6 bg-[#6EEDDA] w-[80%] pl-[10px] h-[30px] text-[15px] self-center' type="text"
                value={username} onChange={e=>setUsername(e.target.value)}/>
                <p className="ml-[10%] mb-[6px] font-['Raleway'] text-[1.5rem]">Full Name</p>
                <input name="fullname" className='rounded-md mb-6 bg-[#6EEDDA] w-[80%] pl-[10px] h-[30px] text-[15px] self-center' type="text"
                value={name} onChange={e=>setName(e.target.value)}/>
                <p className="ml-[10%] mb-[6px] text-[1.5rem] font-['Raleway']">Password</p>
                <input className='self-center pl-[10px] text-[15px] rounded-md bg-[#6EEDDA] w-[80%] h-[30px]' name="password" type="password"
                value={password} onChange={e=>setPassword(e.target.value)}/>
                <div></div>
                <div className='flex justify-end mr-[9%] mt-4'>
                    <p className="font-['Raleway'] text-center self-center text-[1.3rem] mr-6">Recover Password</p>
                    <button onClick={()=>console.log(username, name, password)} className='rounded shadow-md hover:shadow-xl text-[1.4rem] bg-[#584EFD] px-5 text-white py-2'>Login</button>
                </div>
            </div>
        </div>
    );
}