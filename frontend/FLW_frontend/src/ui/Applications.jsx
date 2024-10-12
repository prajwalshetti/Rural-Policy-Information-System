/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import ApplicantRow from './ApplicantRow';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Applications() {
	const [applicants, setApplicants] = useState([]);

	useEffect(() => {
		async function getBeneficiaries() {
			const result = await axios.get('http://localhost:8080/api/benificiary');
			const data = result.data;
			setApplicants((applicants) => (applicants = [...data]));
		}

		getBeneficiaries();
	});

	const navigate = useNavigate();
	return (
		<div className="w-[100%]">
			<div className="flex justify-between items-center">
				<h1 className="text-8xl font-teko font-medium">Beneficiaries:</h1>
				<button
					className="bg-blue-400 text-white font-sans font-bold h-[6vh] w-[13vw] rounded-full"
					onClick={() => navigate('/addBeneficiary')}>
					+ Add new Beneficiary
				</button>
			</div>
			<div className="flex text-center w-[100%] mt-10">
				<div className={'w-[40%] text-left pl-4'}>Beneficiary&apos;s Name</div>
				<div className={'w-[30%] pl-7'}>District</div>
				<div className={'w-[30%]'}>No. of Applications</div>
			</div>
			{applicants.map((applicant) => (
				<ApplicantRow applicant={applicant} key={applicant._id} />
			))}
		</div>
	);
}
