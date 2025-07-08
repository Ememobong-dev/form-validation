import React from 'react'

export const Input = ({ inputType, inputlabel }: { inputType: string; inputlabel: string }) => {
    return (
        <>
            <p>{inputlabel} <span className="text-red-700">*</span></p>
            <input type={inputType} className="w-full py-2 px-2 border text-sm focus:outline-blue-950 " />

        </>
    )
}
