"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const router = useRouter();
    useEffect(() => {
      if (user.email.length > 0 && user.password.length > 0) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }, [user])
    axios
      .post("/api/login", {
        email: "",
        password: "",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>Login</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none  focus:border-gray-600 text-black"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setuser({ ...user, email: e.target.value })}
        placeholder="Input your email"
      />

<input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none  focus:border-gray-600 text-black"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setuser({ ...user, password: e.target.value })}
        placeholder="Set your passowrd"
      />
      <button
        className="p-2 border-gray-300  rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={onLogin}
      >
        Login
      </button>
      <Link href="/signup">Register</Link>
    </div>
  );
}
