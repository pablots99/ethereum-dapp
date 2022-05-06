import React from 'react';
import { Button, Modal, Box, Typography,OutlinedInput,FormControl,TextField,InputAdornment,FormHelperText} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Campaing from '../../ethereum/build/Campaing.json'
import web3 from '../../ethereum/web3'
import {useRouter} from 'next/router'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 300,
	height: 300,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};



export const ContributeModal = (props
	) => {
	const router = useRouter();
	const refreshData = () => router.replace(router.asPath);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [values, setValues] = React.useState({
		amount: 0,
	  });
	const [error,setErrors] = React.useState({
		amount: false,
	  });
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	  };
	const contribute = async (props) => {
			let name_err = false;
			let amount_err = false;
			let err = 0;
			console.log(values)
			if(values.amount === 0)
				amount_err = true, err++;
			if(err)
				setErrors({amount: amount_err})
			else
			{
				const accounts = await web3.eth.getAccounts()
				try {
					props.setPending(true)
					handleClose();
					const campaign = await new web3.eth.Contract(
						Campaing.abi,
						props.contract
					);
					console.log(values.amount)
					await campaign.methods.contribute().send({
						from:accounts[0],
						value:values.amount
					})
					await refreshData();
					props.setPending(false);
					props.setok(true);
				}
				catch(err) {
					console.error(err)
					props.setPending(false);
					//handle error methamask
					//return ??
				}
				setErrors({amount: false})
				setValues({amount: 0,})

			}

	}
	return (
		<div style={{textAlign: "bttom"}}>
			<Button variant="contained" onClick={handleOpen}>
				{/* <AddIcon></AddIcon> */}
				Contribute
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Contribute
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					</Typography>
					<span>ammount</span>
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
					<Button onClick={() => {contribute(props)}}>Contribute</Button>
				</Box>

			</Modal>

		</div>
	);
}
