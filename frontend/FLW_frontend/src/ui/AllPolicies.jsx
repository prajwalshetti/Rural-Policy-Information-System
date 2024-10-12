/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

/* eslint-disable react/prop-types */

export default function Policies() {
	const [policies, setPolicies] = useState([]);
	useEffect(() => {
		async function getAllPolicies() {
			const result = await axios.get(
				'http://localhost:8080/api/policy/filter',
				[]
			);
			const data = result.data;
			setPolicies((policies) => (policies = [...data]));
		}

		getAllPolicies();
	}, [setPolicies]);

	return (
		<div className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-6">
			<div className="bg-gray-100 p-6">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-teko font-medium text-gray-800">
					Policies:
				</h1>
			</div>
			<div className="p-6">
				<div className="grid grid-cols-12 gap-4 items-center bg-gray-50 p-4 rounded-lg mb-4 font-semibold text-xl text-gray-700">
					<div className="col-span-5">Policy Name</div>
					<div className="col-span-4 text-center">Policy Type</div>
					<div className="col-span-3 text-center">Application Modes</div>
				</div>
				<div className="space-y-4">
					{policies &&
						policies.map((policy) => (
							<PolicyRow key={policy.id} policy={policy} />
						))}
				</div>
			</div>
		</div>
	);
}

function PolicyRow({ policy }) {
	const navigate = useNavigate();
	function handleClick() {
		navigate(`/policies/${policy._id}`);
	}
	return (
		<div
			onClick={handleClick}
			className="grid grid-cols-12 gap-4 items-center bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:bg-slate-100">
			<h2 className="col-span-5 font-sans text-2xl font-semibold text-gray-800">
				{policy.name}
			</h2>
			<p className="col-span-4 font-sans text-xl text-gray-700 text-center">
				{policy.policy_type}
			</p>
			<p className="col-span-3 font-sans text-xl text-gray-700 text-center">
				{'Online'}
			</p>
		</div>
	);
}
