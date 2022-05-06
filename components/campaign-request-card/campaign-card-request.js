import React from 'react'
import Card from '@mui/material/Card';
import { Button, Modal, Box, Typography,OutlinedInput,FormControl,TextField,InputAdornment,FormHelperText} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import web3 from '../../ethereum/web3';
import Campaing from '../../ethereum/build/Campaing.json'

export const CampaignCardRequest = (props) => {
	const aproveRequest = async () => {
		props.setPending(true);
		const accounts = await web3.eth.getAccounts()
		const campaign = await new web3.eth.Contract(
		Campaing.abi,
		props.contract
		);
		console.log(campaign)
		try {
			await campaign.methods.aproveRequest(props.id - 14,true).send({
				from:accounts[0]
			});
			props.setok(true);
		} catch (error) {
			console.error("error")
			props.setok(false);
			props.setPending(false);
		}
		props.setPending(false);



	}
  return (
	<Card sx={{ minWidth: 100 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
					{props.description}
				</Typography>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{"Ammount: " + props.value}
				</Typography>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{"Aproved: " + props.votes}
				</Typography>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{"Complete: " + props.complete}
				</Typography>
			</CardContent>

			<CardActions>
				<a><Button size="small" onClick={() => aproveRequest()}>Aprove request</Button></a>
			</CardActions>

		</Card>
  )
}
