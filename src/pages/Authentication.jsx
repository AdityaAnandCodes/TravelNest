import  { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true); // Track whether to show login or signup
  const formRef = useRef(null); // Reference to the form container
  const circlesRef = useRef([]); // Reference to store circles for animation

  // Toggle between login and signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    // GSAP animation for form container when switching between forms
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );

    // GSAP animation for moving circles
    circlesRef.current.forEach((circle, index) => {
      gsap.to(circle, {
        x: `+=${Math.random() * 500 - 250}`, // Random movement on the x-axis
        y: `+=${Math.random() * 500 - 250}`, // Random movement on the y-axis
        rotation: `+=${Math.random() * 360}`, // Random rotation for effect
        duration: 5 + Math.random() * 10, // Random duration for animation
        repeat: -1, // Repeat infinitely
        yoyo: true, // Make the animation reverse after reaching the end
        ease: "sine.inOut", // Smooth easing
        delay: Math.random() * 2, // Random delay to stagger animations
      });
    });
  }, [isLogin]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 relative overflow-hidden">
      {/* Circles Animation */}
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)} // Store each circle reference
          className="circle absolute w-24 h-24 bg-rose-400 rounded-full opacity-50"
          style={{
            top: `${Math.random() * 100}%`, // Random initial position
            left: `${Math.random() * 100}%`,
            filter: "blur(10px)",
          }}
        />
      ))}

      {/* Login/Signup Form */}
      <div className="flex justify-center items-center w-full h-full">
        <div
          ref={formRef}
          className="auth-box bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-sm w-full"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* Login or Signup form */}
          {isLogin ? (
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                Login
              </button>
            </form>
          ) : (
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Choose a username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                Sign Up
              </button>
            </form>
          )}

          {/* Toggle Button */}
          <div className="text-center mt-4">
            <button
              onClick={toggleForm}
              className="text-rose-500 hover:text-rose-700 text-sm"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
