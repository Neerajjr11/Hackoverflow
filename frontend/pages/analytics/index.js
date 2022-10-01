import { useState } from "react";
export default function App(props) {
  const [policy, setPolicy] = useState("after");
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col bg-[#E8F0FF]">
      <div className="flex self-center">
        <h1 className="text-['Poppins'] text-[3rem] font-bold">
          Before Policy
        </h1>
        <div
          onClick={() => {
            if (policy === "before") {
              setPolicy("after");
            } else {
              setPolicy("before");
            }
          }}
          className="rounded-3xl flex mx-4 w-[75px] shadow-md h-[30px] bg-[#fff] self-center content-center"
        >
          <div
            className="w-[25px] h-[25px] duration-200 rounded-[14px] self-center bg-blue"
            style={{ marginLeft: policy === "before" ? 3 : 48 }}
          ></div>
        </div>
        <h1 className="text-['Poppins'] text-[3rem] font-bold">After Policy</h1>
      </div>
      <button className="self-center bg-black text-[2rem] mb-12 mt-12 rounded-2xl font-['Aclonica'] mt-3 shadow-md py-3 px-4 text-white bg-[#2B332C]">
        What is the policy?
      </button>
      <div className="ml-36">
        <h1 className="text-[3rem] font-['Aclonica'] mb-16">
          Vellore Institute of Technology
        </h1>
        <div className="flex">
          <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 duration-200 hover:shadow-2xl">
            <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">
              Heading 1
            </h1>
            <p className="text-blue text-[7rem] font-bold">250</p>
            <p className="text-['Poppins'] text-[1.5rem]">some random text</p>
            <p className="text-['Poppins'] text-[1.2rem] text-[#5d5d5d]">
              some random text
            </p>
          </div>
          <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 duration-200 hover:shadow-2xl">
            <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">
              Heading 1
            </h1>
            <p className="text-blue text-[7rem] font-bold">250</p>
            <p className="text-['Poppins'] text-[1.5rem]">some random text</p>
            <p className="text-['Poppins'] text-[1.2rem] text-[#5d5d5d]">
              some random text
            </p>
          </div>
          <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 duration-200 hover:shadow-2xl">
            <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">
              Heading 1
            </h1>
            <p className="text-blue text-[7rem] font-bold">250</p>
            <p className="text-['Poppins'] text-[1.5rem]">some random text</p>
            <p className="text-['Poppins'] text-[1.2rem] text-[#5d5d5d]">
              some random text
            </p>
          </div>
          <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 duration-200 hover:shadow-2xl">
            <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">
              Heading 1
            </h1>
            <p className="text-blue text-[7rem] font-bold">250</p>
            <p className="text-['Poppins'] text-[1.5rem]">some random text</p>
            <p className="text-['Poppins'] text-[1.2rem] text-[#5d5d5d]">
              some random text
            </p>
          </div>
        </div>
        <div className="mt-[40px] flex">
          <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6">
            <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">
              Heading 1
            </h1>
          </div>
          <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg">
            <div className="w-[100%] border-b-black border-b-2 h-[48px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-[1.5rem] mt-2 ml-6">Heading1</p>
                  <p className="text-[1.2rem] ml-6">Heading1</p>
                </div>
                <div className="text-[3rem] mr-6">45.7%</div>
              </div>
            </div>
            <div className="w-[100%] border-b-black border-b-2 h-[48px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-[1.5rem] mt-2 ml-6">Heading1</p>
                  <p className="text-[1.2rem] ml-6">Heading1</p>
                </div>
                <div className="text-[3rem] mr-6">45.7%</div>
              </div>
            </div>
            <div className="w-[100%] border-b-black border-b-2 h-[48px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-[1.5rem] mt-2 ml-6">Heading1</p>
                  <p className="text-[1.2rem] ml-6">Heading1</p>
                </div>
                <div className="text-[3rem] mr-6">45.7%</div>
              </div>
            </div>
            <div className="w-[100%] border-b-black border-b-2 h-[48px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-[1.5rem] mt-2 ml-6">Heading1</p>
                  <p className="text-[1.2rem] ml-6">Heading1</p>
                </div>
                <div className="text-[3rem] mr-6">45.7%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px] flex">
          <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6">
            <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">
              Heading 1
            </h1>
          </div>
          <div className="flex flex-col w-[540px] h-[200px] mr-[150px]">
            <div className="flex w-[100%] h-[32%] mb-[1.33%]">
              <div className="bg-[#fff] mr-[2%] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                <p className="text-[1.5rem] mt-2 ml-6">Heading1</p>
                <p className="text-[1.2rem] ml-6">Heading1</p>
              </div>
              <div className="bg-[#fff] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                <p className="text-[1.2rem] mt-2 ml-6">Heading1</p>
                <p className="text-[0.9rem] ml-6">Heading1</p>
              </div>
            </div>
            <div className="flex w-[100%] h-[32%] mb-[1.33%]">
              <div className="bg-[#fff] mr-[2%] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                <p className="text-[1.5rem] mt-2 ml-6">Heading1</p>
                <p className="text-[1.2rem] ml-6">Heading1</p>
              </div>
              <div className="bg-[#fff] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                <p className="text-[1.2rem] mt-2 ml-6">Heading1</p>
                <p className="text-[0.9rem] ml-6">Heading1</p>
              </div>
            </div>
            <div className="flex w-[100%] h-[32%] mb-[1.33%]">
              <div className="bg-[#fff] mr-[2%] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                <p className="text-[1.5rem] mt-2 ml-6">Heading1</p>
                <p className="text-[1.2rem] ml-6">Heading1</p>
              </div>
              <div className="bg-[#fff] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                <p className="text-[1.2rem] mt-2 ml-6">Heading1</p>
                <p className="text-[0.9rem] ml-6">Heading1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] mt-24 mr-64 h-[200px] px-16 pt-6">
          <div className="flex justify-between">
            <h1 className="text-['Poppins'] mt-2 text-[2.5rem] font-semibold">
              Heading 1
            </h1>
            <button className="bg-blue px-4 py-2 text-[#fff] rounded-xl text-[2rem]">
              Add Student
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <div></div>
            <input
              className="bg-white border-2 border-black rounded-md h-[30px] w-[250px] text-[1.2rem] pl-2"
              placeholder="Search"
            />
          </div>
          <div><table>
                <tr className="text-[1.2rem] ">
                  <th>S No.</th>
                  <th>Gender</th>
                  <th>Category</th>
                  <th>SSC %</th>
                  <th>SSC Board</th>
                  <th>HSC %</th>
                  <th>HSC Board</th>
                  <th>HSC Stream</th>
                  <th>Batch</th>
                  <th>CGPA</th>
                  <th>SAT Score</th>
                  <th>Current Intern</th>
                  <th>Hosteller</th>
                  <th>Backlogs</th>
                  <th>Placed</th>
                  <th>Package</th>
                  <th>Year of College</th>
                  <th>College</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Female</td>
                  <td>ST</td>
                  <td>93.4</td>
                  <td>CBSE</td>
                  <td>68.9</td>
                  <td>State</td>
                  <td>Commerce</td>
                  <td>2020</td>
                  <td>7</td>
                  <td>9</td>
                  <td>Yes</td>
                  <td>No</td>
                  <td>1</td>
                  <td>Yes</td>
                  <td>68</td>
                  <td>2020</td>
                  <td>VIT Chennai</td>
                </tr>
              </table></div>
        </div>
      </div>
    </div>
  );
}
