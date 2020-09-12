import { Avatar, Button, Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

function NotFound(props) {
	const { classes } = props
    
	return (
		<main className={classes.main} style={{backgroundColor:'#9e9e9e'}}>
			<Paper className={classes.paper} >
				<Avatar className={classes.avatar} alt="The Nest" src="https://nwbaoa.bl.files.1drv.com/y4mrS-gTkC-TGZ0hOE_kBfg3UuKk1Tld5iXq9n6eBUsIdh1OzW4uuwEyVSquiUuI6pLueJrdIppNVR5mKRzcuP--LmFOEZQD0WFO4nW8J8iujRZJ6aof9wz8OWUWm1yqqvNB6U609nZl8nfXTf3hIi0XU_CqWPbzQKhSaY1AZwSkzomGM_TP0QdfewiP02TSX3VT-b16bj1MySbWa08HDtdpg?width=692&height=692&cropmode=none"/>
				
                <h1 style={{color:'#f44336'}}>404 Error</h1>
                <h3 style={{marginTop:20,marginBottom:10}}>Sorry, Requested Page not Found</h3>
                <p style={{color:'#81c784',marginTop:10,marginBottom:20}}>If you requested the right page, please contact us for support</p>
                <Button
                    style={{backgroundColor:'lime',color:'black'}}
					type="submit"
					fullWidth
					variant="contained"
					
					component={Link}
					to="/feedback"
					>
					Contact Us
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					component={Link}
					to="/main"
					className={classes.submit}>
					Back to Listings
          		</Button>
                
				
          	
				  
			</Paper>
		</main>
	)
}

export default withStyles(styles)(NotFound)