import { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelToJson = () => {
	const [jsonData, setJsonData] = useState([]);

	const setJsonDatatoServer = async (Data) => {
		for (const item of Data) {
			const response = await fetch('http://localhost:8080/api/benificiary', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(item),
			});
			// Handle the response if needed
		}
	};

	const handleFileUpload = (event) => {
		const file = document.getElementById('xlsfile').files[0];
		if (!file) return;

		const reader = new FileReader();

		reader.onload = async (e) => {
			// Read the file as binary string
			const data = new Uint8Array(e.target.result);
			const workbook = XLSX.read(data, { type: 'array' });

			// Get the first sheet
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];

			// Convert sheet to JSON
			const json = XLSX.utils.sheet_to_json(worksheet);
			setJsonData(json);
			await setJsonDatatoServer(json);
		};
		reader.readAsArrayBuffer(file);
	};

	return (
		<div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen space-y-4">
			<h1 className="text-5xl font-bold mb-4 text-center">
				Bulk Beneficiaries Upload
			</h1>
			<input
				type="file"
				accept=".xlsx, .xls"
				id="xlsfile"
				className="mb-4 p-2 border border-gray-300 rounded shadow-sm"
			/>
			<button
				onClick={handleFileUpload}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
				Submit
			</button>
		</div>
	);
};

export default ExcelToJson;
