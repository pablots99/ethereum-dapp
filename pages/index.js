import  React  from 'react'
import { factory } from '../ethereum/factory'
import { CampaignCard } from '../components/campaign-card/campaign-card';
import { Button, Grid } from '@mui/material';
import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import { Snackbar, CircularProgress, Box, Alert } from '@mui/material';

import { CampaignModal } from '../components/CampaignModal/CampaignModal';
const CampaingIndex = ({ campaings }) => {
	const pending = (
		<React.Fragment>
			<Box sx={{ display: 'flex' }}>
				<CircularProgress />
			</Box>
		</React.Fragment>
	);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setoktransaction(false);
	};
	const [pendingopen, setpendingtransaction] = React.useState(false);
	const [okTransaction, setoktransaction] = React.useState(false);
	return (
		<>
			<Layout>
				<div >
					CAMPAINGS
					<CampaignModal setPending={setpendingtransaction} setok={setoktransaction}></CampaignModal>
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
			</Layout>
			<Snackbar
				open={pendingopen}
				autoHideDuration={6000}
				message="Transaction is beign processed"
				action={pending}
			/>
			<Snackbar open={okTransaction} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
					Transaction succeeded
				</Alert>
			</Snackbar>
		</>

	)
}

//server side render
export async function getServerSideProps() {
	const campaings = await factory.methods.getCampaings().call()
	return { props: { campaings } }
}
export default CampaingIndex


