# Full-Stack Express Application

This project is a full-stack application built with Express.js for the backend and React for the frontend. It manages users, queries, policies, beneficiaries, applications, and SMS notifications using Twilio.

## Features

- **User Management**
  - Create and fetch users.
  
- **Query Management**
  - Create, fetch, and update queries.
  
- **Policy Management**
  - Create, fetch, filter, and check eligibility for policies.
  
- **Beneficiary Management**
  - Create and fetch beneficiaries.
  
- **Application Management**
  - Create applications linked to beneficiaries and policies.
  - Update the status of applications and send SMS notifications upon status change.

## Technologies Used

- **Frontend**: React, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)
- **SMS Service**: Twilio

## API Endpoints
**User Management
Create a User**
POST /api/users
Get All Users
GET /api/users
**Query Management**
**Create a Query**
PUT /api/query
Get All Queries
GET /api/query
Update Query Status
PUT /api/query/edit
**Policy Management
Create a Policy**
PUT /api/policy
Get a Policy by ID
GET /api/policy
Get All Policies
GET /api/policy/all
**Get Eligible Policies**
GET /api/policy/eligible
**Update Policy**
POST /api/policy/update
**Filter Policies**
GET /api/policy/filter
**Beneficiary Management
Create a Beneficiary**
PUT /api/benificiary
**Get List of Beneficiaries**
GET /api/benificiary
**Application Management
Create an Application**
PUT /api/application
**Update Application Status**
POST /api/application/update-status/:id
**SMS Notifications
Send SMS**
GET /api/message/send-sms
