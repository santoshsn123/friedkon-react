import { useState } from "react";
import AddCMS from "../Admin/Components/AddCMS";
import appData from "../Admin/JSON/appData";
import ModalBt from "./ModalBt";

const EditButton = ({ admin, configId, paramId }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      {admin && (
        <>
          <img
            onClick={() => {
              setShowModal(true);
            }}
            src="/images/edit.png"
            className="edit-icon"
            alt="Edit"
          />

          <ModalBt
            showFooter={false}
            show={showModal}
            modalClose={() => {
              setShowModal(false);
            }}
          >
            <AddCMS
              paramIdForModal={paramId}
              appData={appData.find((item) => item.id == configId)}
            />
          </ModalBt>
        </>
      )}
    </>
  );
};

export default EditButton;
