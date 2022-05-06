import React from "react";
import Card from "../components/Card/Card";
import LabelAndInput from "../components/LabelAndInput";
import logo from "../assets/images/logo.png";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
      <Card className="flex flex-col gap-4 ">
        <img src={logo} />
        <div className="flex flex-col gap-2 my-4">
        <h3 className="font-medium text-gray-500">Welcome to T4 Analytics!</h3>
        <p className="font-normal sm:w-80 text-gray-400 text-sm">Please login to your account and jumpstart your digital transformation with breakthrough impact</p>
        </div>
        <LabelAndInput label="Username" type="text" />
        <LabelAndInput label="Password" type="password" />
        <Button title="Login" />
      </Card>
    </div>
  );
};

export default Login;
