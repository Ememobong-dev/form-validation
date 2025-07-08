"use client";

import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export const Input = ({ inputType, inputlabel, inputImp }: { inputType: string; inputlabel: string; inputImp?: boolean }) => {
    const [openEye, setOpenEye] = useState(false);

    return (
        <>
            <p>
                {inputlabel}
                {inputImp && <span className="text-red-700">*</span>}
            </p>
            <div className="flex items-center w-full py-2 px-2 border text-sm">
                <input type={inputType === "password" && openEye ? "text" : inputType} className="focus:outline-0 " />
                {inputType === 'password' && (
                    <>
                        {openEye ? (
                            <IoMdEye className='cursor-pointer' onClick={() => setOpenEye(!openEye)} />

                        ) : (
                            <IoMdEyeOff className='cursor-pointer' onClick={() => setOpenEye(!openEye)} />
                        )

                        }


                    </>
                )
                }
            </div>


        </>
    )
}
