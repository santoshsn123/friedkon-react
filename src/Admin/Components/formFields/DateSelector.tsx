import DatePicker from "react-datepicker";

const DateSelector = ({ formData, errors, register, setValue }: any) => {
  return (
    <div className="form-group">
      <label>
        {formData.displayName} {formData.value}
      </label>
      <DatePicker
        selected={new Date()}
        onChange={(date) => setValue(formData.name, date)}
      />
    </div>
  );
};

export default DateSelector;
