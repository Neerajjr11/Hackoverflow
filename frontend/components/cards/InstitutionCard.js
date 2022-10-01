const InstitutionCard = (props) => {
  return (
    <div className="bg-[#ffffff] bg-buildings-card bg-opacity-50 px-[40px] py-[20px] mx-[25px] my-[15px] h-[250px] rounded-[10px]">
      <div className="flex justify-between align-top">
        <div className="flex-col">
          <div className="font-['raleway'] font-[700] text-[3.2rem]">
            {props.college}
          </div>
          <div className=" text-[2.1rem]">
            <span className="font-[600]">{props.placement}%</span> Placement
          </div>
          <div className=" text-[2.1rem]">
            Avg Salary: <span className="font-[600]">{props.avgSalary}k</span>
          </div>
        </div>
        <div className=" flex flex-col justify-center content-center align-center">
          <div className="ml-8 flex justify-center content-center bg-[#DFF6FF] rounded-[50%] w-[80px] h-[80px]">
            <div className="bg-blue rounded-[50%] w-[50px] h-[50px] m-auto justify-center align-center text-center"><span className="font-['aclonica'] font-[400] text-[4.2rem]">9</span></div>
			
		  </div>
		  <div className="text-center font-['poppins'] font-[400] text-[1.8rem] text-blue">
            NIRF Ranking
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionCard;
