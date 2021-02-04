import * as yup from 'yup'

const requiredMessage = 'This field is required'
const emailNotValidMessage = 'Not a valid email'
const emailDoesNotExistMessage = 'Email does not exist'
const passwordsMatchMessage = 'Passwords must match'

export const signUpSchema = yup.object().shape({
    email: yup.string().required(requiredMessage).email(emailNotValidMessage),
    password: yup.string().required(requiredMessage).min(6),
    passwordConfirm: yup.string().required(requiredMessage).oneOf([yup.ref('password'), null], passwordsMatchMessage)
})

export const signInSchema = yup.object().shape({
    email: yup.string().required(requiredMessage).email(emailNotValidMessage),
    password: yup.string().required(requiredMessage)
})