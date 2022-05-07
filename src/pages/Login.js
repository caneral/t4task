import React from "react";
import Card from "../components/Card/Card";
import LabelAndInput from "../components/LabelAndInput";
import logo from "../assets/images/logo.png";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { login } from "../services/jwt/jwtService";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const Login = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    login(data)
      .then((response) => {
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.data.token)
        );
        navigate("/");
      })
      .catch((error) => {
        const statusCode = error.response.status;
        const errMessage = error.response?.data?.errmsg;
        return MySwal.fire({
          icon: "error",
          title:
            statusCode === 401 ? (
              <p>Check your informations...</p>
            ) : (
              <p>Something went wrong!</p>
            ),
          text: errMessage,
        });
      });
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
      <Card className="flex flex-col gap-4 ">
        <img src={logo} />
        <div className="flex flex-col gap-2 my-4">
          <h3 className="font-medium text-gray-500">
            Welcome to T4 Analytics!
          </h3>
          <p className="font-normal sm:w-80 text-gray-400 text-sm">
            Please login to your account and jumpstart your digital
            transformation with breakthrough impact
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabelAndInput
            label="Username"
            type="text"
            hookform={{ ...register("username", { required: true }) }}
          />
          {errors.username && (
            <span className="text-red-600 text-sm">This field is required</span>
          )}
          <LabelAndInput
            label="Password"
            type="password"
            hookform={{ ...register("password", { required: true }) }}
          />
          {errors.password && (
            <span className="text-red-600 text-sm">This field is required</span>
          )}
          <Button title="Login" />
        </form>
      </Card>
    </div>
  );
};

export default Login;
