import React from "react";
import { InputField } from "@/components";
import style from "./style.module.css"

const Login = () => {
    const [value, setValue] = React.useState({
        username: "",
        password: ""
    });

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        console.log("username",value.username)
        console.log("password", value.password)
    }

  return (
    <div className={style["login"]}>
      <form action="submit" onSubmit={(e) => handleLogin(e)} className={style["form-login"]}>
        <InputField
          id="username"
          name="username"
          type="text"
          placeholder="input username"
          required
          onChange={(e) => setValue({...value, username: e.currentTarget.value})}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="input password"
          required
          onChange={(e) => setValue({...value, password: e.currentTarget.value})}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
