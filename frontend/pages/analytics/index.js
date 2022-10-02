import { useEffect, useState } from "react";
import Navbar from '../../components/navbar/Navbar';
import { AreaChart, Area, XAxis, YAxis, Legend,Bar, BarChart, CartesianGrid, ScatterChart, Scatter, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
const cir_data = [
    { name: 'Male', value: 400+Math.floor(Math.random()*30) },
    { name: 'Female', value: 300+Math.floor(Math.random()*50) },
  ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

export default function App(props) {
    const cir_data = [
        { name: 'Male', value: 400+Math.random()*30 },
        { name: 'Female', value: 300+Math.random()*50 },
      ];
    const [policy, setPolicy] = useState("after")
    const [statistics, setStatistics] = useState(["...", "...", "...", "..."])
    const [collegeDetails, setCollegeDetails]= useState({
        college_id: 0,
        name: "All",
        region: "India", 
        branch: "All"
    })
    const [students, setStudents] = useState([]);
    const [college, setColleges] = useState([]);
    const [college_id, setCollegeId] = useState(1);
    const [yearly, setYearly] = useState({})
    const [yearlyGraph,  setYearlyGraph] = useState([0,0,0,0,0,0])
    const [board, setBoard] = useState([]);
    const [pol, setPol] = useState({});
    useEffect(()=>{
        console.log("done")
        fetch(`http://127.0.0.1:8000/api/get_college_analytics/?college=${college_id}`)
        .then(res=>res.json())
        .then(res=>{
            setStatistics([
                Number(res['statistics']['cgpa']).toFixed(2),
                Number(res['statistics']['sat']).toFixed(2),
                Number(res['statistics']['ranking']).toFixed(0),
                Number(res['statistics']['placement_ratio']).toFixed(2),
            ]);
            setStudents(res.data);
            const boards = []
            for(var i = 0;i<3; i++){
                boards.push({
                    name: i==0? "CBSE" : i==1 ? "International" : "State",
                    sscp: res['board']['sscp'][i],
                    hscp: res['board']['hscp'][i],
                    sat: res['board']['sat'][i],
                    cgpa: res['board']['cgpa'][i]*10,
                    package: res['board']['package'][i]
                })
            }
            console.log(boards)
            setBoard(boards)
            setPol(res.policy)
            // console.log(res['college_details']) 
            setCollegeDetails(res['college_details'])
            setYearly(res['yearly'])
        })
    }, [college_id])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/get_colleges").then(res=>res.json())
        .then(res=>{
            setColleges(res.data)
        });
    }, [])
    return (
        <div className="w-[100vw] min-h-[100vh] flex flex-col bg-[#E8F0FF]">
            <Navbar/>
            <div className="flex self-center">
                <h1 className="text-['Poppins'] text-[3rem] font-bold">Show Statistics</h1>
                <div onClick={()=>{
                    if(policy === "before"){
                        setPolicy("after")
                    }else{
                        setPolicy("before")
                    }
                }} className="rounded-3xl flex mx-4 w-[75px] shadow-md h-[30px] bg-[#fff] self-center content-center">    
                    <div className="w-[25px] h-[25px] duration-200 rounded-[14px] self-center bg-blue" style={{marginLeft: policy==="before" ? 3: 48}}></div>
                </div>
                <h1 className="text-['Poppins'] text-[3rem] font-bold">Show Policy</h1>
            </div>
            
            <button onClick={()=>setPolicy("after")}  className="self-center bg-black text-[2rem] mb-12 mt-12 rounded-2xl font-['Aclonica'] mt-3 shadow-md py-3 px-4 text-white bg-[#2B332C]">What is the policy?</button>
  
            <div className="ml-36">
                <div className="flex justify-between">
                    <h1 className="text-[3rem] font-['Aclonica'] mb-16">{collegeDetails['name']} ({collegeDetails['state']})</h1>
                    <select className="w-[30%] mr-60 rounded-xl border-0 bg-[#fff] h-[40px] text-[1.5rem]" onChange={e=>{
                        setStatistics(["...", "...", "...", "..."])
                        setCollegeId(e.target.value)
                        }}>
                        {college.map((val, index)=><option value={val.college_id}>{val.name} ({val.state})</option>)}
                    </select>
                </div>
                {policy === "after" && (

                    <div className="flex flex-col shadow-md duration-200 hover:shadow-xl justify-center bg-[#fff] mr-60 mb-6 px-[10rem] py-[5rem] ">
                    <h1 className="text-[3rem] font-['Aclonica'] mb-16">Suggested Policy</h1>
                    <p className="font-['EB Garamond'] text-[2rem]">This policy serves as a probable solution to address the problem of unemployability. The policy provides a way to boost and accommodate students whose profiles do not qualify for employment. The policy applies to all institutes and universities registered in the central database. All educational institutes, technical and business universities, included must adhere to the policy and guidelines below. 
In order to facilitate better employment rates, the policy will be extended to all students who demonstrate both the ability to bag a placement package and those with rejections. Policies will be determined by analysing the database and comparing differentiating factors that affect placement using machine learning algorithms. The differentiating factors include degree percentage, EPT scores, whether the candidate has work experience or not.
The policy will also be periodically reviewed and re-evaluated based on addition of new records to the central database. It is the responsibility of the policy execution authorities to authorise and supervise the execution of said policies.</p>
                    <div className="my-5">
                    <h3 className="text-[2rem] font-['raleway'] my-3"><span className="font-[800] font-black">Target Variable: </span><span className="">{pol.name}</span></h3>
                    <h3 className="text-[2rem] font-['raleway'] my-3"><span className="font-[800] font-black">Policy: </span>{pol.policy_name}</h3>
                    <h3 className="text-[2rem] font-['raleway'] my-3"><span className="font-[800] font-black">Unemployment Rate: </span> {pol.unemployment_rate}</h3>
                    </div>
                </div>
                    )}
                <div className="flex">
                    <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 rounded-[5px]">
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">CGPA</h1>
                        <p className="text-blue text-[7rem] font-bold">{statistics[0]}</p>
                        <p className="text-['Poppins'] text-[1.5rem] font-semibold">Aggregate score</p>
                    </div>
                    <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 rounded-[5px]">
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">SAT Score</h1>
                        <p className="text-blue text-[7rem] font-bold">{statistics[1]}</p>
                        <p className="text-['Poppins'] text-[1.5rem] font-semibold">Average SAT Score</p>
                    </div>
                    <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 rounded-[5px]">
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">College Ranking</h1>
                        <p className="text-blue text-[7rem] font-bold">{statistics[2]}</p>
                        <p className="text-['Poppins'] text-[1.5rem] font-semibold">NIRF Rank</p>
                    </div>
                    <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 rounded-[5px]">
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">Placement Ratio</h1>
                        <p className="text-blue text-[7rem] font-bold">{statistics[3]}</p>
                        <p className="text-['Poppins'] text-[1.5rem] font-semibold">Employed/UnEmployed Ratio</p>
                    </div>
                </div>
                <div className="mt-[40px] flex">
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 rounded-[5px]" style={{fontSize: 13}}>
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">Yearly Graph</h1>
                        <ResponsiveContainer width="100%" height="85%">
                            <AreaChart
                            width={500}
                            height={400}
                            data={yearlyGraph}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke="#00f" fill="#584EFD" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg rounded-[5px]">
                        <div className="w-[100%] border-b-black border-b-[1px] h-[32px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-['poppins'] font-semibold text-[1.5rem] mt-2 ml-6">2015</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[0].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] border-b-black border-b-[1px] h-[32px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-['poppins'] font-semibold text-[1.5rem] mt-2 ml-6">2016</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[1].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] border-b-black border-b-[1px] h-[32px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-['poppins'] font-semibold text-[1.5rem] mt-2 ml-6">2017</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[2].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] border-b-black border-b-[1px] h-[32px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-['poppins'] font-semibold text-[1.5rem] mt-2 ml-6">2018</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[4].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] border-b-black border-b-[1px] h-[31px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-['poppins'] font-semibold text-[1.5rem] mt-2 ml-6">2019</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[5].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] h-[30px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-['poppins'] font-semibold text-[1.5rem] mt-2 ml-6">2020</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[3].value}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[40px] flex">
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6" style={{fontSize: 13}}>
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">Gender Ratio (Placements)</h1>
                        <PieChart width={800} height={400}>
                            <Legend />
                            <Tooltip />
                            <Pie onClick={val=>console.log(val)}
                            data={cir_data}
                            cx={100}
                            cy={80}
                            innerRadius={0}
                            outerRadius={65}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                    </div>
                    <div className="flex flex-col w-[540px] h-[200px] mr-[150px]">
                        <div className="flex w-[100%] h-[32%] mb-[1.33%]">
                            <div onClick={()=>{
                                var data = []
                                for(var i = 0; i<yearly['hscp'].length;i++){
                                    data.push({
                                        name: i+2015,
                                        value: yearly['hscp'][i]
                                    })
                                }
                                setYearlyGraph(data);
                                console.log(data)
                            }} className="bg-[#fff] mr-[2%] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                                <p className="text-[1.5rem] font-['poppins'] font-semibold mt-2 ml-6">HSCP</p>
                                <p className="text-[1.2rem] font-['poppins'] opacity-50 ml-6 rounded-[5px]">Heading1</p>
                            </div>
                            <div onClick={()=>{
                                var data = []
                                for(var i = 0; i<yearly['sscp'].length;i++){
                                    data.push({
                                        name: i+2015,
                                        value: yearly['sscp'][i]
                                    })
                                }
                                setYearlyGraph(data);
                                console.log(data)
                            }} className="bg-[#fff] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                                <p className="text-[1.5rem] font-['poppins'] font-semibold mt-2 ml-6">SSCP</p>
                                <p className="text-[1.2rem] font-['poppins'] opacity-50 ml-6 rounded-[5px]">Heading1</p>

                            </div>
                        </div>
                        <div className="flex w-[100%] h-[32%] mb-[1.33%]">
                            <div onClick={()=>{
                                var data = []
                                for(var i = 0; i<yearly['cgpa'].length;i++){
                                    data.push({
                                        name: i+2015,
                                        value: yearly['cgpa'][i]
                                    })
                                }
                                setYearlyGraph(data);
                                console.log(data)
                            }} className="bg-[#fff] mr-[2%] w-[49%] h-[100%] rounded-[5px]">
                                <p className="text-[1.5rem] font-['poppins'] font-semibold mt-2 ml-6">CGPA</p>
                                <p className="text-[1.2rem] font-['poppins'] opacity-50 ml-6 rounded-[5px]">Heading1</p>
                            </div>
                            <div onClick={()=>{
                                var data = []
                                for(var i = 0; i<yearly['sat'].length;i++){
                                    data.push({
                                        name: i+2015,
                                        value: yearly['sat'][i]
                                    })
                                }
                                setYearlyGraph(data);
                                console.log(data)
                            }} className="bg-[#fff] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                                <p className="text-[1.5rem] font-['poppins'] font-semibold mt-2 ml-6">SAT</p>
                                <p className="text-[1.2rem] font-['poppins'] opacity-50 ml-6 rounded-[5px]">Heading1</p>

                            </div>
                        </div>
                        <div className="flex w-[100%] h-[32%] mb-[1.33%]">
                            <div onClick={()=>{
                                var data = []
                                for(var i = 0; i<yearly['package'].length;i++){
                                    data.push({
                                        name: i+2015,
                                        value: yearly['package'][i]
                                    })
                                }
                                setYearlyGraph(data);
                                console.log(data)
                            }} className="bg-[#fff] mr-[2%] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                                <p className="text-[1.5rem] font-['poppins'] font-semibold mt-2 ml-6">Package</p>
                                <p className="text-[1.2rem] font-['poppins'] opacity-50 ml-6 rounded-[5px]">Heading1</p>
                            </div>
                            <div className="bg-[#fff] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                                <p className="text-[1.5rem] font-['poppins'] font-semibold mt-2 ml-6">Heading1</p>
                                <p className="text-[1.2rem] font-['poppins'] opacity-50 ml-6 rounded-[5px]">Heading1</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[40px] flex">
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6" style={{fontSize: 13}}>
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">CGPA - Salary Graph</h1>
                        <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart
                            width={400}
                            height={400}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                            >
                            <CartesianGrid />
                            <XAxis type="number" dataKey="cgpa" name="stature" unit="" />
                            <YAxis type="number" dataKey="package" name="weight" unit="Rs" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="A school" data={students} fill="#8884d8" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6" style={{fontSize: 13}}>
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">CGPA - Salary Graph</h1>
                    <ResponsiveContainer width="100%" height="85%">
                        <BarChart
                        width={500}
                        height={280}
                        data={board}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        {/* <XAxis dataKey="name" /> */}
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sscp" fill="#8884d8" />
                        <Bar dataKey="hscp" fill="#82ca9d" />
                        <Bar dataKey="hscp" fill="orange" />
                        <Bar dataKey="cgpa" fill="pink" />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-[#fff] mt-24 mr-64 min-h-[200px] px-16 pt-6">
                    <div className="flex justify-between">
                    <h1 className="text-['Poppins'] mt-2 text-[2.5rem] font-semibold">Heading 1</h1>
                    <button className="bg-blue px-4 py-2 text-[#fff] rounded-xl text-[2rem]">Add Student</button>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div></div>
                        <input className="bg-white border-2 border-black rounded-md h-[30px] w-[250px] text-[1.2rem] pl-2" placeholder="Search"/> 
                    </div>
                    <div>
                    <table>
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
                        {
                            students.slice(0,50).map((val,index)=>(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.category}</td>
                                    <td>{Number(val.sscp).toFixed(2)}</td>
                                    <td>{val.ssc}</td>
                                    <td>{Number(val.hscp).toFixed(2)}</td>
                                    <td>{val.hsc}</td>
                                    <td>{val.hsc_stream}</td>
                                    <td>{val.batch}</td>
                                    <td>{Number(val.cgpa).toFixed(2)}</td>
                                    <td>{val.sat}</td>
                                    <td>{val.has_internship}</td>
                                    <td>{val.hosteller}</td>
                                    <td>{val.backlogs}</td>
                                    <td>{val.placed}</td>
                                    <td>{Number(val.package).toFixed(2)}</td>
                                    <td>{val.year_of_placement}</td>
                                    <td>{collegeDetails['name']}</td>
                                </tr>
                            ))
                        }
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}