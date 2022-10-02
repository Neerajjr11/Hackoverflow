import '../styles/globals.css'
import { useState } from 'react';
import Image from 'next/image';

function Message(props){
	return (
		<div className="flex rounded-xl m-2" style={{flexFlow: props.sent===true ?"row-reverse": "row"}}>
			<div className="text-[1.3rem] py-2 px-3 bg-[#969696] rounded-xl">
				{props.message}
			</div>
		</div>
	)
}


function MyApp({ Component, pageProps }) {
  
	const [show, setShow] = useState(false);
	const [value, setValue] = useState("");
	const [data, setData] = useState([])
  return <>
  <Component {...pageProps} />
  <div className="fixed bottom-6 right-6 shadow-sm align-middle justify-center flex hover:shadow-xl duration-200 w-[50px] h-[50px] rounded-[25px] bg-blue"
			onClick={()=>setShow(!show)}>
				<Image src={require("../assets/chatbox-icon.svg")} />
			</div>
			{ show===true && (<div className="fixed flex flex-col align-middle justify-center bottom-[75px] right-6 shadow-sm hover:shadow-xl duration-200 w-[300px] h-[500px] rounded-[25px] bg-blue">
				<h1 className="text-[1.5rem] text-[#fff] text-center">Hi! I am Neeraj...How can I help you?</h1>
				<div className="w-[100%] flex flex-col h-[70%] bg-[#fff]">
					{data.map((val, index)=>(<Message message={val.message} sent={val.sent} />))}
				</div>
				<input value={value} onChange={(e)=>setValue(e.target.value)} type="text" className="w-[100%] bg-white h-[30px] pl-6 text-[1.5rem]" placeholder="type your query here"/>
				<button className="w-[100%] py-4 bg-brown text-[#fff] text-[1.5rem]"
					onClick={()=>{
						const user = {message: value, sent:true}
						setTimeout(()=>{
							fetch(`http://127.0.0.1:5000/predict?data=${value}`)
							.then(res=>res.json())
							.then(res=>setData([...data,user, {message: res.answer, sent:false}]))
							.then(_=>setValue(""))
						}, 2000)
						console.log(data)
					}}
				>Ask</button>
			</div>)}
  </>
}

export default MyApp
