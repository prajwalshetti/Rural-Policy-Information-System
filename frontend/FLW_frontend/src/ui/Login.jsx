/* eslint-disable react/prop-types */
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

export default function Login() {
	// eslint-disable-next-line no-unused-vars
	const [method, setMethod] = useState('Login');
	return <>{method == 'Login' ? <LoginForm /> : <SignUp />}</>;
}
