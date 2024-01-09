import React from "react";

const Radio = ({ formData, errors, register }: any) => {
  console.log("Check the data here ,", formData);
  return (
    <div className="form-group">
      <label>
        {formData.displayName} {formData.value}
      </label>
      {formData?.options?.map((data: any, index: number) => {
        return (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={formData.options[index]}
              {...register(formData.name, {
                required: formData.required ? true : false,
              })}
            />
            <label className="form-check-label">{data}</label>
          </div>
        );
      })}

      {errors[formData.name] && <p>This field is required</p>}
    </div>
  );
};

export default Radio;
