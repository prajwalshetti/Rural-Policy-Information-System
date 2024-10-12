import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './ui/Login';
import AppLayout from './ui/AppLayout';
import Applications from './ui/Applications';
import AddBenificiaryForm from './ui/AddBenificiaryForm';
import Policies from './ui/Policies';
import Policy from './ui/Policy';
import Homepage from './ui/Homepage';
import UserProvider from './UserContext';
import LandingPage from './ui/LandingPage';
import RaiseQuery from './ui/RaiseQuery';
import BulkPush from './ui/BulkPush';

export default function App() {
	return (
        <UserProvider>        
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
				<Route element={<AppLayout />}>
					<Route path="/dashboard" element={<Homepage />} />
					<Route path="/applicants" element={<Applications />} />
					<Route path="/ticket" element={<RaiseQuery />} />
					<Route path="/addBeneficiary" element={<AddBenificiaryForm />} />
					<Route path="/policies/user/:userid" element={<Policies />}></Route>
					<Route path="/policies/:policyid" element={<Policy />} />
					<Route path="/bulkUpload" element={<BulkPush />} />
				</Route>
			</Routes>
		</BrowserRouter>
        </UserProvider>
	);
}
