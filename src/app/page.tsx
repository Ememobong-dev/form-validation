"use client"

import { Input } from "@/components/Input";
import {  useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    message: ""
  })


  const handleInputChange = (val: string, name: string) => {
    // const { name, value } = e.target
  
    setFormData(prev => ({
      ...prev,
      [name]: val
    })
    )
  }

  console.log(formData, "Formdata value")

  
  return (
    <div className="bg-white p-4 rounded-lg shadow-xl">
      <h1 className="text-blue-950 font-bold text-2xl mb-4">Form Validation</h1>
      <form action="">
       
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-3 w-full">
            <div className="w-1/2">
              <Input inputVal={formData.name}  handleInputChange={(val) => handleInputChange(val, 'name')} inputImp inputlabel="Name" inputType="text" />
            </div>
           
          </div>
          
         
          <div>
            <p>Message</p>
            <textarea value={formData.message} className="border text-sm w-full" name="" id="" rows={3}></textarea>
          </div>
        </div>
        <button className="bg-purple-300 px-8 cursor-pointer rounded-md py-2 text-blue-950 mt-4 font-bold">Submit</button>
      </form>



    </div>
  );
}
