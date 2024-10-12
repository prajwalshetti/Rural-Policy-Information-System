import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Checkbox, Typography, Select, MenuItem
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const statusColors = {
  Resolved: 'success',
  Open: 'warning',
};

const QueryTable = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    // Fetch queries from the server when the component mounts
    const fetchQueries = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/query');
        setQueries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchQueries();
  }, []);

  const handleStatusChange = (index, event) => {
    const newStatus = event.target.value;
    const updatedQueries = [...queries];
    updatedQueries[index].status = newStatus;
    setQueries(updatedQueries);

    // Optionally, you can send the updated status to the server here
    // axios.put(`http://localhost:8080/api/query/${updatedQueries[index].id}`, { status: newStatus })
    //   .then(response => {
    //     console.log('Status updated:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error updating status:', error);
    //   });
  };

  return (
    <TableContainer component={Paper} style={{ margin: '20px' }}>
      <Typography variant="h6" gutterBottom component="div" style={{ padding: '16px', fontSize: '1.8rem' }}>
        Queries
      </Typography>
      <Table aria-label="query table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>User</TableCell>
            <TableCell style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Query reason</TableCell>
            <TableCell style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {queries.map((query, index) => (
            <TableRow key={index} hover style={{ cursor: 'pointer' }}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell style={{ fontSize: '1.7rem' }}>{query.name}</TableCell>
              <TableCell style={{ fontSize: '1.7rem' }}>{query.description}</TableCell>
              <TableCell>
                <Select
                  value={query.status}
                  onChange={(event) => handleStatusChange(index, event)}
                  label="Status"
                  style={{ width: '300px' }}  // Adjust the width as needed
                  inputProps={{
                    name: 'status',
                    id: `status-select-${index}`,
                  }}
                >
                  <MenuItem value="" disabled>
                    {query.status}
                  </MenuItem>
                  <MenuItem value={"Completed"}>Completed</MenuItem>
                  <MenuItem value={"Partially Completed"}>Partially Completed</MenuItem>
                  <MenuItem value={"Incomplete"}>Incomplete</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QueryTable;
