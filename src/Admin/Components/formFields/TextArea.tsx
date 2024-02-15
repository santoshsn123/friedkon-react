import React from 'react'

const TextArea = ({formData, errors, register}:any) => {
  return (
    <div className="form-group" >
    <label>{formData.displayName} {formData.value}</label>
    <textarea
      type="text"
      className="form-control"
      placeholder={"Enter " + formData.displayName}
      {...register(formData.name,{required:formData.required})}
    ></textarea>
    {errors[formData.name] && <p className="error">{errors[formData.name].message}</p>}
  </div>
  )
}

export default TextArea