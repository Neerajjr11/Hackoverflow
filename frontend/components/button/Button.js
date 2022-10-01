const Button = (props) => {
	return (
		<div className={`${props.children} bg-brown font-['Aclonica'] inline text-[3.6rem] text-white px-12 py-8 rounded-[10px]`}>
			{props.children}
		</div>

	);
}

export default Button;