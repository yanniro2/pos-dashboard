"use client";
import React, { useState } from "react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
};

const InputLabel = (props: Props) => {
  const [error, setError] = useState<string | null>(null);
  const handleError = () => {
    setError("error");
  };
  return (
    <div className="label-box-1">
      <label htmlFor={props.id} className="label-1">
        {props.label}
      </label>
      <input
        type="text"
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        className="input-1"
        onChange={handleError}
      />
      <div className="text-primary pl-3 font-medium">{error}</div>
    </div>
  );
};

export default InputLabel;
