import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /**
   * Updates the formData state with the new value of the input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event triggered by input fields.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await registerUser(formData);
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl 
      ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10"
    >
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Register</h1>
          <p className="mt-2 text-gray-500">
            Sign up below to create an account
          </p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="relative mt-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 
                placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                autoComplete="NA"
                value={formData.name}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute top-0 left-0 origin-left 
            -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all
             duration-100 ease-in-out peer-placeholder-shown:top-1/2 
             peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
             peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Your Name
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 
            placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                autoComplete="NA"
                value={formData.email}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left 
            -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all
             duration-100 ease-in-out peer-placeholder-shown:top-1/2 
             peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
             peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1
             placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={formData.password}
                onChange={handleChange}
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left 
                -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all
                 duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                  peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Confirm Password"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1
             placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={formData.password_confirmation}
                onChange={handleChange}
              />
              <label
                htmlFor="password_confirmation"
                className="pointer-events-none absolute top-0 left-0 origin-left 
                -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all
                 duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                  peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Confirm Password
              </label>
            </div>
            <div className="my-6">
              <button
                type="submit"
                className={`w-full rounded-md px-3 py-4 text-white ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black focus:bg-gray-600"
                } focus:outline-none`}
                disabled={loading}
              >
                {loading ? "Registering..." : "Sign Up"}
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Don't have an account yet? {""}
              <NavLink
                to="/login"
                className="font-semibold text-gray-600 hover:underline 
            focus:text-gray-800 focus:outline-none"
              >
                Sign in
              </NavLink>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
