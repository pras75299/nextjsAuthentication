"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface UserData {
  _id: string;
  username: string;
  email: string;
  // Include other properties as needed
}

export default function Home() {
  const { setTheme } = useTheme();
  const [data, setData] = useState<UserData | null>(null);

  const getUserData = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data.data);
      setData(res.data.data); // Expecting this to be an object
    } catch (error) {
      console.error("Failed to fetch user data", error);
      // Handle error (e.g., show toast notification with error message)
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* dark mode implemented */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* end dark mode implementation */}
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
  );
}
