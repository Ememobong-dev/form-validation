import React from 'react'
import { IoMdEyeOff } from "react-icons/io";

export const Input = ({ inputType, inputlabel, inputImp }: { inputType: string; inputlabel: string; inputImp?: boolean }) => {
    return (
        <>
            <p>
                {inputlabel}
                {inputImp && <span className="text-red-700">*</span>}
            </p>
            <div className="flex w-full py-2 px-2 border text-sm">
                <input type={inputType} className="focus:outline-0 " />
                {inputType === 'password' && (
                    <>
                        <IoMdEyeOff />

                    </>
                )
                }
            </div>


        </>
    )
}
