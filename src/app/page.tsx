'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginImg from "./assets/images/LoginImg.png";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";
import Typography from "./assets/fonts/Typograpgy";
import { MdMailOutline as MailIcon } from "react-icons/md";
import {
  FaRegEyeSlash as EyeIcon,
  FaLinkedin as LinkedInIcon,
  FaFacebookSquare as FacebookIcon,
} from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

  };


  const handleGoogleLogin = () => {
    console.log("Google login clicked");

  };

  const handleLinkedInLogin = () => {
    console.log("LinkedIn login clicked");

  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");

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


      <div className="w-full md:w-1/2 flex flex-col items-center justify-center m-auto px-4">

        <form
          className="flex flex-col items-center justify-center w-full max-w-md"
          onSubmit={handleSubmit}
        >
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
            label="Password"
            placeholder="Password"
            icon={<EyeIcon className="w-4 h-5 text-black" />}
            className="mb-4 w-full"
            inputWidth="w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Typography
            size="h5"
            lineheight="22px"
            weight={500}
            className="text-right cursor-pointer mb-4 w-full text-[var(--link)]"
          >
            Forgot Password?
          </Typography>

          <Button
            type="submit"
            text="Login"
            width="w-full"
            color="bg-[var(--gray6)] text-[var(--gray3)]"
            className="py-3 px-4 mb-6 font-medium"
          />

          <div className="text-center mb-6">
            <Typography size="h5" weight={500} lineheight="1.4">
              Or Login Using
            </Typography>
          </div>
        </form>


        <div className="flex flex-wrap justify-center gap-4 mb-4">


          <div
            className="flex items-center gap-[10px] bg-white border border-[var(--gray5)] rounded-md p-[12px] min-w-[130px] justify-center cursor-pointer"
            onClick={handleGoogleLogin}
          >
            <GoogleIcon className="h-5 w-5" />
            <Button
              type="button"
              text="Google"
              width="w-auto"
              color="white text-black"
              className="font-medium"
            />
          </div>


          <div
            className="flex items-center gap-[10px] bg-white border border-[var(--gray5)] rounded-md p-[12px] min-w-[130px] justify-center cursor-pointer"
            onClick={handleLinkedInLogin}
          >
            <LinkedInIcon className="h-5 w-5" color="var(--facebook)" />
            <Button
              type="button"
              text="Linkedin"
              width="w-auto"
              color="white text-black"
              className="font-medium"
            />
          </div>


          <div
            className="flex items-center gap-[10px] bg-white border border-[var(--gray5)] p-[12px] rounded-md min-w-[130px] justify-center cursor-pointer"
            onClick={handleFacebookLogin}
          >
            <FacebookIcon
              className="h-5 w-5"
              style={{ color: "var(--primary)" }}
            />
            <Button
              type="button"
              text="Facebook"
              width="w-auto"
              color="white text-black"
              className="font-medium"
            />
          </div>
        </div>


        <div className="text-center mt-6">
          <Typography
            size="h5"
            weight={500}
            className="text-base"
            style={{ display: "inline" }}
          >
            Don’t have an account?{" "}
          </Typography>
          <Link
            href="/sign-up"
            className="text-[var(--link)] hover:underline font-medium"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
