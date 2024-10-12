import axios from 'axios';
import { useState } from 'react'; // Make sure this path is correct

export default function RaiseQuery() {
	const [form, setForm] = useState({
		heading: '',
		description: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Handle the form submission
		const data = { name: form.heading, description: form.description };
		console.log(data);
		const result = await axios.put('http://localhost:8080/api/query', data);
		console.log(result.data);
		// Reset the form
		setForm({ heading: '', description: '' });
	};

	return (
		<div className="main_cont">
			<div className="raise-query-container">
				<h1 className={'text-7xl font-bold'}>Raise Query</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="heading">Problem Name:</label>
						<input
							type="text"
							id="heading"
							name="heading"
							value={form.heading}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description:</label>
						<textarea
							id="description"
							name="description"
							value={form.description}
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit" className="raise-query-button">
						Raise Query
					</button>
				</form>
			</div>
		</div>
	);
}
