import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Policy() {
	const { policyid } = useParams();
	const [policy, setPolicy] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
    const { benificiaryId } = useContext(UserContext);

	useEffect(() => {
		async function getPolicy() {
			try {
				setLoading(true);
				const result = await axios.get(
					'http://localhost:8080/api/policy/filter'
				);
				const pol = result.data.find((p) => p._id === policyid);
				if (pol) {
					setPolicy(pol);
				} else {
					setError('Policy not found');
				}
			} catch (error) {
				console.error('Error fetching policy:', error);
				setError('Error fetching policy. Please try again later.');
			} finally {
				setLoading(false);
			}
		}

		getPolicy();
	}, [policyid]);

	async function handleApply() {
		const result = await axios.put('http://localhost:8080/api/application', {
			benificiaryId: benificiaryId,
            policyId: policyid,
		});
        
        console.log(result);

        navigate('/applicants');
	}

	const DocumentCheckbox = ({ id, label, checked }) => (
		<div className="flex items-center">
			<label htmlFor={id} className="ml-6 text-3xl text-gray-700">
				{label}
			</label>
		</div>
	);

	if (loading) {
		return <div className="text-center text-3xl mt-20">Loading...</div>;
	}

	if (error) {
		return (
			<div className="text-center text-3xl mt-20 text-red-600">{error}</div>
		);
	}

	if (!policy) {
		return <div className="text-center text-3xl mt-20">No policy found</div>;
	}

	return (
		<div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
				<div className="p-20 space-y-12">
					<h1 className="text-6xl font-extrabold text-gray-900 mb-20 text-center">
						Policy Details
					</h1>

					<section>
						<h2 className="text-5xl font-bold text-gray-800 mb-6">
							Policy Name
						</h2>
						<p className="text-3xl text-gray-600">{policy.name}</p>
					</section>

					<section>
						<h2 className="text-5xl font-bold text-gray-800 mb-6">
							Policy Description
						</h2>
						<p className="text-3xl text-gray-600 leading-relaxed">
							{policy.description}
						</p>
					</section>

					<section>
						<h2 className="text-5xl font-bold text-gray-800 mb-8">
							Documents Required
						</h2>
						<div className="space-y-4">
							<DocumentCheckbox
								id="adhaar"
								label="Adhaar"
								checked={policy.adhaar_status}
							/>
							<DocumentCheckbox
								id="pan"
								label="Pan"
								checked={policy.pan_status}
							/>
							<DocumentCheckbox
								id="voterId"
								label="Voter Id"
								checked={policy.voterid_status}
							/>
							<DocumentCheckbox
								id="rentAgreement"
								label="Rent Agreement"
								checked={policy.rentagreement_status}
							/>
						</div>
					</section>

					<div className="flex justify-end mt-20">
						<button
							type="button"
							className="inline-flex items-center px-12 py-6 border border-transparent text-3xl font-medium rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleApply}>
							Apply for Policy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
