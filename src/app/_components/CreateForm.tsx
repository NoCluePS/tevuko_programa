/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import React, { InputHTMLAttributes } from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";

interface Inputs {
  retire: number;
  pijus: number;
  elze: number;
}

interface InputProps {
  label: string;
  register: any;
  required: boolean;
  name: keyof Inputs;
  errors: FieldErrors<Inputs>;
}

const Input = ({
  label,
  name,
  register,
  required,
  errors,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => (
  <>
    <label className="mt-4 first:mt-0">{label}</label>
    <input
      {...register(name, { required })}
      className={`rounded-md border-2 border-gray-300 p-2 ${errors[name] ? "border-red-500" : ""}`}
      {...rest}
    />
    {errors[name] && <span className="text-red-500">Privalomas laukas</span>}
  </>
);

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col rounded-lg rounded-t-none p-4 shadow-md"
    >
      <Input
        errors={errors}
        type="number"
        label="Pensija"
        name="retire"
        register={register}
        required
      />
      <Input
        errors={errors}
        type="number"
        label="Pijus"
        name="pijus"
        register={register}
        required
      />
      <Input
        errors={errors}
        type="number"
        label="Elze"
        name="elze"
        register={register}
        required
      />
      <input
        type="submit"
        className="mx-auto mt-3 w-max cursor-pointer rounded-lg bg-blue-300 p-3 px-7 text-white"
      />
    </form>
  );
};

export default CreateForm;
