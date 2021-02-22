import { useEffect, useState } from "react";
import { WorkPlaces } from "../Models/WorkPlaces";
import { ColDef, DataGrid, RowsProp } from "@material-ui/data-grid";
import axios from "axios";
import { Formik } from "formik";
import { API } from "../config";

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
  let defaultRows: RowsProp = [
    { id: 91, civilId: "Hello", name: "World" },
    { id: 92, civilId: "XGrid", name: "is Awesome" },
    { id: 93, civilId: "Material-UI", name: "is Amazing" },
  ];

  let [rows, setRows] = useState(defaultRows);
  const [apiCalled, setApiCalled] = useState(false);
  if (!apiCalled) {
    axios.get(`${API}/employees`).then(async (res) => {
      await setApiCalled(true);
      rows = [...rows, ...res.data];
      setRows(rows);
    });
  }

  const columns: ColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "civilId", headerName: "Civil ID", width: 150, sortable: false },
    { field: "name", headerName: "Name", width: 220 },
  ];

  return (
    <div style={{ height: "70vh", width: "90%", margin: "auto" }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};

const FilterComponent: React.FC = () => {
  let watches = Object.keys(WorkPlaces.watch);
  let section = Object.keys(WorkPlaces.section);
  const [selection, setSelection] = useState("select");
  const [innerSelection, setInnerSelection] = useState("");

  return (
    <div className="select">
      <select
        value={selection}
        onChange={(e) => {
          setSelection(e.target.value);
          setInnerSelection(e.target.selectedOptions[0].dataset.link!);
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
  );
};

const AddEmployeeForm = () => {
  const [values, setValues] = useState({
    name: "",
    civilId: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(`${API}/employees`, values).then(async (res) => {
      console.log(res.data);
    });
  };
  return (
    <div style={{ margin: "auto" }}>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="civilId">
            Civil ID
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="civilId"
              id="civilId"
              value={values.civilId}
              onChange={(e) =>
                setValues({ ...values, civilId: e.target.value })
              }
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

function Employees() {
  return (
    <div>
      <FilterComponent />
      {/* <Table /> */}
      <EmployeeDataGrid />
      <AddEmployeeForm />
    </div>
  );
}

export default Employees;
