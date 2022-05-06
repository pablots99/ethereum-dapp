
import React from 'react';
import web3 from '../ethereum/web3';
import Campaing from '../ethereum/build/Campaing.json'
import { CampaignCardRequest } from '../components/campaign-request-card/campaign-card-request';
import { Snackbar, CircularProgress, Box, Alert } from '@mui/material';

import { useRouter } from 'next/router';
import { Layout } from '../components/layout/layout';
import { Grid } from '@mui/material';
import { ContributeModal } from '../components/contribute-modal/contribute-modal';

const Campaign = (props) => {
	const pending = (
		<React.Fragment>
			<Box sx={{ display: 'flex' }}>
				<CircularProgress />
			</Box>
		</React.Fragment>
	);
	const [pendingopen, setpendingtransaction] = React.useState(false);
	const [okTransaction, setoktransaction] = React.useState(false);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setoktransaction(false);
	};
	return (
		<>
		<Layout>
		{"manager: "+ props.manager}
			<div>

				<div style={{float: "left",marginRight: "20px"}}>
						<span ><h2 >{props.name}</h2></span>
				</div>
				<div style={{height: "20px"}}></div>
				<div style={{textAlign: "bottom"}}>
					<ContributeModal setPending={setpendingtransaction} setok={setoktransaction} contract={props.contract} ></ContributeModal>
				</div>
				<div style={{clear: "both"}}>
				<b>{"Colected: " +props.balance + " wei"}</b>
				</div>
			</div>
			<hr></hr>

			<h4>{props.description}</h4>

			<h1>Requests</h1>
			<div>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{JSON.parse(props.requests).map((res,index) => {
						return <Grid item xs={2} sm={4} md={4} key={index}>
							<CampaignCardRequest description={res.description}
												 value={res.value}
												 recipent={res.recipent}
												 votes={res.vote_yes}
												 complete={res.complete}
												 contract={props.contract}
												 setPending={setpendingtransaction}
												 setok={setoktransaction}
												 id={res.id}
							></CampaignCardRequest>
						</Grid>
				})}

			</Grid>
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
};

export async function getServerSideProps(context) {
	const { contract } = context.query
	const campaign = await new web3.eth.Contract(
		Campaing.abi,
		contract
	);
	const description = await campaign.methods.description().call();
	const minContribition = await campaign.methods.minContribution().call();
	const name = await campaign.methods.name().call();
	const manager = await campaign.methods.manager().call();
	const balance = await campaign.methods.getBalance().call();
	const numRequests = await campaign.methods.count_requests().call();
	let requests = []
	for (let i = 0; i < numRequests; i++) {
		const res = await campaign.methods.requests(i).call();
		requests.push(res)
	}
	requests = JSON.stringify(requests)
	return {
		props: {
			description,
			minContribition,
			name,
			manager,
			balance,
			requests,
			contract
		}
	}
}
export default Campaign;
