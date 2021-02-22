import { useState } from "react";
import { WorkPlaces } from "../Models/WorkPlaces";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import "regenerator-runtime";

const Table = () => {
  const TableHead = () => {
    return (
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Civil ID</th>
          <th>Job Title</th>
        </tr>
      </thead>
    );
  };
  const TableFoot = () => {
    return (
      <tfoot>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Civil ID</th>
          <th>Job Title</th>
        </tr>
      </tfoot>
    );
  };
  const TableBody = () => {
    return (
      <tbody>
        <tr>
          <th>1</th>
          <td>Name here</td>
          <td>296012400648</td>
          <td>Workaholic</td>
        </tr>
      </tbody>
    );
  };
  return (
    <table className="table">
      <TableHead />
      <TableBody />
      <TableFoot />
    </table>
  );
};

const EmployeeDataGrid = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        {...data}
        filterModel={{
          items: [{ columnField: "commodity", operatorValue: "contains", value: "rice" }],
        }}
      />
    </div>
  );
};

function Employees() {
  let watches = Object.keys(WorkPlaces.watch);
  let section = Object.keys(WorkPlaces.section);

  const [selection, setSelection] = useState("select");
  return (
    <div>
      <div className="select">
        <select
          value={selection}
          onChange={(e) => {
            setSelection(e.target.selectedOptions[0].dataset.link!);
          }}
        >
          {watches.map((watchCode) => (
            <option data-link={watchCode} key={watchCode}>
              {WorkPlaces.watch[watchCode].title}
            </option>
          ))}
          {section.map((sectionCode) => (
            <option data-link={sectionCode} key={sectionCode}>
              {WorkPlaces.section[sectionCode].title}
            </option>
          ))}
        </select>
      </div>
      <Table />
      <EmployeeDataGrid />
    </div>
  );
}

export default Employees;
