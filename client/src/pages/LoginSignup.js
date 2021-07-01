import React, { useState } from "react";
import { motion } from "framer-motion";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

function SignupLogin() {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="login-signup-container">
        {isSignup ? (
          <Signup toggleLogin={() => setIsSignup(false)} />
        ) : (
          <Login toggleSignup={() => setIsSignup(true)} />
        )}
      </div>
    </motion.div>
  );
}

export default SignupLogin;
