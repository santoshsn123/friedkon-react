import { useForm } from "react-hook-form";
import TextField from "../Admin/Components/formFields/TextField";
import FileUpload from "../Admin/Components/formFields/FileUpload";
import TextArea from "../Admin/Components/formFields/TextArea";
import DropDown from "../Admin/Components/formFields/DropDown";
import Radio from "../Admin/Components/formFields/Radio";
import CKEditorComponent from "../Admin/Components/formFields/CKEditor";
import axios from "axios";
import DateSelector from "../Admin/Components/formFields/DateSelector";
import { changeDateFormat } from "./CommonFunctions";

const Forms = ({ formArray, buttonName = "Submit", successMessage = 'Form Data Submitted Successfully!'}: any) => {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();


  const onSubmit = (data: any) => {
    const dateField = formArray.data.filter(({input}:any)=>input=='date');
    if(dateField.length){
      Object.keys(data).forEach(item=>{
        if((dateField.find(({name}:any)=>name==item))){
          data[item] = changeDateFormat(data[item]);
          console.log('Date changed :- ', data[item]);
        }
      })
    }
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios.post(apiUrl + formArray?.apiURL, data, headers).then((data) => {
      alert(successMessage);
      reset();
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formArray.data.map((formData: any) => {
          switch (formData.input) {
            case "text":
              return (
                <TextField
                  key={formData.id}
                  errors={errors}
                  register={register}
                  formData={formData}
                />
              );
            case "image":
              return (
                <FileUpload
                  key={formData.id}
                  errors={errors}
                  formData={formData}
                  setValue={setValue}
                  watch={watch}
                />
              );
            case "textarea":
              return (
                <TextArea
                  key={formData.id}
                  errors={errors}
                  register={register}
                  formData={formData}
                />
              );
            case "dropdown":
              return (
                <DropDown
                  key={formData.id}
                  errors={errors}
                  register={register}
                  formData={formData}
                />
              );
            case "radio":
              return (
                <Radio
                  key={formData.id}
                  errors={errors}
                  register={register}
                  formData={formData}
                />
              );
            case "ckeditor":
              return (
                <CKEditorComponent
                  key={formData.id}
                  errors={errors}
                  register={register}
                  formData={formData}
                  watch={watch}
                  setValue={setValue}
                />
              );
            case "date":
              return (
                <DateSelector
                  key={formData.id}
                  errors={errors}
                  register={register}
                  formData={formData}
                  watch={watch}
                  setValue={setValue}
                />
              );
          }
        })}

        <button type="submit" className="btn btn-primary mt-4 mb-6">
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default Forms;
