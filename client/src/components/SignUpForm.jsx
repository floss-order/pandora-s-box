import React from 'react'
import { TextField, Typography, Button } from '@material-ui/core'

function SignUpForm() {
    return (
        <form>
            <Typography 
			component="h1" 
			variant="h4" 
			align="center">
				Sign Up
			</Typography>
			
			<TextField 
			label="Enter email" 
			fullWidth 
			margin="normal" 
			type="email" 
			variant="outlined" 
			/>

			<TextField 
			label="Enter password" 
			fullWidth 
			margin="normal" 
			type="password" 
			variant="outlined" 
            />
			
			<TextField 
			label="Confirm the password" 
			fullWidth 
			margin="normal"
			type="password" 
			variant="outlined" 
			/>

			<Button 
			color="secondary" 
			variant="contained" 
			fullWidth 
			type="submit" 
			size="large">
				Register
			</Button>
        </form>
    )
}

export default SignUpForm
