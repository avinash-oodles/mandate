'use client';

import Image from 'next/image';
import LoginImg from "../assets/images/LoginImg.png";
import React, { useState } from 'react';
import Input from '../components/atoms/Input';
import { MdMailOutline as MailIcon } from "react-icons/md";
import { FaRegEyeSlash as EyeIcon } from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import Typography from '../assets/fonts/Typograpgy';
import Button from '../components/atoms/Button';
import Link from 'next/link';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
  
      <div className="w-full md:w-1/2 relative bg-[var(--primary)]">
        <Image
          src={LoginImg}
          alt="Landing Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>


      <div className="w-full md:w-1/2 flex items-center justify-center m-auto">
        <form
          className="flex flex-col items-start justify-center max-w-[506px] w-full px-4"
          onSubmit={handleSubmit}
        >

          <div className="mb-[28px]">
            <Link href="/" className="">
              <div className="border rounded-[100px] border-[var(--gray5)] h-9 w-9 flex justify-center items-center mb-4">
                <GrLinkPrevious />
              </div>
            </Link>
            <Typography
              size="title"
              weight={600}
              className="text-base"
              style={{ display: 'inline' }}
            >
              Sign Up
            </Typography>
          </div>


          <div className="flex gap-[20px] w-full">
            <Input
              label="First Name"
              placeholder="First Name"
              className="mb-4 w-full"
              inputWidth="w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              label="Last Name"
              placeholder="Last Name"
              className="mb-4 w-full"
              inputWidth="w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>


          <Input
            label="Email"
            placeholder="Email"
            icon={<MailIcon className="w-4 h-5 text-black" />}
            className="mb-4 w-full"
            inputWidth="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Create Password"
            placeholder="Password"
            icon={<EyeIcon className="w-4 h-5 text-black" />}
            className="mb-4 w-full"
            inputWidth="w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirm Password"
            placeholder="Password"
            icon={<EyeIcon className="w-4 h-5 text-black" />}
            className="mb-[20px] w-full"
            inputWidth="w-full"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            type="submit" 
            text="Sign Up"
            width="w-full"
            color="bg-[var(--gray6)] text-[var(--gray3)]"
            className="py-3 px-4 mb-6 font-medium"
          />


          <div className="text-center mt-6 mx-auto">
            <Typography
              size="h5"
              weight={500}
              className="text-base"
              style={{ display: 'inline' }}
            >
              Already have an account?{' '}
            </Typography>
            <Link
              href="/"
              className="text-[var(--link)] hover:underline font-medium"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
