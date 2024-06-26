"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import * as React from "react";

import toast from "react-hot-toast";
interface UserData {
  _id: string;
  username: string;
  email: string;
  // Include other properties as needed
}

export default function Home() {
  const [data, setData] = useState<UserData | null>(null);

  const getUserData = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data.data);
      setData(res.data.data); // Expecting this to be an object
    } catch (error: any) {
      console.error("Failed to fetch user data", error);
      toast.error(error);
      // Handle error (e.g., show toast notification with error message)
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {/* dark mode implemented */}

      {/* end dark mode implementation */}
      <main className="flex flex-col items-center justify-between p-24">
        {data ? (
          <>
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="mb-4 text-white text-3xl font-bold">
                  Username: <span className="bg-red-400">{data.username}</span>
                </h1>
                <h1 className="mb-0 text-white text-3xl font-bold">
                  Email: <span className="bg-red-400">{data.email}</span>
                </h1>
              </div>
            </section>
            {/* Link to the user's profile, assuming `data._id` exists */}
            <Button variant="secondary">
              <Link href={`/profile/${data._id}`}>Go to Profile</Link>
            </Button>
          </>
        ) : (
          <Button variant="outline" size="lg">
            <Link href="/signup">Signup</Link>
          </Button>
        )}
      </main>
    </>
  );
}
