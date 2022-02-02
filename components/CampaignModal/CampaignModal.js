import React from 'react';
import { Button, Modal, Box, Typography,OutlinedInput,FormControl,TextField,InputAdornment,FormHelperText} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ErrorSharp } from '@mui/icons-material';
import {factory} from '../../ethereum/factory'
import web3 from '../../ethereum/web3'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	height: 500,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export const CampaignModal = (props) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [values, setValues] = React.useState({
		amount: 0,
		name: 	'',
		description: '',
	  });
	const [error,setErrors] = React.useState({
		amount: false,
		name: 	false,
	  });
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	  };
	const createCampaign = async (props) => {
			let name_err = false;
			let amount_err = false;
			let err = 0;
			console.log(values)
			if(values.amount === 0)
				amount_err = true, err++;
			if(values.name === '')
				name_err = true,err++;
			console.log(err)
			if(err)
				setErrors({amount: amount_err, name:name_err})
			else
			{
				const accounts = await web3.eth.getAccounts()
				console.log(accounts)
				console.log("props",props)
				try {
					props.setPending(true)
					handleClose();
					await factory.methods.createCampaing(values.amount,values.name,values.description).send({
						from:accounts[0]
					})
					props.setPending(false);
					props.setok(true);
				}
				catch(err) {
					console.error(err)
					props.setPending(false);
					//handle error methamask
					//return ??
				}
				setErrors({amount: false, name:false})
				setValues({amount: 0,name: 	'',description: '',})

			}

	}
	return (
		<div>
			<Button onClick={handleOpen}>
				<AddIcon></AddIcon>
				Add Campaign
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Add campaign
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					</Typography>
					<span>Minimun Contribution</span>
					<br></br>
					<FormControl variant="outlined">
						<OutlinedInput
							error={error.amount}
							id="ammount"
							type="number"
							onChange={handleChange('amount')}
							endAdornment={<InputAdornment position="end">wei</InputAdornment>}
						/>
					</FormControl>
					<br></br><br></br>
					<span>name</span>
					<br></br>
					<TextField
							error={error.name}
							id="name"
							value={values.name}
							onChange={handleChange('name')}
					/>
					<br></br><br></br>
					<span>description</span>
					<br></br>
					<TextField
							fullWidth
							id="description"
							onChange={handleChange('description')}
							value={values.description}
					/>
					<br></br><br></br>
					<Button onClick={() => {createCampaign(props)}}>Create Campaign</Button>
				</Box>

			</Modal>

		</div>
	);
}
