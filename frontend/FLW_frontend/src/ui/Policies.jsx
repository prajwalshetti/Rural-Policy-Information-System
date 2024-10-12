/* eslint-disable no-unused-vars */
import { useParams } from 'react-router';
import PolicyRow from './PolicyRow';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Policies() {
	const params = useParams();
	const [policies, setPolicies] = useState([]);

	useEffect(() => {
		async function queryPolicies() {
			const user_id = params.userid;
			const result = await axios.get(`http://localhost:8080/api/benificiary`);

			const beneficiary = result.data.filter((user) => user._id == user_id);
			const res = await axios.get(
				'http://localhost:8080/api/policy/filter',
				beneficiary
			);
			setPolicies((policies) => (policies = [...res.data]));
		}

		queryPolicies();
	}, [params.userid]);

	return (
		<div className="w-[100%]">
			<div className="flex justify-between items-center">
				<h1 className="text-8xl font-teko font-medium">Policies:</h1>
			</div>
			<div className="flex text-center w-[90%] mt-10">
				<div className={'w-[40%]'}>Policy Name</div>
				<div className={'w-[30%]'}>Policy Type</div>
				<div className={'w-[30%]'}>Application Modes</div>
			</div>
			{policies.map((policy) => (
				<PolicyRow policy={policy} key={policy._id} />
			))}
		</div>
	);
}
