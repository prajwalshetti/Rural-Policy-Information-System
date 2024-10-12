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
    const file = document.getElementById("xlsfile").files[0];
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
    <div className='flex flex-col'>
      <h1 className='text-5xl'>Bulk policy upload</h1>
      <input type="file" accept=".xlsx, .xls" id="xlsfile" className='p-10 pl-1'/>
      <button onClick={handleFileUpload} className='border border-blue-500 rounded-xl p-1 hover:bg-blue-500 hover:text-white w-28 ml-5'>Submit</button>
    </div>
  );
};

export default ExcelToJson;
