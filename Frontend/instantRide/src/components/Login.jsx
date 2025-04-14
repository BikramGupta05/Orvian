import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/ulogindata/login", userInfo)

      .then((res) => {
        if (res.data) {
          console.log(res.data);
          toast.success("Loggedin Successfully");
          
          setTimeout(() => {
            navigate("/"); 
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 30);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(()=>{},3000);
        }
      });
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="text-2xl font-bold text-center mb-4">Login</h3>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700">
              Login
            </button>
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
