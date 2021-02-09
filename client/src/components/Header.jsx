import React, { useContext } from 'react'
import { Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import './Header.css'

function Header() {
	const { isAuthenticated } = useContext(AuthContext)

	return (
		<header>
			<Toolbar className="toolbar">
				<Typography component="p">Pandora's box</Typography>

				<nav className="nav">
					<ul className="nav__list">
						{isAuthenticated 
						
						? 
						
						(
							<>
								<li>
									<Link to="/">
										<Button variant="contained" color="primary">My files</Button>
									</Link>
								</li>
								<li>
									<Link to="/">
										<Button variant="text" color="secondary">Sign Out</Button>
									</Link>
								</li>
								
							</>
						)

						: 
						
						(
							<>
								<li className="nav__list-item">
									<Link to="/signin">
										<Button variant="contained" color="primary">Sign In</Button>
									</Link>
								</li>
								<li className="nav__list-item">
									<Link to="/signup">
										<Button variant="text" color="secondary">Sign Up</Button>
									</Link>
								</li>
							</>
						)
						}

					</ul>
				</nav>

			</Toolbar>
		</header>
	)
}

export default Header
