import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { Switch, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  return (
	  <ThemeProvider theme={theme}>
		  <Switch>
			  <Route path="/signup" component={SignUp} />
			  <Route path="/signin" component={SignIn} />
		  </Switch>
	  </ThemeProvider>
  )
}

export default App
