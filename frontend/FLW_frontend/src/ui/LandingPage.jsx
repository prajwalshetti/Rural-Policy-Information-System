import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
	const navigate = useNavigate();

	const handleLogin = (role) => {
		if (role === 'FLW') {
			navigate('/login'); // Adjust this path as per your routing
		} else if (role === 'Admin') {
			navigate('http://localhost:3000'); // Adjust this path as per your routing
		}
	};

	return (
		<div
			className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
			style={{
				backgroundImage:
					'url(https://images.pexels.com/photos/6040170/pexels-photo-6040170.jpeg)',
			}}>
			<div className="bg-white bg-opacity-80 p-8 rounded-lg text-center shadow-lg">
				<h1 className="text-7xl font-bold mb-4">INDUS SEHYOG</h1>
				<p className="text-2xl mb-6">
					Empowering communities through access to government schemes
				</p>
				<div className="space-y-4">
					<div>
						<p className="text-xl mb-2">Login as:</p>
					</div>
					<div className="flex space-x-28 justify-center">
						<button
							className="bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-800 transition duration-300"
							onClick={() => handleLogin('FLW')}>
							User
						</button>
						<a href="http://localhost:3000">
							<button className="bg-white text-purple-600 border border-purple-600 py-3 px-6 rounded-full hover:bg-purple-100 transition duration-300">
								Admin
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
