import { InputField } from "@/components";
import React from "react";
import Cookies from "js-cookie";
import style from "./style.module.css";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [value, setValue] = React.useState({
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
  });

  const [error, setError] = React.useState({
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
  });

  const handleError = (e: React.FormEvent<HTMLFormElement>) => {
    if (value.password.length > 12) {
      setError((prevValues) => ({
        ...prevValues,
        password: "password must be 12 characters",
      }));
      return true;
    }
    if (value.phoneNumber.length > 13) {
      setError((prevValues) => ({
        ...prevValues,

        phoneNumber: "password must be 13 characters",
      }));
      return true;
    }

    return false;
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ ...error, password: "", phoneNumber: "" });

    if (!handleError(e)) {
      Cookies.set("dataRegister", JSON.stringify(value));
      router.push("/");
      console.log(JSON.stringify(value));
      console.log("email: ", value.email);
      console.log("username: ", value.username);
      console.log("password: ", value.password);
      console.log("phoneNumber: ", value.phoneNumber);
    }
  };

  // console.log(error, "error");
  return (
    <div className={style["register"]}>
      <form
        action="submit"
        onSubmit={(e) => handleRegister(e)}
        className={style["form-register"]}
      >
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="input email"
          required
          onChange={(e) => setValue({ ...value, email: e.currentTarget.value })}
        />

        <InputField
          id="username"
          name="username"
          type="username"
          placeholder="input username"
          required
          onChange={(e) =>
            setValue({ ...value, username: e.currentTarget.value })
          }
        />
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="input password"
          errorMessage={error.password}
          required
          onChange={(e) =>
            setValue({ ...value, password: e.currentTarget.value })
          }
        />
        <InputField
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          placeholder="input Phone Number"
          required
          errorMessage={error.phoneNumber}
          onChange={(e) =>
            setValue({ ...value, phoneNumber: e.currentTarget.value })
          }
        />
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
