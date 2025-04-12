"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";

export default function Register() {
     const email = useRef("");
        const password = useRef("");
        const username = useRef("");
        function onEmailChange(e : React.ChangeEvent<HTMLInputElement>) {
                const value = e.target.value;
                email.current = value;
        }
        function onPasswordChange(e : React.ChangeEvent<HTMLInputElement>) {
                const value = e.target.value;
                password.current = value;
        }
        function onUsernameChange(e : React.ChangeEvent<HTMLInputElement>) {
                const value = e.target.value;
                username.current = value;
        }
        function handleSubmit() {
            console.log(email , password);
        }
    return (
      <div className="flex justify-center min-h-screen items-center overflow-hidden">
           <div className="relative  flex flex-col items-center max-w-md w-full h-full p-6 shadow-xl space-y-4">
                 <div className="space-y-2">
                       <Label htmlFor="username">Username</Label>
                       <Input id="username" type="text" onChange={onUsernameChange}/>
                </div>
                <div className="space-y-2">
                       <Label htmlFor="email">Email</Label>
                       <Input id="email" type="email" onChange={onEmailChange}/>
                </div>
                <div className="space-y-2">
                       <Label htmlFor="password">password</Label>
                       <Input id="password" type="password" onChange={onPasswordChange}/>
                </div>
                <Button onClick={handleSubmit}>Submit</Button>
           </div>
      </div>   
    )
}