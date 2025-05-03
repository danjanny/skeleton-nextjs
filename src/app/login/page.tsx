"use client"

import React, { useEffect, useState } from 'react';
import TextField from '../../base/presentation/textfield';
import Button from '../../base/presentation/button';

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  useEffect(() => {
    setIsButtonEnabled(username.trim() !== "" && password.trim() !== "");
  }, [username, password])

  const handleLogin = () => {
    console.log(`${username}, ${password}`);
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-100 p-8">
      <div className="flex flex-col w-full max-w-[600px] bg-white p-6 rounded-lg shadow-md mx-auto">
        <h1 className="text-xl font-bold text-center">Sistem Informasi Penghubung Guru & Siswa</h1>
        <h1 className="text-lg font-normal text-center mb-6 mt-3">TK Alam An-nida</h1>
   
        {/* Username TextField */}
        <TextField
          title="Username"
          placeholder="Enter your username"
          onChange={(value) => setUsername(value)}
        />
  
        {/* Password TextField */}
        <TextField
          title="Password"
          placeholder="Enter your password"
          obscureText={true}
          onChange={(value) => setPassword(value)}
        />
  
        {/* Login Button */}
        <div className="mt-4">
          <Button
            enabled={isButtonEnabled}
            text="Login"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;