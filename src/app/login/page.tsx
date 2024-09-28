"use client"
import axios from "axios"

export default function LoginPage() {

    const onLogin = () => {
        axios.post("/api/login", {
            email: "XXXXXXXXXXXXX",
            password: "XXXX"
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

    }
    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>Login</h1>
            <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none  focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setuser({ ...user, email: e.target.value })}
        placeholder="Input your email"
      />
            </div>


    )

}