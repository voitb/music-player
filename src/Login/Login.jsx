import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import ConfirmButton from "./ConfirmButton/ConfirmButton";
import Input from "./Input/Input";
import "./Login.scss";
import PlayerLoader from "../Loader/PlayerLoader";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [hide, setHide] = useState(false);

  const history = useHistory();

  const checkPassword = (login, password) => {
    setLoader(true);
    if (login === "1234" && password === "1234") {
      setTimeout(() => {
        setHide(true);
        setTimeout(() => {
          history.push("/home");
          setLoader(false);
        }, 300);
      }, 2000);
    } else {
      setTimeout(() => {
        setError(true);
        setLoader(false);
      }, 3000);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("do validate");
    }
  };

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="full-height-wrapper"
        >
          <div className="login-wrapper">
            <div className="login-center">
              <div className="wrapper">
                <Input
                  type="text"
                  setInput={setLogin}
                  placeholder="user name"
                ></Input>
              </div>
              <div className="wrapper">
                <Input
                  type="password"
                  setInput={setPassword}
                  placeholder="password"
                ></Input>
              </div>
              <AnimatePresence>
                {error && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, height: 20 }}
                    animate={{ opacity: 1, height: 60 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, height: 20 }}
                    className="invalid"
                  >
                    Invalid login or password
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="wrapper">
                <ConfirmButton onClick={() => checkPassword(login, password)}>
                  Log in
                </ConfirmButton>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {loader && (
              <motion.div
                initial={{ opacity: 0, height: 20 }}
                animate={{ opacity: 1, height: 60 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, height: 20 }}
              >
                <PlayerLoader />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login;
