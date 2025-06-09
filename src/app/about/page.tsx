import React from 'react'
import Typography from '../assets/fonts/Typograpgy'
import Link from 'next/link'
import Button from '../components/atoms/Button'
import Image from 'next/image'
import LoginImg from "../assets/images/LoginImg.png"
import Input from '../components/atoms/Input'
import { FaChevronDown } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { GrLinkPrevious } from "react-icons/gr";


type Props = {}

const page = (props: Props) => {
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
                <form className="flex flex-col items-start justify-center w-[506px] max-w-[506px] p-5 ">

                    <div className="mb-[28px]">
                        <Link href="/" className="">
                            <div className="border rounded-[100px] border-[var(--gray5)] h-9 w-9 flex justify-center items-center mb-4 "><GrLinkPrevious /></div>
                        </Link>
                        <Typography size="title" weight={600} className="text-base" style={{ display: 'inline' }}>
                            Tell us more about yourself
                        </Typography>
                    </div>

                    <Input
                        label="Whats your Age ?"
                        placeholder="Age"
                        className="mb-4 w-full"
                        inputWidth="w-full"
                    />
                    <Input
                        label="Whats your Gender ?"
                        placeholder="Select"
                        icon={<FaChevronDown className="w-4 h-5 " />}
                        className="mb-4 w-full"
                        inputWidth="w-full"
                    />
                    <Input
                        label="Where are you located ?"
                        placeholder="Location"
                        icon={<IoLocationOutline className="w-4 h-5 text-black" />}
                        className="mb-4 w-full"
                        inputWidth="w-full"
                    />
                    <Input
                        label="Whats your Nationality?"
                        placeholder="Select"
                        icon={<FaChevronDown className="w-4 h-5 " />}
                        className="mb-[20px] w-full"
                        inputWidth="w-full"
                    />

                    <Button
                        text="Submit"
                        width="w-full"
                        color={`bg-[var(--gray6)] text-[var(--gray3)]`}
                        className="py-3 px-4 mb-6 font-medium"
                    />

                </form>
            </div>
        </div>
    )
}

export default page