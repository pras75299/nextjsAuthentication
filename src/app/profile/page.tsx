"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      console.log("Signup Success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-white text-3xl font-bold">
          Welcome to Profile page
        </h1>
        <button
          onClick={logout}
          className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
