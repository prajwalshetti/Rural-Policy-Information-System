/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router';
import { UserContext } from '../UserContext';

export default function AddBeneficiaryForm() {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
    const { setBenificiaryId } = useContext(UserContext);

	function handleCancel(e) {
		e.preventDefault();
		navigate('/applicants');
	}

	async function onSubmit(data) {
		const {
			family_size: famSize,
			disability: disab,
			phoneNo: pno,
			marital_status: m_stat,
			income: incom,
		} = data;
		data = {
			...data,
			family_size: Number(famSize),
			disability: disab == 'yes',
			phoneNo: Number(pno),
			marital_status: m_stat == 'married',
			income: Number(incom),
		};
		console.log(data);
		const result = await axios.put(
			'http://localhost:8080/api/benificiary',
			data
		);

        setBenificiaryId(result.data._id);
		navigate(`/policies/user/${result.data._id}`);
	}

	return (
		<div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
				<form className="p-16 space-y-10" onSubmit={handleSubmit(onSubmit)}>
					<h2 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
						Add Beneficiary
					</h2>

					<div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
						<div>
							<label
								htmlFor="name"
								className="block text-xl font-medium text-gray-700 mb-3">
								Name
							</label>
							<input
								type="text"
								id="name"
								{...register('name', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl"
							/>
						</div>

						<div>
							<label
								htmlFor="gender"
								className="block text-xl font-medium text-gray-700 mb-3">
								Gender
							</label>
							<select
								id="gender"
								{...register('gender', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl">
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="Other">Prefer Not Say</option>
							</select>
						</div>

						<div>
							<label
								htmlFor="income"
								className="block text-xl font-medium text-gray-700 mb-3">
								Income
							</label>
							<input
								type="number"
								id="income"
								{...register('income', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl"
							/>
						</div>

						<div>
							<label
								htmlFor="reservation"
								className="block text-xl font-medium text-gray-700 mb-3">
								Reservation
							</label>
							<select
								id="reservation"
								{...register('reservation', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl">
								<option value="General">General</option>
								<option value="OBC">OBC</option>
								<option value="ST">ST</option>
								<option value="SC">SC</option>
							</select>
						</div>

						<div>
							<label
								htmlFor="disability"
								className="block text-xl font-medium text-gray-700 mb-3">
								Disability
							</label>
							<select
								id="disability"
								{...register('disability', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl">
								<option value="yes">Yes</option>
								<option value="no">No</option>
							</select>
						</div>

						<div>
							<label
								htmlFor="phoneNo"
								className="block text-xl font-medium text-gray-700 mb-3">
								Phone No
							</label>
							<input
								type="tel"
								id="phoneNo"
								{...register('phoneNo', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl"
							/>
						</div>

						<div>
							<label
								htmlFor="state"
								className="block text-xl font-medium text-gray-700 mb-3">
								State
							</label>
							<input
								type="text"
								id="state"
								{...register('state', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl"
							/>
						</div>

						<div>
							<label
								htmlFor="district"
								className="block text-xl font-medium text-gray-700 mb-3">
								District
							</label>
							<input
								type="text"
								id="district"
								{...register('district', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl"
							/>
						</div>

						<div>
							<label
								htmlFor="family_size"
								className="block text-xl font-medium text-gray-700 mb-3">
								Family Size
							</label>
							<input
								type="number"
								id="familySize"
								{...register('family_size', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl"
							/>
						</div>

						<div>
							<label
								htmlFor="marital_status"
								className="block text-xl font-medium text-gray-700 mb-3">
								Marital Status
							</label>
							<select
								id="maritalStatus"
								{...register('marital_status', { required: true })}
								className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-4 px-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl">
								<option value="married">Married</option>
								<option value="single">Single</option>
							</select>
						</div>
					</div>

					<div className="flex justify-between mt-16">
						<button
							type="button"
							onClick={handleCancel}
							className="inline-flex items-center px-10 py-5 border border-indigo-600 text-xl font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Cancel
						</button>
						<button
							type="submit"
							className="inline-flex items-center px-10 py-5 border border-transparent text-xl font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Create Beneficiary
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
