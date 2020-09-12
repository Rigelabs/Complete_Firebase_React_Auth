import { Avatar, Button, FormControl, Input, InputLabel, Paper, Typography } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'

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

function SignIn(props) {
	const { classes } = props

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
			<Avatar className={classes.avatar} alt="The Nest" src="https://nwbaoa.bl.files.1drv.com/y4mrS-gTkC-TGZ0hOE_kBfg3UuKk1Tld5iXq9n6eBUsIdh1OzW4uuwEyVSquiUuI6pLueJrdIppNVR5mKRzcuP--LmFOEZQD0WFO4nW8J8iujRZJ6aof9wz8OWUWm1yqqvNB6U609nZl8nfXTf3hIi0XU_CqWPbzQKhSaY1AZwSkzomGM_TP0QdfewiP02TSX3VT-b16bj1MySbWa08HDtdpg?width=692&height=692&cropmode=none"/>
				<Typography component="h1" variant="h5">
					Sign in
       			</Typography>
				<form className={classes.form} onSubmit={e => e.preventDefault() && false}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email Address</InputLabel>
						<Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={login}
						className={classes.submit}>
						Sign in
          			</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						component={Link}
						to="/reset"
						className={classes.submit}>
						Reset Password
          			</Button>
					
					<Button
						style={{backgroundColor:'lime',color:'white'}}
						type="submit"
						fullWidth
						variant="contained"
						
						component={Link}
						to="/register"
						className={classes.submit}>
						Register
          			</Button>
				</form>
			</Paper>
		</main>
	)

	async function login() {
		try {
			await firebase.login(email, password)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(withStyles(styles)(SignIn))