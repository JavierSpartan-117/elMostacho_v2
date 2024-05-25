import { Outlet } from 'react-router-dom';
import LogInForm from '../../components/LogInForm';

const Login = () => {
    return (
        <div>
        <h1>Login</h1>
        <LogInForm />
        </div>
    );
}

export default Login;