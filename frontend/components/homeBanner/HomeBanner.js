import Button from "../button/Button";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <>
      <h1 className="font-['Aclonica'] font-[400] text-[6rem] text-center my-10">
        Will I get placed or will I not?
      </h1>
        <Link href="/analytics">
      <div className="text-center cursor-pointer">
        <Button className="">Find Out</Button>
      </div>
        </Link>
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
