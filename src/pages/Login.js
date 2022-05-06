import React from "react";
import Card from "../components/Card/Card";
import LabelAndInput from "../components/LabelAndInput";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
      <Card className="flex flex-col gap-4">
        <LabelAndInput label="Username" type="text" />
        <LabelAndInput label="Password" type="password" />
      </Card>
    </div>
  );
};

export default Login;
