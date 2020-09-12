import { Avatar, Button, FormControl, Input, InputLabel, Paper, TextField } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../firebase';
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
		marginTop: theme.spacing.unit * 0,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
});

function Feedback(props) {
	const { classes } = props

	const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
			<Avatar className={classes.avatar} alt="The Nest" src="https://nwbaoa.bl.files.1drv.com/y4mrS-gTkC-TGZ0hOE_kBfg3UuKk1Tld5iXq9n6eBUsIdh1OzW4uuwEyVSquiUuI6pLueJrdIppNVR5mKRzcuP--LmFOEZQD0WFO4nW8J8iujRZJ6aof9wz8OWUWm1yqqvNB6U609nZl8nfXTf3hIi0XU_CqWPbzQKhSaY1AZwSkzomGM_TP0QdfewiP02TSX3VT-b16bj1MySbWa08HDtdpg?width=692&height=692&cropmode=none"/>
				
					<h1 style={{color:"lightblue"}}> Contact Form </h1>
                    <h4> We value your feedback, expect our response within 24hrs </h4>
				<form className={classes.form} onSubmit={e => e.preventDefault() && false}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email Address</InputLabel>
						<Input id="email" name="email"  autoFocus value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="subject">Subject</InputLabel>
						<Input name="subject" type="text" id="subject" autoComplete="off" value={subject} onChange={e => setSubject(e.target.value)} />
					</FormControl>
                    <FormControl margin="normal" required fullWidth>
                    <TextField
                           
                            id="outlined-textarea"
                            label="Message"
                            placeholder="Message"
                            multiline
                            variant="outlined"
                            autoComplete="off" value={message} 
                            onChange={e => setMessage(e.target.value)} 
                    />
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						
						onClick={reset}
                        style={{backgroundColor:"lightblue"}}
						className={classes.submit}>
						Submit
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
					
				</form>
			</Paper>
		</main>
    )
    async function reset() {
        
		try {
            await firebase.auth.sendPasswordResetEmail(email)
            alert(`Password Reset link has been sent to ${email} ` )
			props.history.replace('/login')
		} catch(error) {
			alert(error.message)
		}
	}

	
}

export default withRouter(withStyles(styles)(Feedback))