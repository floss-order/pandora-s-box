import React from 'react'
import { TextField, Typography, Button, Checkbox, FormControlLabel } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as formValidation from '../formValidation'

function SignInForm() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(formValidation.signInSchema)
	})

	function onSubmit(data) {
		console.log(data)
	}

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
			name="email"
			inputRef={register}
			required
			error={!!errors.email}
			helperText={errors?.email?.message}
			/>

			<TextField 
			label="Password" 
			fullWidth 
			margin="normal" 
			type="password" 
			variant="outlined"
			name="password" 
			inputRef={register}
			error={!!errors.password}
			helperText={errors?.password?.message}
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
