import InstitutionCard from "../cards/InstitutionCard";

const TopInstitutes = () => {
  return (
    <div className="my-10">
      <h1 className="font-['Aclonica'] font-[400] text-[6rem] text-center">
        Top Institutes
      </h1>

      <h3 className="font-['poppins'] font-[400] text-[2.1rem] text-center my-10">
        Lorem ipsum dolor sit amet, consectetur adipisci elit vel maximus
      </h3>
      <div className="grid grid-cols-3 gap-4 mx-[12rem]">
			<InstitutionCard college="IIT Mumbai" nirf="1" placement="51" avgSalary="2.5"/>
			<InstitutionCard college="IIT Khadakpur" nirf="2" placement="54" avgSalary="3.4"/>
			<InstitutionCard college="University of Delhi" nirf="3" placement="51" avgSalary="2.9"/>
			<InstitutionCard college="IIT Chennai" nirf="4" placement="47" avgSalary="2.7"/>
			<InstitutionCard college="IIT Delhi" nirf="5" placement="52" avgSalary="2.7"/>
	  </div>
    </div>
  );
};

export default TopInstitutes;
