  
// Here goes the schema for the form
import * as yup from 'yup';

const userSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username required')
        .min(5, 'Username has to be 5 characters long'),
    email: yup
        .string()
        .trim()
        .email('Valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password required')
        .min(5, 'Password has to be 5 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'Please accept the Terms of Service')
})

export default userSchema