import { useEffect, useRef, useState } from "react";

import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { canvasPreview } from "./CanvasPreview";

const FileUpload = ({
  formData,
  register,
  errors,
  setValue,
  getValues,
}: any) => {
  const imgRef = useRef<HTMLImageElement | any>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | any>(null);
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;

  const [image, onImageSelected] = useState<any>("");
  const [oldImage, setOldImage] = useState<any>("");

  const handleOnChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  useEffect(() => {
    setOldImage(`${fileUrl}${getValues(formData.name)}`);
  }, [getValues(formData.name)]);

  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | any>();

  return (
    <div className="form-group">
      <label>
        {formData.displayName} {formData.value}
      </label>
      <input
        type="file"
        className="form-control"
        placeholder={"Enter " + formData.displayName}
        onChange={handleOnChange}
        accept="image/*"
      />
      {!image && <img src={oldImage} />}

      {image && (
        <div className="form-group">
          <label>Crop Here : </label>
          <ReactCrop
            aspect={formData.size}
            crop={crop}
            onComplete={(c) => {
              setCompletedCrop(c);

              const data = completedCrop
                ? canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    c,
                    1,
                    0
                  )
                : "";
              setValue(formData.name, [data]);
            }}
            onChange={(c) => {
              setCrop(c);
            }}
          >
            <img src={image} ref={imgRef} />
          </ReactCrop>
        </div>
      )}

      {completedCrop && (
        <div className="form-group">
          <label>Preview:</label>
          <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: "1px solid black",
                objectFit: "contain",
                width: completedCrop?.width,
                height: completedCrop?.height,
              }}
            />
          </div>
        </div>
      )}

      {errors[formData.name] && <p>This field is required</p>}
    </div>
  );
};

export default FileUpload;
