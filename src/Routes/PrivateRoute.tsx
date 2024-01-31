import React, { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContextApi";
import { useNavigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

// created the type interface for children
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user }: any = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect((): void => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // if the user is  authenticated
  return <div>{user && children}</div>;
};

export default PrivateRoute;
