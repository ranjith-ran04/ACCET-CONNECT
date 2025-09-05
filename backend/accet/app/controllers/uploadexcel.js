const connection = require("../config/dbconnect");
const xlsx = require("xlsx");

const uploadExcel = async (req, res) => {
  try {
    console.log(req.file);
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log("excel",data);  
    for (let row of data) {
      const { regno, aadhar } = row; 

      await connection.query(
        "INSERT INTO students (regno, aadhar) VALUES (?, ?)",
        [regno, aadhar]
      );
    }

    res.status(200).json({ message: "Excel data inserted successfully!" });
  } catch (error) {
    console.error("Error inserting Excel data:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = uploadExcel;
