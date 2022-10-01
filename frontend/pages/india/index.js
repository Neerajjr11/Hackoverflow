import DatamapsIndia from 'react-datamaps-india';
export default function App(props){
    return (
        <div className='flex'>
        <div
          style={{
            flex: 1,
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
                        value: 346
					},
					'Arunanchal Pradesh':{
                        value: 346
					},
					'Assam':{
						value: 90
					},
					'Bihar':{
						value: 346
					},
					'Chandigarh':{
						value: 346
					},
					'Chhattisgarh':{
						value: 346
					},
					'Dadara & Nagar Haveli':{
						value: 346
					},
					'Daman & Diu':{
                        value: 346
					},
					'Delhi':{
						value: 346
					},
					'Goa':{
                        value: 346
					},
					'Gujarat':{
						value: 346
					},
					'Haryana':{
                        value: 346
					},
					'Himachal Pradesh':{
                        value: 346
					},
					'Jammu & Kashmir':{
						value: 346
					},
					'Jharkhand':{
						value: 346
					},
					'Karnataka':{
						value: 346
					},
					'Kerala':{
						value: 346
					},
					'Lakshadweep':{
						value: 346
					},
					'Madhya Pradesh':{
						value: 346
					},
					'Maharashtra':{
						value: 346
					},
					'Manipur':{
                        value: 346
					},
					'Meghalaya':{
						value: 346
					},
					'Mizoram':{
						value: 346
					},
					'Nagaland':{
                        value: 346
					},
					'Odisha':{
						value: 346
					},
					'Puducherry':{
						value: 346
					},
					'Punjab':{
						value: 346
					},
					'Rajasthan':{
						value: 346
					},
					'Sikkim':{
                        value: 346
					},
					'Tamil Nadu':{
						value: 346
					},
					'Telangana':{
                        value: 346
					},
					'Tripura':{
                        value: 346
					},
					'Uttar Pradesh':{
						value: 346
					},
					'Uttarakhand':{
                        value: 346
					},
					'West Bengal':{
                        value: 346
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
					legendTitle: 'Legend Title',
					startColor: '#FFDAB9',
					endColor: '#FF6347',
					hoverTitle: 'Count',
					noDataColor: '#f5f5f5',
					borderColor: '#8D8D8D',
					hoverBorderColor: '#8D8D8D',
					hoverColor: 'green',
				}}
				/>
                </div>
                </div>
    );
}