import React, { useContext } from "react";
import { auth, googleProvider, githubProvider } from "../services/firebase.js";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "../context/UserContext.jsx";
import { FiArrowLeft, FiLogIn, FiLogOut } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const { user, login, logout, loading } = useAuth();
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const userData = await signInWithPopup(auth, googleProvider);
      login(userData.user);
      navigate("/");
      toast.success("Login successful");
    } catch (error) {
      toast.error("Google login failed. Please try again.");
    }
  };

  const loginWithGithub = async () => {
    try {
      const userData = await signInWithPopup(auth, githubProvider);
      login(userData.user);
      navigate("/");
    } catch (error) {
      toast.error("GitHub login failed. Please try again.");
    }
  };

  const randomSeed = user?.name + Math.floor(Math.random() * 10000);
  const avatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${randomSeed}`;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      <Link
        className="absolute top-6 left-6 text-amber-700 hover:text-amber-800 transition-colors duration-200 flex items-center gap-2 z-10"
        to={user ? "/home" : "/"}
      >
        <FiArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </Link>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100">
        <div className="p-8">
          {!user ? (
            <>
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <FiLogIn className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-600">
                  Sign in to access your resume analysis
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={loginWithGoogle}
                  className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  <FcGoogle className="w-5 h-5" />
                  Continue with Google
                </button>

                <button
                  onClick={loginWithGithub}
                  className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 text-white font-medium py-3 px-4 rounded-lg shadow-sm"
                >
                  <FaGithub className="w-5 h-5" />
                  Continue with GitHub
                </button>
              </div>

              <div className="mt-6 text-center text-xs text-gray-500">
                By continuing, you agree to our Terms of Service and Privacy
                Policy.
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full border-4 border-amber-100"
                />
                <div className="absolute -bottom-2 -right-2 bg-amber-500 rounded-full p-1">
                  <div className="bg-amber-400 rounded-full p-1"></div>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-1">
                Welcome, {user.displayName?.split(" ")[0]}
              </h2>
              <p className="text-gray-600 mb-6">{user.name}</p>

              <button
                onClick={logout}
                className="w-full flex items-center justify-center hover:cursor-pointer gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200"
              >
                <FiLogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
