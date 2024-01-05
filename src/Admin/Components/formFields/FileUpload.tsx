import React from 'react'

const FileUpload = ({formData,register, errors}:any) => {
  return ( <div className="form-group" >
  <label>{formData.displayName} {formData.value}</label>
  <input
    type="file"
    className="form-control"
    placeholder={"Enter " + formData.displayName}
    {...register(formData.name,{required:formData.required?true:false})}
  />
  {errors[formData.name] && <p>This field is required</p>}
</div>
  )
}

export default FileUpload