import Image from "next/image";
import LoginImg from "./assets/images/LoginImg.png"
import Input from "./components/atoms/Input";
import { MdMailOutline as MailIcon } from "react-icons/md";
import { FaRegEyeSlash as EyeIcon, FaLinkedin as LinkedInIcon, FaFacebookSquare as FacebookIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import Typography from "./assets/fonts/Typograpgy";
import Button from "./components/atoms/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col md:flex-row ">
      <div className="w-1/2 relative bg-[var(--primary)] ">
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
        <form className="flex flex-col items-center justify-center">
          <Input
            label="Email"
            placeholder="Enter"
            icon={<MailIcon className="w-4 h-5 text-black" />}
            className="mb-4 w-full"
            inputWidth="w-full"
          />
          <Input
            label="Password"
            placeholder="Password"
            icon={<EyeIcon className="w-4 h-5 text-black" />}
            className="mb-4 w-full"
            inputWidth="w-full"
          />
          <Typography
            size="h5"
            lineheight="22px"
            weight={500}
            className="text-right cursor-pointer mb-4"
            style={{ color: 'var(--link)' }}
          >
            Forgot Password?
          </Typography>
          <Button
            text="Login"
            width="w-full"
            color={`bg-[var(--gray6)] text-[var(--gray3)]`}
            className="py-3 px-4 mb-6 font-medium"
          />
          <div className="text-center mb-6">
            <Typography
              size="h5"
              weight={500}
              lineheight="1.4"
            >
              Or Login Using
            </Typography>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center gap-[10px] bg-white border rounded-md p-[12px] min-w-[130px] justify-center">
              <GoogleIcon className="h-5 w-5" />
              <Button
                text="Google"
                width="w-auto"
                color="white text-black"
                className="font-medium"
              />
            </div>
            <div className="flex items-center gap-[10px] bg-white border p-[12px] rounded-md min-w-[130px] justify-center">
              <LinkedInIcon className="h-5 w-5" color={`var(--facebook)`} />
              <Button
                text="Linkedin"
                width="w-auto"
                color="white text-black"
                className="font-medium"
              />
            </div>
            <div className="flex items-center gap-[10px] bg-white border p-[12px] rounded-md min-w-[130px] justify-center">
              <FacebookIcon className="h-5 w-5" style={{ color: 'var(--primary)' }}  />
              <Button
                text="Facebook"
                width="w-auto"
                color="white text-black"
                className="font-medium"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <Typography size="h5" weight={500} className="text-base" style={{ display: 'inline' }}>
            Don’t have an account?{' '}
            </Typography>
            <Link href="/sign-up" className="text-[var(--link)] hover:underline font-medium">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
