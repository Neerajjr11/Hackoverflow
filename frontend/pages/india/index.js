import DatamapsIndia from 'react-datamaps-india';
import styles from './india.module.css';
export default function App(props){
    return (
        <div className='flex'>
        <div
          style={{
            flex: 1,
            fontSize: "2rem",
            display: 'inline-block',
            position: 'relative',
            width: '100%',
            paddingBottom: '100%',
            verticalAlign: 'top',
            overflow: 'hidden',
          }}
        >

        <DatamapsIndia
				regionData={{
                    'Andaman & Nicobar Island':{
                        value: 36
					},
					'Andhra Pradesh':{
                        value: 36
					},
					'Arunanchal Pradesh':{
                        value: 18
					},
					'Assam':{
						value: 57
					},
					'Bihar':{
						value: 77
					},
					'Chandigarh':{
						value: 67
					},
					'Chhattisgarh':{
						value: 65
					},
					'Dadara & Nagar Haveli':{
						value: 45
					},
					'Daman & Diu':{
                        value: 36
					},
					'Delhi':{
						value: 23
					},
					'Goa':{
                        value: 33
					},
					'Gujarat':{
						value: 29
					},
					'Haryana':{
                        value: 67
					},
					'Himachal Pradesh':{
                        value: 45
					},
					'Jammu & Kashmir':{
						value: 87
					},
					'Jharkhand':{
						value: 52
					},
					'Karnataka':{
						value: 36
					},
					'Kerala':{
						value: 34
					},
					'Lakshadweep':{
						value: 54
					},
					'Madhya Pradesh':{
						value: 36
					},
					'Maharashtra':{
						value: 26
					},
					'Manipur':{
                        value: 46
					},
					'Meghalaya':{
						value: 38
					},
					'Mizoram':{
						value: 41
					},
					'Nagaland':{
                        value: 45
					},
					'Odisha':{
						value: 46
					},
					'Puducherry':{
						value: 7
					},
					'Punjab':{
						value: 23
					},
					'Rajasthan':{
						value: 67
					},
					'Sikkim':{
                        value: 21
					},
					'Tamil Nadu':{
						value: 17
					},
					'Telangana':{
                        value: 23
					},
					'Tripura':{
                        value: 43
					},
					'Uttar Pradesh':{
						value: 23
					},
					'Uttarakhand':{
                        value: 36
					},
					'West Bengal':{
                        value: 35
					},
				}}
				hoverComponent={({ value }) => {
                    return (
                        <>
						<p>{value.name}</p>
						<p>{value.value}</p>
					</>
					)
				}}
				mapLayout={{
					legendTitle: 'Unemployment Legend',
                    title: "Statewise Unemployement Ratio",
					startColor: 'green',
					endColor: 'red',
					hoverTitle: 'Count',
					noDataColor: '#f5f5f5',
					borderColor: '#8D8D8D',
					hoverBorderColor: '#8D8D8D',
					hoverColor: '#584EFD',
				}}
				/>
                </div>
                </div>
    );
}