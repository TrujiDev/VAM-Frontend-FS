import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import ConfirmAccount from './pages/ConfirmAccount';
import ForgotPassword from './pages/ForgotPassword ';
import Register from './pages/Register';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<AuthLayout />}
				>
					<Route
						index
						element={<Login />}
					/>
					<Route
						path='registrarse'
						element={<Register />}
					/>
					<Route
						path='confirmar/:id'
						element={<ConfirmAccount />}
					/>
					<Route
						path='recuperar-contrasenia'
						element={<ForgotPassword />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
