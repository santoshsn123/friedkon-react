
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


const CKEditorComponent = ({ formData, errors, register, watch, setValue }: any) => {

  
  return (
    <div className="form-group">
      <label>
        {formData.displayName} {formData.value}
      </label>
      {/* <span> {register(formData.name)}</span> */}
      {/* <select
        className="form-control"
        placeholder={"Enter " + formData.displayName}
        {...register(formData.name, {
          required: formData.required ? true : false,
        })}
      >
        {formData?.options?.map((option: any,index:number) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select> */}

      <CKEditor
                    editor={ ClassicEditor }
                    // createUploadAdapter={ ( loader ) => {}}
                    data={watch(formData.name)}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event , editor) => {
                        // console.log( editor.data.get() );
                    } }
                    onBlur={ ( event, editor ) => {
                        setValue(formData.name,editor.data.get())
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                    
                />
      {errors[formData.name] && <p>This field is required</p>}
    </div>
  
  )
}

export default CKEditorComponent