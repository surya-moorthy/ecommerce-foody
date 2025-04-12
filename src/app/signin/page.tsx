"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useRef } from "react";

export default function Signin() {
    const email = useRef("");
    const password = useRef("");
    function onEmailChange(e : React.ChangeEvent<HTMLInputElement>) {
            const value = e.target.value;
            email.current = value;
    }
    function onPasswordChange(e : React.ChangeEvent<HTMLInputElement>) {
            const value = e.target.value;
            password.current = value;
    }
    function handleSubmit() {
        console.log(email , password);
    }
    

    
    return (
        <div className="flex justify-center items-center h-screen">
              <div className="relative flex flex-col justify-center items-center max-h-94 max-w-lg p-10 shadow-2xl space-y-4"> 
              
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="text" onChange={onEmailChange}/>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" onChange={onPasswordChange}/>
                    </div>
                    <Button onClick={handleSubmit}>Submit</Button>
        </div>
        </div>
    )
} 