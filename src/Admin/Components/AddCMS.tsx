import  { useEffect } from "react";
import TextField from "./formFields/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import FileUpload from "./formFields/FileUpload";
import TextArea from "./formFields/TextArea";
import DropDown from "./formFields/DropDown";
import Radio from "./formFields/Radio";
import CKEditorComponent from "./formFields/CKEditor";

const AddCMS = ({ appData,paramIdForModal }: any) => {

  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, 
    watch,
  } = useForm();

  const { id } = useParams();
 const paramId = paramIdForModal?paramIdForModal:id;
  useEffect(() => {
    if (paramId) {
      axios.get(apiUrl + appData?.apiURL + "/" + paramId).then((res) => {
        Object.keys(res.data).forEach((key) => {
          if (key !== "_id" && key !== "__v") {
            setValue(key, res.data[key]);
            appData.data.map((item: any) => {
              if (item.input === "image") {
                item.imageUrl = res.data[key];
              }
              return item;
            });
          }
        });
      });
    }
  }, []);

  const onSubmit = (data: any) => {
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    let request;
    if (paramId) {
      request = axios.put(
        apiUrl + appData?.apiURL + "/" + paramId,
        data,
        headers
      );
    } else {
      request = axios.post(apiUrl + appData?.apiURL, data, headers);
    }
    request.then((data) => {
      const urlArray = window.location.href.split("/");
      urlArray.pop();
      if (paramId) {
        urlArray.pop();
      }
      window.open(urlArray.join("/"),'_self')
    }).catch(error=>console.error('Something went wrong at form submitting:', error));
  };
  return (
    <>
      <h2>{appData.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {appData.data.map((formData: any) => {
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
              return (<CKEditorComponent  key={formData.id}
                errors={errors}
                register={register}
                formData={formData}
                watch={watch}
                setValue={setValue} />)
          }
        })}
       
        <button type="submit" className="btn btn-primary mt-4 mb-6">
          {paramId ? "Update" : "Add New"}
        </button>

        {paramIdForModal  && (<> &nbsp; <button type="button" onClick={()=>{
          window.open(`/admin${appData.router}/edit/${paramIdForModal}`);
        }} className="btn btn-secondary mt-4 mb-6">
         Edit in Full View
        </button></>)}
      </form>
    </>
  );
};

export default AddCMS;
