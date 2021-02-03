import React from 'react'
import { TextField, Typography, Button, Checkbox, FormControlLabel } from '@material-ui/core'

function SignInForm() {
    return (
        <form>
            <Typography 
			component="h1" 
			variant="h4" 
			align="center">
				Sign In
			</Typography>
			
			<TextField 
			label="Email" 
			fullWidth 
			margin="normal" 
			type="email" 
			variant="outlined" 
			/>

			<TextField 
			label="Password" 
			fullWidth 
			margin="normal" 
			type="password" 
			variant="outlined" 
            />

            <FormControlLabel
            control={
                <Checkbox
                    name="remember"
                    value="remember"
                />
            }
            label="Remember me"
            />

			<Button 
			color="secondary" 
			variant="contained" 
			fullWidth 
			type="submit" 
			size="large">
				Sign in
			</Button>
        </form>
    )
}

export default SignInForm
