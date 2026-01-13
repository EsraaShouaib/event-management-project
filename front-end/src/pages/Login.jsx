import { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignup
      ? "http://localhost:5000/signup"
      : "http://localhost:5000/login";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.text();
    alert(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">

        {/* Left Side - Info */}
        <div className="hidden md:flex flex-col justify-center p-10 text-white bg-gradient-to-br from-blue-700 to-purple-800">
          <h2 className="text-3xl font-bold mb-4">Welcome to EventHub 🎉</h2>
          <p className="text-sm opacity-90">
            Discover events, register easily, and manage your bookings in one place.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            {isSignup ? "Already have an account?" : "Don’t have an account?"}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 ml-2 font-semibold hover:underline"
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
