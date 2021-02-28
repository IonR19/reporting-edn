import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { WorkPlaces } from "../Models/WorkPlaces";
import { ColDef, DataGrid, RowsProp } from "@material-ui/data-grid";
import axios from "axios";
import { Formik } from "formik";
import { API } from "../config";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Button, Input, InputLabel, TextField } from "@material-ui/core";

const EmployeeDataGrid = () => {
  let defaultRows: RowsProp = [
    { id: 91, civilId: "Hello", name: "World" },
    { id: 92, civilId: "XGrid", name: "is Awesome" },
    { id: 93, civilId: "Material-UI", name: "is Amazing" },
  ];
  useEffect(() => {
    axios.get(`${API}/employees`).then((res) => {
      rows = [...rows, ...res.data];
      setRows(rows);
    });
  }, []);

  let [rows, setRows] = useState(defaultRows);

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

interface FilterComponentProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
const FilterComponent: React.FC<FilterComponentProps> = (props) => {
  return (
    <div className="select">
      <select value={props.value} onChange={props.onChange}>
        {props.options.map((o, i) => {
          return (
            <option key={i} value={o.value}>
              {o.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const AddEmployeeForm: React.FC = () => {
  const [values, setValues] = useState({
    name: "",
    civilId: "",
    fileNo: "",
    workPlace: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(`${API}/employees`, values).then(async (res) => {
      setValues({ civilId: "", name: "", fileNo: "", workPlace: "" });
    });
  };

  interface InputElementProps {
    label?: string;
    input?: string;
    placeholder?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  const InputElement: React.FC<InputElementProps> = (props) => {

    return (
      <div className="field">
        <label className="label" htmlFor={props.input}>
          {props.label}
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name={props.input}
            id={props.input}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      </div>
    );
  };

  let optionValues: { value: string; label: string }[] = [
    ...WorkPlaces.watch.map((w) => {
      return { label: w.title, value: w.value };
    }),
    ...WorkPlaces.section.map((w) => {
      return { label: w.title, value: w.value };
    }),
  ];

  return (
    <div className="box has-shadow rtl">
      <form onSubmit={onSubmit}>
        <div className="columns">
          <div className="column">
            <TextField
              id="name"
              label="Full Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="column">
            <TextField
              id="civilId"
              label="Civil No."
              value={values.civilId}
              onChange={(e) =>
                setValues({ ...values, civilId: e.target.value })
              }
            />
          </div>
          <div className="column">
            <TextField
              id="fileNo"
              label="File No."
              value={values.fileNo}
              onChange={(e) => setValues({ ...values, fileNo: e.target.value })}
            />
          </div>
        </div>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

function EmployeeSubHeader() {
  const { url } = useRouteMatch();
  return (
    <div>
      <Link to={`${url}/add`}>
        <button>Add</button>
      </Link>
      <Link to={`${url}/view`}>
        <button>View</button>
      </Link>
    </div>
  );
}
function Employees() {
  const { path, isExact } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (isExact) {
      history.push("/employees/view");
    }
  }, []);

  return (
    <>
      <EmployeeSubHeader />
      <div className="container">
        <Switch>
          <Route>
            <Route path={`${path}/`} exact component={() => <h1>Data</h1>} />
            <Route path={`${path}/view`} component={EmployeeDataGrid}></Route>
            <Route path={`${path}/add`} component={AddEmployeeForm}></Route>
          </Route>
        </Switch>
      </div>
      {/* <Table /> */}
    </>
  );
}

export default Employees;
