import React from "react";

const DropDown = ({ formData, errors, register }: any) => {
  return (
    <div className="form-group">
      <label>
        {formData.displayName} {formData.value}
      </label>
      <select
        className="form-control"
        placeholder={"Enter " + formData.displayName}
        {...register(formData.name, {
          required: formData.required ? true : false,
        })}
      >
        {formData?.options?.map((option: any,index:number) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      {errors[formData.name] && <p>This field is required</p>}
    </div>
  );
};

export default DropDown;
