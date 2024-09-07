import { GitHub, LinkedIn, Twitter, Whatsapp } from "@/assets/icons";
import React, { InputHTMLAttributes } from "react";

const Contact = () => {
  return (
    <footer>
      <form className="p-4 mx-[30px] rounded-lg max-w-[800px] md:mx-auto my-[10rem] space-y-7 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px]">
        <div className="flex flex-wrap gap-7 justify-between">
          <Input type="text" placeholder="name" />
          <Input type="email" placeholder="email" />
        </div>
        <Input type="text" className="w-full" placeholder="subject" />
        <textarea
          className="block w-full h-[150px] rounded-md px-4 py-2 resize-none"
          placeholder="message"
        ></textarea>
        <div className="flex justify-end">
          <button className=" px-4 py-2 rounded-md bg-blue-800 text-white">
            send
          </button>
        </div>
      </form>
      {/* socials */}
      <div className="flex justify-center pb-5 items-center gap-4">
        <Twitter />
        <LinkedIn />
        <GitHub />
        <Whatsapp />
      </div>
      {/* attributes */}
      <div className="py-3 text-white border-t text-center border-[rgba(255,255,255,0.1)]">
        &copy; 2021 creatcedy by <span>Eni Dev</span>
      </div>
    </footer>
  );
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`py-3 px-4 flex-shrink flex-1 rounded-md bg-white block ${className}`}
    />
  );
}

export default Contact;
