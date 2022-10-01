import { PieChart, Pie, Cell, XAxis, BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Category 1', value: 400 },
    { name: '', value: 300 }
  ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
export default function App(props){
    return(
        <div className="w-[100vw] h-[100vh] bg-white flex flex-col">
            <h1 className="font-['Aclonica'] font-bold text-[4rem] self-center">Resume Review</h1>
            <div className="flex">
            <PieChart width={1400} height={325}>
                <Pie
                data={data}
                cx={180}
                cy={200}
                innerRadius={60}
                outerRadius={85}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name==="Category 1"? "#584EFD": "#fff"} />
                ))}
                </Pie>
                <Pie
                data={data}
                cx={560}
                cy={200}
                innerRadius={60}
                outerRadius={85}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name==="Category 1"? "#584EFD": "#fff"} />
                ))}
                </Pie>
                <Pie
                data={data}
                cx={930}
                cy={200}
                innerRadius={60}
                outerRadius={85}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name==="Category 1"? "#584EFD": "#fff"} />
                ))}
                </Pie>
                <Pie
                data={data}
                cx={1300}
                cy={200}
                innerRadius={60}
                outerRadius={85}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name==="Category 1"? "#584EFD": "#fff"} />
                ))}
                </Pie>
            </PieChart>
            </div>
            <div className="flex justify-around mb-6">
                <h2 className="text-[2.5rem] font-['Aclonica']">Category 1</h2>
                <h2 className="text-[2.5rem] font-['Aclonica']">Category 1</h2>
                <h2 className="text-[2.5rem] font-['Aclonica']">Category 1</h2>
                <h2 className="text-[2.5rem] font-['Aclonica']">Category 1</h2>
            </div>
            <div className='bg-[#fff] shadow-md w-[85%] px-6 py-10 self-center justify-center flex flex-col'>
            <h1 className="font-['Aclonica'] text-[2rem] mb-24">Your resume scored <b>10</b> out of <b>100</b></h1>
            <ResponsiveContainer width={1200} height={100}>
            <BarChart layout='vertical' width={900} height={100} data={data}>
                <Bar dataKey="value" fill="blue" fillOpacity={"green"}/>
            </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
}