"use client";

import { sendEmailAction } from "@/app/action/email";
import { GitHub, LinkedIn, Twitter, Whatsapp } from "@/assets/icons";
import React, { InputHTMLAttributes } from "react";
import { useFormState, useFormStatus } from "react-dom";

const Contact = () => {
  const [state, action] = useFormState(sendEmailAction, undefined);
  return (
    <footer>
      <form
        action={action}
        className="p-4 mx-[1.9rem] rounded-lg max-w-[50rem] md:mx-auto my-[5rem] md:my-[10rem] space-y-7 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px]"
      >
        <div className="flex flex-wrap gap-7 justify-between">
          <Input required name="user_name" type="text" placeholder="name" />
          <Input required name="user_email" type="email" placeholder="email" />
        </div>
        <Input required type="text" className="w-full" placeholder="subject" />
        <textarea
          required
          name="message"
          className="block w-full h-[150px] rounded-md px-4 py-2 resize-none"
          placeholder="message"
        ></textarea>
        {state?.type === "error" && (
          <p className="text-red-500">{state.message}</p>
        )}
        {state?.type === "success" && (
          <p className="text-green-500">{state.message}</p>
        )}
        <div className="flex justify-end">
          <SendButton />
        </div>
      </form>
      {/* socials */}
      <div className="flex justify-center pb-5 items-center gap-4">
        <a href="https://twitter.com/enielect">
          <Twitter />
        </a>
        <a href="https://linkedin.com/in/eniola-abayomi-045605232">
          <LinkedIn />
        </a>
        <a href="https://github.com/Enielect">
          <GitHub />
        </a>
        <a href="https://wa.me/+2349011433053?text=I'm%20interested%20in%20your%20service:">
          <Whatsapp />
        </a>
      </div>
      {/* attributes */}
      <div className="py-3 text-white border-t text-center border-[rgba(255,255,255,0.1)]">
        &copy; 2021 created by <span>Eni Dev</span>
      </div>
    </footer>
  );
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function SendButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="px-4 py-2  rounded-md bg-blue-800 text-white"
    >
      <span className="amimate-send inline-block w-full">
        {pending ? "sending..." : "send"}
      </span>
    </button>
  );
}

function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`py-3 px-4 flex-shrink flex-1 rounded-md bg-white block ${className}`}
    />
  );
}

export default Contact;
