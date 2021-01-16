import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ConfirmButton from "./ConfirmButton/ConfirmButton";
import Input from "./Input/Input";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const checkPassword = (login, password) => {
    console.log("click");
    console.log(login, password);
    if (login === "1234" && password === "1234") {
      setTimeout(() => {
        history.push("/player");
      }, 3000);
    }
  };

  return (
    <div>
      <Input type="text" setInput={setLogin}></Input>
      <Input type="password" setInput={setPassword}></Input>
      <ConfirmButton onClick={() => checkPassword(login, password)}>
        Login
      </ConfirmButton>
    </div>
  );
};

export default Login;
