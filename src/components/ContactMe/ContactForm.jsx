import React, { useState } from "react";
import { InputField, Button } from "../index";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../app/firebase";
import { ScaleLoader } from "react-spinners";

const ContactForm = () => {
  const [disableBtn, setDisableBtn] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleData = async (data) => {
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), data);
      toast.success("Message Sent Succesfully");
      setDisableBtn(false);
      reset();
    } catch (error) {
      toast.error("Error", error);
      setDisableBtn(false);
    }
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <div
      className=" flex py-10 px-10 justify-center items-center rounded 
    bg-gradient-to-br from-Peach  to-BrightOrange w-max  m-auto max-md:px-3"
    >
      <form
        className=" flex flex-col gap-5 w-full max-md:w-[250px]"
        onSubmit={handleSubmit(handleData)}
      >
        {/* Name Field */}
        <InputField
          placeholder="Your Name"
          {...register("name", { required: "this field is required" })}
          helperText={errors?.name ? errors.name.message : null}
        />

        {/* Email Field */}
        <InputField
          placeholder="Your Email Address"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: emailRegex,
              message: "This email is not valid",
            },
          })}
          helperText={errors?.email ? errors.email.message : null}
        />

        {/* Message Field */}
        <textarea
          cols="48"
          rows="5"
          placeholder="Message"
          className={`text-lg  font-notoJP font-semibold py-2 pl-3 text-DarkBlueishBlack ${
            errors?.info && "border border-red-500 outline outline-red-400"
          }`}
          {...register("info", { required: "this field is required" })}
        />
        {errors?.info && (
          <h4 className=" font-notoJP italic  text-sm -mt-4 text-red-500 capitalize">
            {errors.info.message}
          </h4>
        )}

        {/* Submit Button */}
        <Button
          className={` w-[75%] m-auto flex justify-center items-center gap-2 ${
            disableBtn && " cursor-not-allowed bg-LightLavender "
          }`}
          type="submit"
          disabled={disableBtn}
        >
          Send {disableBtn ? <ScaleLoader height={15} /> : <AiOutlineSend />}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
