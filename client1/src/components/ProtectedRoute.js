import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../api/users";
function ProtectedRoute({children}) {
  // all the logic for validating the token 
  // redirection to login page
  const navigate = useNavigate();
  
  const getValidUser = async () => {
    try {
      const response = await GetCurrentUser();
      if(!response) navigate('/login');
    } catch(error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getValidUser();
    } else {
      navigate('/login');
    }
  }, [])

  return ( 
    <div>
      {children}
    </div>
  )
    
}
export default ProtectedRoute;
  
  // children