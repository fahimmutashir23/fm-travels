import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import Spinner from '../Components/Spinner/Spinner';
import Swal from 'sweetalert2';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }

    if(user){
        return children
    } else{
        return Swal.fire({
            title: "You are not Logged in",
            text: "Please Login first to use this service",
            icon: "warning",
            confirmButtonText: "Cool",
          }) && <Navigate state={location.pathname} to="/login"></Navigate>
    }
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;