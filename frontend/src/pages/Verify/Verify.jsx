import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        params: { success, orderId },
      });
  
      console.log("Verify response:", response.data); 
  
      if (response.data.success) {
        setTimeout(() => {
          navigate("/myorders");
        }); 
      }
       else {
        console.log("Payment failed. Redirecting to homepage...");
        navigate("/");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      navigate("/");
    }
  };
  
  useEffect(() => {
    if (success && orderId) {
      console.log("Triggering verification...");
      verifyPayment();
    } else {
      console.log("Invalid query parameters. Redirecting to homepage...");
      navigate("/");
    }
  }, []); 
  

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
