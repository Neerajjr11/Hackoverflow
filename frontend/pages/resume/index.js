import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, XAxis, BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const answers = [
    "Add more keywords to your resume", 
    "Explain internship work in more depth", 
    "Make the resume less cluttered",
    "Add more section to your resume", 
    "Try to add industry level certification",
    "It seems like your resume scored poorly on key checks that hiring managers and resume screening software scan your resume for. But don't worry! With a few simple changes to your resume, you can increase your score by 40+ points. We'll go through them in this report.",
    "There are some key stylistic guidelines that your resume should follow, and it doesn't look like your resume meets all of them."
]

function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
      var b = Math.floor(Math.random() * (c + 1));
      var a = d[c];
      d[c] = d[b];
      d[b] = a;
    }
    return d
  };

var arr = []
for(var i = 0;i<answers.length;i++){
    arr.push(i)
}

arr = shuffleArray(arr);

const data = [
    { name: 'Category 1', value: 400 },
    { name: '', value: 300 }
  ];
  const datas = [
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
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
export default function App(props){
    const [score, setScore]= useState([])
    const [count, setCount]= useState(0)
    const [page, setPage] = useState(0)
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/get_resume/")
        .then(res=>res.json())
        .then(res=>{
            const d = []
            var c = 0
            for(const property in res){
                c += res[property]
                d.push({
                    name: property,
                    value: res[property]
                })
            }
            console.log(d)
            setScore(d)
            setCount(c)
        })
    }, [])
    return(
        <>
        {
            page===0 && (
                <div className='w-[100vw] h-[100vh] bg-white flex flex-col'>
                    <h1 className="font-['Aclonica'] font-bold text-[4rem] my-6 self-center">Resume Rater</h1>
                    <h1 className="font-['Aclonica'] font-bold text-[3rem] my-6 self-center">Drag Your resume or click the button to choose the file</h1>
                    <div className='w-[50%] pl-[40%] pt-[15%] border-4 border-black align-middle justify-center rounded-xl self-center h-[200px] bg-[#777]'>
                        <input type={"file"} />
                    </div>
                    <button onClick={()=>{
                        setTimeout(()=>setPage(1), 5000)    
                    }} className='py-6 text-[2rem] text-[#fff] rounded-xl mt-4 rounded-md shadow-sm duration-200 hover:shadow-xl w-[90%] bg-blue self-center'>Done</button>
                </div>
            )
        }
        {page===1 && (<div className="w-[100vw] h-[100vh] bg-white flex flex-col">
            <h1 className="font-['Aclonica'] font-bold text-[4rem] my-6 self-center">Resume Rater</h1>
            <div className="bg-[#fff] hover:shadow-xl duration-200 shadow-md w-[85%] h-[150px] px-6 py-10 mb-4 self-center justify-center flex flex-col">
                <h1 className='text-[1.8rem] py-1 font-bold'>Hints:</h1>
                <h3 className='text-[1.5rem] py-1'>1. {answers[arr[0]]}</h3>
                <h3 className='text-[1.5rem] py-1'>2. {answers[arr[1]]}</h3>
                <h3 className='text-[1.5rem] py-1'>3. {answers[arr[2]]}</h3>
                <h3 className='text-[1.5rem] py-1'>4. {answers[arr[3]]}</h3>
                <h3 className='text-[1.5rem] py-1'>5. {answers[arr[4]]}</h3>
            </div>
            <div className='bg-[#fff] hover:shadow-lg duration-200 shadow-md w-[85%] h-[400px] px-6 py-10 self-center justify-center flex flex-col'>
                <h1 className="font-['Aclonica'] text-[2rem] mb-24 text-[1.5rem]">Your resume scored <b>{count}</b> out of <b>100</b></h1>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={150} data={score.splice(0, 10)}>
                        <YAxis />
                        <XAxis dataKey={"name"}/>
                        <Tooltip />
                        <Legend />
                    <Bar dataKey="value" fill="blue" />
                    </BarChart>
                </ResponsiveContainer>
            
            </div>
        </div>)}
        </>
    );
}