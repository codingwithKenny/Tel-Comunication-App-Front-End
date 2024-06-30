import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useGetCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getCurrentUser = async () => {
    if (!token) {
      console.log("No token found");
      return;
    }

    try {
      const res = await axios.get("https://swiftpay-app-backend.onrender.com/checkAuth", {
        headers: { Authorization: "Bearer " + token },
      });

      setCurrentUser(res?.data);
    } catch (error) {
      console.error("Failed to fetch current user:", error);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      setCurrentUser(null);
      navigate("/auth");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return {
    currentUser,
    handleLogout,
  };
};