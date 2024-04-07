import { useField } from "formik";
import React from "react";

const InputText = ({ icon, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="flex items-center w-full max-w-96 bg-zinc-600 rounded px-2 py-1.5 gap-1 mb-1.5">
      <div className="text-2xl text-white">
        { icon }
      </div>
      <input className="mx-1 text-lg w-full bg-transparent text-white font-medium outline-none border-none" {...field} {...props} />
    </div>
  );
};

export default InputText;
