/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export default function LoginForm({ setIsAdmin }) {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	function onSubmit(data) {
		console.log(data);
		const { isAdmin: isAdminTicked } = data;
		if (isAdminTicked) setIsAdmin(false);
		navigate('/dashboard');
	}

	return (
		<div className="w-[100vw] h-[100vh] flex items-center justify-center">
			<div className="w-[50vw] h-[50vh] shadow-xl flex items-center justify-center">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-10 w-[40%]">
					<label className="text-4xl font-bold">Email</label>
					<input
						value="demo123@gmail.com"
						type="email"
						{...register('email')}
						className="border-2 h-14"
					/>
					<label className="text-4xl font-bold">Password</label>
					<input
						value="passworddemo"
						type="password"
						{...register('password')}
						className="border-2 h-14"
					/>
					<div className="flex space-x-32">
						<button
							className="text-blue-400 w-[40%] h-16 border-2 border-blue-400 rounded-full"
							onClick={(e) => e.preventDefault()}>
							Signup
						</button>
						<button className="bg-blue-400 w-[40%] h-16 text-white rounded-full">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
