import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { Switch, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'

function App() {
  return (
	  <ThemeProvider theme={theme}>
		  <Switch>
			  <Route path="/signup" component={SignUp} />
		  </Switch>
	  </ThemeProvider>
  )
}

export default App
