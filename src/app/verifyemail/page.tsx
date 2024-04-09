"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");

  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-white text-3xl font-bold">Verify Email</h1>
        <p className="mb-4 text-grey-300 text-xl font-medium">
          {token ? `${token}` : "No Token"}
        </p>

        {verified && (
          <div>
            <h2 className="text-2xl">Email verified</h2>
            <Link
              href="/login"
              className="mt-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>
          </div>
        )}

        {error && (
          <div>
            <h2 className="text-2xl bg-red-400 text-black">Error</h2>
          </div>
        )}
      </div>
    </section>
  );
}
