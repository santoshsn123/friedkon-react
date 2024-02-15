
const TextField = ({formData, errors, register}:any) => {

  return (
    <div className="form-group" >
    <label>{formData.displayName} {formData.value}</label>
    <input
      type="text"
      className="form-control"
      placeholder={"Enter " + formData.displayName}
      {...register(formData.name,{required:formData.required, pattern:formData.pattern?formData.pattern:''})}
    />
    {errors[formData.name] && <p className="error">{errors[formData.name].message}</p>}
  </div>
  )
}

export default TextField