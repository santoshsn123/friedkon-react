import axios from "axios";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import ModalBt from "../../Components/ModalBt";
import { useNavigate } from "react-router";

export const CMS = ({ appData }: any) => {
  const navigate = useNavigate();
  const { data: column } = appData;
  
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  const [tableData, setTableData] = useState([]);
  const [imageName, setImageName] = useState<string>("");
  const [imageModalShow, setImageModalShow] = useState<boolean>(false);
  useEffect(() => {
    fetchCompleteData();
  }, [appData]);

  const fetchCompleteData = () => {
    axios.get(apiUrl + appData?.apiURL).then((data: any) => {
      setTableData(data.data);
    });
  };

  const deleteItem = (_id: String) => {
    if (window.confirm("do you want to delete this item?")) {
      axios.delete(apiUrl + appData?.apiURL + "/" + _id).then((res) => {
        console.log(res);
        fetchCompleteData();
      });
    }
  };

  function showModal(imageName: string) {
    setImageName(imageName);
    setImageModalShow(true);
  }
  function getFormatedColumnData(col: any, row: any) {
    switch (col.input) {
      case "image":
        return (
          <img
            onClick={() => showModal(row[col.name])}
            src={`${fileUrl}${row[col.name]}`}
            style={{ width: 100, cursor: "pointer" }}
          />
        );
        break;
      case "ckeditor":
        return parse(row[col.name] || "");
        break;
      default:
        return row[col.name];
    }
  }

  return (
    <>
      <h2>{appData.title}</h2>
      <div style={{cursor:'pointer'}}>
        {appData.multiRecords && appData.isEditable && (
          <a onClick={()=>navigate(`add`)}>Add New</a>
        )}
        {appData.multiRecords === false && tableData.length < 1 && appData.isEditable && (
          <a onClick={()=>navigate(`add`)}>Add New</a>
        )}
      </div>
          {tableData.length==0 && <div className="alert alert-danger"> No Records available !!</div>}
      {tableData.length>0 && <table className="table">
        <thead>
          <tr>
            {column.map((col: any) => {
              return (
                col.displayOnTable && <th key={col.id}>{col.displayName}</th>
              );
            })}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row: any) => {
            return (
              <tr key={row._id}>
                {column.map((col: any) => {
                  if (col.displayOnTable) {
                    return (
                      <td key={col.id}>{getFormatedColumnData(col, row)}</td>
                    );
                  }
                })}
                <td>
                 {appData.isEditable && <a style={{cursor:'pointer'}} onClick={()=>navigate(`edit/${row._id}`)}> 
                    <img src="/images/edit.png" width="15px"  alt="Edit"/> 
                  </a>}
                  {tableData.length > 1 && appData.multiRecords && appData.isEditable &&  <>&nbsp;|&nbsp;</> }
                  {((tableData.length > 1 && appData.multiRecords) || !appData.isEditable) && (
                    <>
                    <a style={{cursor:'pointer'}} onClick={() => deleteItem(row._id)}><img alt="Delete" width="15px" src="/images/delete.png" /></a>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>}

      <ModalBt
        show={imageModalShow}
        showFooter={false}
        modalClose={() => {
          setImageModalShow(false);
        }}
      >
        <img src={`${fileUrl}${imageName}`} style={{ width: "100%" }} />
      </ModalBt>
    </>
  );
};
