import React, { useEffect, useState } from "react";
import TextField from "./formFields/TextField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import FileUpload from "./formFields/FileUpload";

const AddCMS = ({ appData }: any) => {
  console.log("see  this ", appData);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues
  } = useForm();

  const { id: paramId } = useParams();

  useEffect(() => {
    if (paramId) {
      axios.get(apiUrl + appData?.apiURL + "/" + paramId).then((res) => {
        Object.keys(res.data).forEach((key) => {
          if (key !== "_id" && key !== "__v") {
            setValue(key, res.data[key]);
            console.log('see data here :- ', key, res.data[key]);
            appData.data.map((item:any)=>{
              if(item.name==='image'){
                item.imageUrl=res.data[key];
              }
              return item;
            })
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
    console.log("form submittion ", data);
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
      window.location.href = urlArray.join("/");
    });
  };
  return (
    <>
      <h2>{appData.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {appData.data.map(
          (formData: any) =>
            formData.input === "text" && (
              <TextField
                key={formData.id}
                errors={errors}
                register={register}
                formData={formData}
              />
            )
        )}
        {appData.data.map(
          (formData: any) =>
            formData.input === "image" && (
              <>
              <FileUpload
                key={formData.id}
                errors={errors}
                register={register}
                formData={formData}
              />
               <img src={`${fileUrl}${getValues('image') || formData.imageUrl}`} style={{width:50}}/>
               <br></br>
               </>
            )
        )}
        <button type="submit" className="btn btn-primary mt-4 mb-6">
          {paramId ? "Update" : "Add New"}
        </button>
      </form>
    </>
  );
};

export default AddCMS;
