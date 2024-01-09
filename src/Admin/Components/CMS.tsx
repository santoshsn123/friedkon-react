import axios from "axios";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

export const CMS = ({ appData }: any) => {
  const { data: column } = appData;
  // console.log('see here :- ',appData);multiRecords
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetchCompleteData();
  }, [appData]);

  const fetchCompleteData = () => {
    axios.get(apiUrl + appData?.apiURL).then((data: any) => {
      console.log(data.data);
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

  function getFormatedColumnData(col: any, row: any) {
    console.log('col, row :- ',col, row);
    switch (col.input) {
      case "image":
        return <img src={`${fileUrl}${row[col.name]}`} style={{ width: 50 }} />;
        break;
      case "ckeditor":
        return parse(row[col.name] || '');
        break;
      default:
        return row[col.name];
    }
  }

  return (
    <>
      <h2>{appData.title}</h2>
      <div>
        {appData.multiRecords && (
          <a href={`${window.location.href}/add`}>Add New</a>
        )}
        {appData.multiRecords === false && tableData.length < 1 && (
          <a href={`${window.location.href}/add`}>Add New</a>
        )}
      </div>
      <table className="table">
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
                      <td key={col.id}>
                        {getFormatedColumnData(col, row)}

                        {/* {col.input === "image" && (
                          <img
                            src={`${fileUrl}${row[col.name]}`}
                            style={{ width: 50 }}
                          />
                        )}
                        {col.input !== "image" && row[col.name]} */}
                      </td>
                    );
                  }
                })}
                <td>
                  <a href={`${window.location.href}/edit/${row._id}`}>Edit</a>
                  {tableData.length > 1 && appData.multiRecords && (
                    <>
                      {" "}
                      / <a onClick={() => deleteItem(row._id)}>Delete</a>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
