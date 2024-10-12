import React, { useState } from 'react';
import MainNav from '../ui/MainNav';
import AppLayout from '../ui/AppLayout';

const AddPolicy = () => {
  const [formValues, setFormValues] = useState({
    aadhaar: 'false',
    panCard: 'false',
    rationCard: 'false',
  });

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [income, setIncome] = useState(10000);
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [reservation, setReservation] = useState("SC");
  const [aadhar, setAadhar] = useState(false);
  const [pan, setPan] = useState(false);
  const [ration, setRation] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/api/policy', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          income: income,
          description: desc,
          reservation: reservation,
          aadhar_status: aadhar,
          pan_status: pan,
          disability: disable
        })
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyle = { width: '100%' };  // Set the desired width here

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4">Add New Policy</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name of the policy:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">Description:</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="income" className="block text-gray-700 font-bold mb-2">Income:</label>
          <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="minAge" className="block text-gray-700 font-bold mb-2">Minimum Age:</label>
          <input type="number" value={minAge} onChange={(e) => setMinAge(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="maxAge" className="block text-gray-700 font-bold mb-2">Maximum Age:</label>
          <input type="number" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="reservation" className="block text-gray-700 font-bold mb-2">Reservation:</label>
          <select id="reservation" value={reservation} onChange={(e) => setReservation(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="aadhaar" className="block text-gray-700 font-bold mb-2">Aadhaar:</label>
          <select id="aadhaar" value={aadhar} onChange={(e) => setAadhar(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="panCard" className="block text-gray-700 font-bold mb-2">PAN Card:</label>
          <select id="panCard" value={pan} onChange={(e) => setPan(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="rationCard" className="block text-gray-700 font-bold mb-2">Ration Card:</label>
          <select id="rationCard" value={ration} onChange={(e) => setRation(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="disable" className="block text-gray-700 font-bold mb-2">Disability:</label>
          <select id="disable" value={disable} onChange={(e) => setDisable(e.target.value)} style={inputStyle} className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <button type="submit" style={inputStyle} className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
    </div>
  );
};

export default AddPolicy;
