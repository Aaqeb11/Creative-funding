"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

type FormFields = {
  name: string;
  number: string;
  email: string;
  description: string;
};
const Form = () => {
  const template = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const service = process.env.NEXT_PUBLIC_SERVICE_ID;
  const key = process.env.NEXT_PUBLIC_USER_ID;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data: FormFields) => {
    emailjs
      .send(service!, template!, data, key)
      .then((response) => {
        reset();
        console.log("Form data:", data);
        toast.success("Form Submitted Successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Form Submission Failed!");
      });
  };

  return (
    <>
      <form
        className="flex flex-col w-[90%] mx-auto space-y-4 my-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Name"
          className="rounded-xl p-2 border placeholder-black opacity-60 backdrop-blur-sm "
          style={{
            background:
              "linear-gradient(90deg, rgba(205, 205, 205, 1) 0%, rgba(103, 103, 103, 1) 100%)",
          }}
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="text"
              placeholder="Email"
              className="rounded-xl p-2 border w-full placeholder-black opacity-60 backdrop-blur-sm "
              style={{
                background:
                  "linear-gradient(90deg, rgba(205, 205, 205, 1) 0%, rgba(103, 103, 103, 1) 100%)",
              }}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register("number", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
              })}
              type="text"
              placeholder="Number"
              className="rounded-xl p-2 border w-full placeholder-black opacity-60 backdrop-blur-sm "
              style={{
                background:
                  "linear-gradient(90deg, rgba(205, 205, 205, 1) 0%, rgba(103, 103, 103, 1) 100%)",
              }}
            />
            {errors.number && (
              <div className="text-red-500">{errors.number.message}</div>
            )}
          </div>
        </div>

        <textarea
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 5,
              message: "Description must be at least 5 characters long",
            },
          })}
          placeholder="Description "
          className="rounded-xl p-2 border placeholder-black opacity-60 backdrop-blur-sm "
          rows={4}
          style={{
            background:
              "linear-gradient(90deg, rgba(205, 205, 205, 1) 0%, rgba(103, 103, 103, 1) 100%)",
          }}
        />
        {errors.description && (
          <div className="text-red-500">{errors.description.message}</div>
        )}

        <button
          type="submit"
          className="w-full text-white p-2 rounded-xl placeholder-black opacity-60 backdrop-blur-sm border-1 ring-2 ring-white "
          style={{
            background:
              "linear-gradient(90deg, rgba(205, 205, 205, 1) 0%, rgba(103, 103, 103, 1) 100%)",
          }}
        >
          Contact Us
        </button>
      </form>
    </>
  );
};

export default Form;