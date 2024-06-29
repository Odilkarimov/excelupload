import { useState } from "react";
import * as XLSX from "xlsx";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  };
  return (
    <div>
      <input type="file" accept=".xlsx, xls" onChange={handleFileUpload} />
      {data.length > 0 && (
   <table className="table">
   <thead>
     <tr>
       <th>number</th>
       <th>Учебный год</th>
       <th>Классы школы</th>
       <th>ФИО ученика</th>
       <th>Пол</th>
     </tr>
   </thead>
   <tbody>
     {data.map((row, rowIndex) => (
       <tr key={rowIndex}>
         <td>{row["__EMPTY"]}</td>
         <td>{row["__EMPTY_1"]}</td>
         <td>{row["__EMPTY_2"]}</td>
         <td>{row["__EMPTY_3"]}</td>
         <td>{row["__EMPTY_4"]}</td>
       </tr>
     ))}
   </tbody>
 </table>
      )}
    </div>
  );
}

export default App;
