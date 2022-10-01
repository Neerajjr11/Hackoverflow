import Button from "../button/Button";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <>
      <h1 className="font-['Aclonica'] font-[400] text-[6rem] text-center my-10">
        Will I get placed or will I not?
      </h1>
      <div className="text-center">
        <Button className="">Find Out</Button>
      </div>
	  <div className="w-screen mt-[150px]">
	  {/* <Image
              src="/home_banner.png"
			  layout='fill'
    		  objectFit='contain'
              alt="PlaceINDIA Logo"
			  draggable="false"
            /> */}
		</div>
    </>
  );
};

export default HomeBanner;
