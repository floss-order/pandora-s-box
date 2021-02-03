import { Container, Toolbar, Typography, Button } from '@material-ui/core'

function Header() {
	return (
		<header>
			<Toolbar>
				<Typography component="p">Pandora's box</Typography>
				<Button variant="contained" color="primary">Sign In</Button>
				<Button variant="text" color="secondary">Sign Out</Button>
			</Toolbar>
		</header>
	)
}

export default Header
