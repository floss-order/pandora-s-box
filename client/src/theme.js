import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#757575',
      dark: '#c7c7c7',
      contrastText: '#fff',
    },
  },
})

export default theme
