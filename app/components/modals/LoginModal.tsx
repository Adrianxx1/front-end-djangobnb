"use client";
import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
const LoginModal = () => {
  const loginModal = useLoginModal();
  const content = (
    <>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border border-gray-300 rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-3 border border-gray-300 rounded-xl"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-85">
          Error Message
        </div>
        <CustomButton label="Login" onClick={() => console.log("Clicked")} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Login"
      content={content}
    />
  );
};

export default LoginModal;
