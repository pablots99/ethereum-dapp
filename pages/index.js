import {React} from 'react'
import {factory} from '../ethereum/factory'
import { CampaignCard } from '../components/campaign-card/campaign-card';
import { Grid } from '@mui/material';
import Head from 'next/head';

const CampaingIndex = ({campaings}) => {
	return (
		<>
			<div >
				CAMPAINGS
				<hr></hr>
				<div>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

					{campaings.map(c =>
						<Grid item xs={2} sm={4} md={4} key={c}>
							<CampaignCard campaings={c}></CampaignCard>
						</Grid>
					)
					}
				</Grid>
				</div>
			</div>
		</>

	)
}

//server side render
export async function getServerSideProps() { 
	const campaings = await factory.methods.getCampaings().call()
	return {props:{campaings}}
}
export default CampaingIndex


