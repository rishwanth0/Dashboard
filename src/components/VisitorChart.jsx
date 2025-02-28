import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {name:"",last6Months:30, previous:18},
    {name:"Dec",last6Months:25, previous:25},
    {name:"",last6Months:40, previous:20},
    {name:"Jan",last6Months:22, previous:25},
    {name:"",last6Months:30, previous:20},
    {name:"Feb",last6Months:24, previous:18},
    {name:"",last6Months:36, previous:26},
    {name:"Mar",last6Months:80, previous:60},
    {name:"",last6Months:15, previous:10},
    {name:"Apr",last6Months:45, previous:50},
    {name:"",last6Months:62, previous:54},
    {name:"May",last6Months:60, previous:55},
    {name:"",last6Months:13, previous:6},
    {name:"Jun",last6Months:70, previous:65},
    {name:"",last6Months:45, previous:36},
    

]

const VisitorChart=()=>{
    return(
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Visitor Statistics</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis domain={[0,100]}/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone"dataKey="last6Months" stroke="#6b46c1" name="Last 6 Months"/>
                    <Line type="monotone" dataKey="previous" stroke="#38a169" name="Previous"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default VisitorChart;