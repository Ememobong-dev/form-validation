import { Input } from "@/components/Input";

export default function Home() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-xl">
      <h1 className="text-blue-950 font-bold text-2xl mb-4">Form Validation</h1>
      <form action="">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-3 w-full">
            <div className="w-1/2">
              <Input inputImp inputlabel="Name" inputType="text" />
            </div>
            <div className="w-1/2">
              <Input inputImp inputlabel="Email" inputType="text" />
            </div>
          </div>
          <div>
            <Input inputlabel="Phone Number" inputType="text" />
          </div>
          <div className="flex gap-3 w-full">
            <div className="w-1/2">
              <Input inputImp inputType="password" inputlabel="Password" />
            </div>
            <div className="w-1/2">
              <Input inputImp inputType="password" inputlabel="Confirm Password" />
            </div>
          </div>
          <div>
            <p>Message</p>
            <textarea className="border text-sm w-full" name="" id="" rows={3}></textarea>
          </div>
        </div>
        <button className="bg-purple-300 px-8 cursor-pointer rounded-md py-2 text-blue-950 mt-4 font-bold">Submit</button>
      </form>



    </div>
  );
}
