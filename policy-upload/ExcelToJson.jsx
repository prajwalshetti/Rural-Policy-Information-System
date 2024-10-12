import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelToJson = () => {
  const [jsonData, setJsonData] = useState([]);

  const setJsonDatatoServer = async (Data) => {
    for (const item of Data) {
      const response = await fetch('http://localhost:8080/api/policy', {
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
    const file = event.target.files[0];
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
    <div>
      <h1>Upload Excel and Convert to JSON</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default ExcelToJson;
