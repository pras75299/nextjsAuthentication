"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      //console.log("Signup Success", response.data);
      router.push("/login");
    } catch (error: any) {
      //console.log(error.message);
    }
  };

  const getUserData = async () => {
    const res = await axios.get("/api/users/me");
    //console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-white text-3xl font-bold">
          Welcome to Profile page
        </h1>
        <h2 className="mb-4 text-white text-3xl font-bold">
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/{data}`}>{data}</Link>
          )}
        </h2>
        <button
          onClick={getUserData}
          className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-3"
        >
          Get User Details
        </button>
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
