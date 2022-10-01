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
			<InstitutionCard college="VIT Chennai" nirf="9" placement="40" avgSalary="62"/>
			<InstitutionCard college="VIT Chennai" nirf="9" placement="40" avgSalary="62"/>
			<InstitutionCard college="VIT Chennai" nirf="9" placement="40" avgSalary="62"/>
			<InstitutionCard college="VIT Chennai" nirf="9" placement="40" avgSalary="62"/>
			<InstitutionCard college="VIT Chennai" nirf="9" placement="40" avgSalary="62"/>
	  </div>
    </div>
  );
};

export default TopInstitutes;
