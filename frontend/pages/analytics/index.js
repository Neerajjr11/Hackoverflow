import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Legend,Bar, BarChart, CartesianGrid, ScatterChart, Scatter, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
const cir_data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
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
    const [board, setBoard] = useState([])
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
            <div className="flex self-center">
                <h1 className="text-['Poppins'] text-[3rem] font-bold">Before Policy</h1>
                <div onClick={()=>{
                    if(policy === "before"){
                        setPolicy("after")
                    }else{
                        setPolicy("before")
                    }
                }} className="rounded-3xl flex mx-4 w-[75px] shadow-md h-[30px] bg-[#fff] self-center content-center">    
                    <div className="w-[25px] h-[25px] duration-200 rounded-[14px] self-center bg-blue" style={{marginLeft: policy==="before" ? 3: 48}}></div>
                </div>
                <h1 className="text-['Poppins'] text-[3rem] font-bold">After Policy</h1>
            </div>
            <button className="self-center bg-black text-[2rem] mb-12 mt-12 rounded-2xl font-['Aclonica'] mt-3 shadow-md py-3 px-4 text-white bg-[#2B332C]">What is the policy?</button>
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
                <div className="flex">
                    <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 duration-200 hover:shadow-2xl">
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">CGPA</h1>
                        <p className="text-blue text-[7rem] font-bold">{statistics[0]}</p>
                        <p className="text-['Poppins'] text-[1.5rem]">some random text</p>
                        <p className="text-['Poppins'] text-[1.2rem] text-[#5d5d5d]">some random text</p>
                    </div>
                    <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 duration-200 hover:shadow-2xl">
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">SAT Score</h1>
                        <p className="text-blue text-[7rem] font-bold">{statistics[1]}</p>
                        <p className="text-['Poppins'] text-[1.5rem]">some random text</p>
                        <p className="text-['Poppins'] text-[1.2rem] text-[#5d5d5d]">some random text</p>
                    </div>
                    <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 duration-200 hover:shadow-2xl">
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">College Ranking</h1>
                        <p className="text-blue text-[7rem] font-bold">{statistics[2]}</p>
                        <p className="text-['Poppins'] text-[1.5rem]">some random text</p>
                        <p className="text-['Poppins'] text-[1.2rem] text-[#5d5d5d]">some random text</p>
                    </div>
                    <div className="w-[200px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6 duration-200 hover:shadow-2xl">
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">Placement Ratio</h1>
                        <p className="text-blue text-[7rem] font-bold">{statistics[3]}</p>
                        <p className="text-['Poppins'] text-[1.5rem]">some random text</p>
                        <p className="text-['Poppins'] text-[1.2rem] text-[#5d5d5d]">some random text</p>
                    </div>
                </div>
                <div className="mt-[40px] flex">
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6">
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
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg">
                        <div className="w-[100%] border-b-black border-b-2 h-[32px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[1.5rem] mt-2 ml-6">2015</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[0].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] border-b-black border-b-2 h-[32px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[1.5rem] mt-2 ml-6">2016</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[1].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] border-b-black border-b-2 h-[32px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[1.5rem] mt-2 ml-6">2017</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[2].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] border-b-black border-b-2 h-[32px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[1.5rem] mt-2 ml-6">2018</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[4].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] border-b-black border-b-2 h-[31px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[1.5rem] mt-2 ml-6">2019</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[5].value}</div>
                            </div>
                        </div>
                        <div className="w-[100%] border-b-black border-b-2 h-[30px]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[1.5rem] mt-2 ml-6">2020</p>
                                </div>
                                <div className="text-[2rem] mr-6">{yearlyGraph[3].value}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[40px] flex">
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6">
                        <h1 className="text-['Poppins'] mt-2 text-[2rem] font-semibold">Heading 1</h1>
                        <PieChart width={800} height={400}>
                            <Pie onClick={val=>console.log(val)}
                            data={cir_data}
                            cx={100}
                            cy={80}
                            innerRadius={50}
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
                                <p className="text-[1.5rem] mt-2 ml-6">HSCP</p>
                                <p className="text-[1.2rem] ml-6">Heading1</p>
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
                                <p className="text-[1.2rem] mt-2 ml-6">SSCP</p>
                                <p className="text-[0.9rem] ml-6">Heading1</p>

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
                            }} className="bg-[#fff] mr-[2%] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                                <p className="text-[1.5rem] mt-2 ml-6">CGPA</p>
                                <p className="text-[1.2rem] ml-6">Heading1</p>
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
                                <p className="text-[1.2rem] mt-2 ml-6">SAT</p>
                                <p className="text-[0.9rem] ml-6">Heading1</p>

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
                                <p className="text-[1.5rem] mt-2 ml-6">Package</p>
                                <p className="text-[1.2rem] ml-6">Heading1</p>
                            </div>
                            <div className="bg-[#fff] w-[49%] h-[100%] rounded-xl duration-100 hover:scale-105">
                                <p className="text-[1.2rem] mt-2 ml-6">Heading1</p>
                                <p className="text-[0.9rem] ml-6">Heading1</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[40px] flex">
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6">
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
                    <div className="w-[540px] h-[200px] mr-[150px] bg-[#fff] shadow-lg pl-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        width={500}
                        height={300}
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
                <div className="bg-[#fff] mt-24 mr-64 h-[200px] px-16 pt-6">
                    <div className="flex justify-between">
                    <h1 className="text-['Poppins'] mt-2 text-[2.5rem] font-semibold">Heading 1</h1>
                    <button className="bg-blue px-4 py-2 text-[#fff] rounded-xl text-[2rem]">Add Student</button>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div></div>
                        <input className="bg-white border-2 border-black rounded-md h-[30px] w-[250px] text-[1.2rem] pl-2" placeholder="Search"/> 
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}