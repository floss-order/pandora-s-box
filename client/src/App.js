import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { Switch, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './components/Header'

function App() {
  return (
	  <ThemeProvider theme={theme}>
		<Header />
		<Switch>
			<Route path="/signup" component={SignUp} />
			<Route path="/signin" component={SignIn} />
		</Switch>
	  </ThemeProvider>
  )
}

export default App
