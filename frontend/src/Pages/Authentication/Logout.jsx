import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { userLogout } from "../../redux/auth/auth.actions";

export default function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(userLogout());
        setTimeout(()=> {
            navigate('/');
        },2000)
    }, [])
    
    return (
        <h1>Logout Successful</h1>
    )
};
