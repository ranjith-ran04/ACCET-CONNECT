import { useState } from "react";
import axios from "axios";
import { path } from "./components/constants/backendpath";

function Sqlfile() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${path}excelupload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
      if(res.status===200){
        setMessage(res.data.message);
      }
      
    } catch (err) {
      setMessage("Error uploading file!");
    }
  };

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
      >
        Upload
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Sqlfile;
