import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { Switch, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Files from './pages/Files'

function App() {
  return (
	<AuthProvider>
		<ThemeProvider theme={theme}>
			<Header />
			<Switch>
				<PrivateRoute path="/" component={Files} exact />
				<Route path="/signup" component={SignUp} />
				<Route path="/signin" component={SignIn} />
			</Switch>
		</ThemeProvider>
	</AuthProvider>
  )
}

export default App
