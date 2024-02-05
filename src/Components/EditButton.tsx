import AddCMS from "../Admin/Components/AddCMS";
import ModalBt from "./ModalBt";

const EditButton = ({admin,url}: any) => {
  return (
    <>
      {admin && (
        <img
          onClick={() => window.open(url)}
          src="/images/edit.png"
          className="edit-icon"
          alt="Edit"
        />
      )}
    </>
  );
};

export default EditButton;
