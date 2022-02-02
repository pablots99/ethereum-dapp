import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



const bull = (
	<Box
	  component="span"
	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
	  •
	</Box>
  );

export const CampaignCard = ({ campaings }) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					contract
				</Typography>
				<Typography variant="h4" component="div">
					{campaings.slice(0, 8)}...
				</Typography>
			</CardContent>

			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>

		</Card>


	);
};
