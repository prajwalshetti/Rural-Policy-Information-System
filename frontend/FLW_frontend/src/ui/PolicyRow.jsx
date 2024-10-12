import { useNavigate } from 'react-router';

/* eslint-disable react/prop-types */
export default function PolicyRow({ policy }) {
	const navigate = useNavigate();

	function handleClick() {
		navigate(`/policies/${policy._id}`);
	}

	return (
		<div className="w-[100%] bg-slate-100 flex mt-8">
			<div className=" h-[10vh] bg-slate-100 rounded-lg flex items-center font-semibold w-[90%] ">
				<h1 className="w-[40%] font-sans text-3xl text-center">
					{policy.name}
				</h1>
				<h1 className="w-[30%] font-sans text-3xl text-center">
					{policy.type}
				</h1>
				<h1 className="w-[30%] font-sans text-3xl text-center">
					{policy.application_type}
				</h1>
			</div>
			<div className="w-[10%] flex items-center justify-center">
				<button
					className="rounded-full w-[50%] h-[50%] bg-blue-400 text-4xl text-white"
					onClick={handleClick}>
					&rarr;
				</button>
			</div>
		</div>
	);
}
