import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import AddPolicy from './pages/addpolicy';
import Login from './ui/Login';
import Home from './pages/Home';
import Manage from './pages/Manage';
import Bulk from './pages/Bulk';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
	  <Route path="/" element={<Login />} />
        <Route element={<AppLayout />} >
			<Route path="/home" element={<Home />} />
        	<Route path="/add-policy" element={<AddPolicy />} />
			<Route path="/manage" element={<Manage />} />
      <Route path="/bulk-policy" element={<Bulk />} />
		</Route>
      </Routes>
    </BrowserRouter>
  );
}
