import { CircularProgress, CssBaseline } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Feedback from '../Contact/index'
import Dashboard from '../Dashboard'
import firebase from '../firebase'
import HomePage from '../Homepage/index'
import Login from '../Login'
import Listings from '../Main'
import notFound from '../NotFound/notFound'
import Register from '../Register'
import Reset from '../Reset/index'
import './styles.css'

const theme = createMuiTheme()

export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})


	return firebaseInitialized !== false ? (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register }  />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/reset" component={Reset} />
					<Route exact path="/main" component={Listings} />
					<Route exact path="/feedback" component={Feedback} />
					<Route  component={notFound} />

				</Switch>
			</Router>
		</MuiThemeProvider>
	) : <div id="loader"><CircularProgress /></div>
}