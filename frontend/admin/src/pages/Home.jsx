import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [policies, setPolicies] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    income: 0,
    reservation: 'SC',
    family_size: 0,
    marital_status: false,
    disability: false,
    aadhar_status: false,
    pan_status: false,
    voterid_status: false,
    rentagreement_status: false,
    enabled: true,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentPolicyId, setCurrentPolicyId] = useState(null);

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/policy/filter');
      setPolicies(response.data);
    } catch (error) {
      console.error('Error fetching policies:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditing) {
        await axios.post('http://localhost:8080/api/policy/update', {
          policyId: currentPolicyId,
          ...formValues,
        });
      } else {
        await axios.put('http://localhost:8080/api/policy', formValues);
      }
      fetchPolicies();
      resetForm();
    } catch (error) {
      console.error('Error saving policy:', error);
    }
  };

  const handleEdit = (policy) => {
    setFormValues(policy);
    setIsEditing(true);
    setCurrentPolicyId(policy._id);
  };

  const handleDelete = async (policy) => {
    try {
      const updatedPolicy = { ...policy, enabled: false };
      await axios.post('http://localhost:8080/api/policy/update', {
        policyId: policy._id,
        ...updatedPolicy
      });
      fetchPolicies();
    } catch (error) {
      console.error('Error deleting policy:', error);
    }
  };

  const resetForm = () => {
    setFormValues({
      name: '',
      description: '',
      income: 0,
      reservation: 'SC',
      family_size: 0,
      marital_status: false,
      disability: false,
      aadhar_status: false,
      pan_status: false,
      voterid_status: false,
      rentagreement_status: false,
      enabled: true,
    });
    setIsEditing(false);
    setCurrentPolicyId(null);
  };

  return (
    <div>
      <h1 className='text-5xl'>Policy Management</h1>
      <div className='p-3'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="description" value={formValues.description} onChange={handleChange} placeholder="Description" required />
        <input type="number" name="income" value={formValues.income} onChange={handleChange} placeholder="Income" required />
        <select name="reservation" value={formValues.reservation} onChange={handleChange}>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="OBC">OBC</option>
          <option value="General">General</option>
        </select>
        {/* Add other form fields similarly */}
        <button type="submit" className='border border-blue-500 rounded-xl p-2 hover:bg-blue-500 hover:text-white'>{'Update'} Policy</button>
      </form>
      </div>

      <h2 className="text-xl font-bold mb-2">Policies</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {/* <th className="py-2 px-4 border-b">Policy ID</th> */}
            <th className="py-2 px-4 border-b">Policy Name</th>
            <th className="py-2 px-4 border-b">Policy Description</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((policy) => (
            <tr key={policy._id}>
              {/* <td className="py-2 px-4 border-b text-center">{policy._id}</td> */}
              <td className="py-2 px-4 border-b text-center">{policy.name}</td>
              <td className="py-2 px-4 border-b text-center">{policy.description}</td>
              <td className="py-2 px-4 border-b text-center">
                <button
                  onClick={() => handleEdit(policy)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(policy)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;