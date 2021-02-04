import React from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as formValidation from '../formValidation'

function SignUpForm() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(formValidation.signUpSchema)
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
				Sign Up
			</Typography>
			
			<TextField 
			label="Enter email" 
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
			label="Enter password" 
			fullWidth 
			margin="normal" 
			type="password"
			required 
			variant="outlined"
			name="password" 
			inputRef={register}
			required
			error={!!errors.password}
			helperText={errors?.password?.message} 
            />
			
			<TextField 
			label="Confirm the password" 
			fullWidth 
			margin="normal"
			type="password" 
			variant="outlined"
			name="passwordConfirm" 
			inputRef={register}
			required
			error={!!errors.passwordConfirm}
			helperText={errors?.passwordConfirm?.message} 
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
