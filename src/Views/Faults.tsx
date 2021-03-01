import { ColDef, DataGrid, RowsProp } from "@material-ui/data-grid";
import React, { useState } from "react";
import { Route, Switch, useRouteMatch, Link, NavLink } from "react-router-dom";

const HT: React.FC = () => {
  let defaultRows: RowsProp = [
    { id: 1, from: "8:00pm", to: "10:05pm", duration: "85min", pmt: 12, sput: 2, uds: 3, ltr: 1 },
    { id: 2, from: "8:00pm", to: "10:05pm", duration: "85min", pmt: 12, sput: 2, uds: 3, ltr: 1 },
    { id: 3, from: "8:00pm", to: "10:05pm", duration: "85min", pmt: 12, sput: 2, uds: 3, ltr: 1 },
  ];

  let rows = defaultRows;
  // let [rows, setRows] = useState(defaultRows);

  const columns: ColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "from", headerName: "From", width: 140 },
    { field: "to", headerName: "To", width: 140 },
    { field: "duration", headerName: "Cut-off Duration", width: 140 },
    { field: "pmt", headerName: "PMT", width: 100 },
    { field: "sput", headerName: "SPUR - TR", width: 100 },
    { field: "uds", headerName: "UDS", width: 100 },
    { field: "ltr", headerName: "LTR", width: 100 },
  ];
  return (
    <div>
      <div className="container">
        <div className="card" style={{ height: "70vh" }}>
          <DataGrid rows={rows} columns={columns}></DataGrid>
        </div>
      </div>
    </div>
  );
};

const LT: React.FC = () => {
  const EmergencyReports = () => {
    return (
      <table className="table is-bordered">
        <thead>
          <tr>
            <th colSpan={100}>Emergency Reports</th>
          </tr>
          <tr>
            <th>Type</th>
            <th>Internal Faults</th>
            <th>Fire</th>
            <th>Other Faults</th>
            <th>Total Reports</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Count</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    );
  };
  const DieselGenerator = () => {
    return (
      <table className="table is-bordered">
        <thead>
          <tr>
            <th colSpan={100}>Diesel Generators</th>
          </tr>
          <tr>
            <th>Type</th>
            <th>Secondary Substation</th>
            <th>Local Transformer</th>
            <th>Secondary Transformer</th>
            <th>U.D.S</th>
            <th>Low Voltage Cable</th>
            <th>Cutout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Count</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    );
  };
  const GeneralFaults = () => {
    return (
      <table className="table is-bordered">
        <thead>
          <tr>
            <th colSpan={100}>General Fails</th>
          </tr>
          <tr>
            <th rowSpan={2}>Type</th>
            <th rowSpan={2}>Fuses in SubStation</th>
            <th colSpan={3}>Low Voltage Cable</th>
            <th rowSpan={2}>Secondary Substation</th>
            <th rowSpan={2}>Secondary Transmission</th>
            <th rowSpan={2}>U.D.S</th>
            <th rowSpan={2}>Locked Station</th>
            <th rowSpan={2}>Transmission Line</th>
            <th rowSpan={2}>Medium Voltage Cable</th>
          </tr>
          <tr>
            <td>Connector Fault</td>
            <td>Cable Fault</td>
            <td>Broken Cable</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Count</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    );
  };
  const Cutouts = () => {
    return (
      <table className="table is-bordered">
        <thead>
          <tr>
            <th colSpan={100}>Cutouts Fails</th>
          </tr>
          <tr>
            <th rowSpan={2}>Type</th>
            <th colSpan={3}>Fuses in Cutouts</th>
            <th colSpan={3}>Cutout</th>
            <th colSpan={3}>Base</th>
          </tr>
          <tr>
            <td>300</td>
            <td>200</td>
            <td>100</td>
            <td>300</td>
            <td>200</td>
            <td>100</td>
            <td>300</td>
            <td>200</td>
            <td>100</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Count</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    );
  };
  const Meters = () => {
    return (
      <table className="table is-striped is-bordered is-centered">
        <thead>
          <tr>
            <th colSpan={100}>Faulty Meters</th>
          </tr>
          <tr>
            <th>Size</th>
            <td>40x1</td>
            <td>80x1</td>
            <td>100x1</td>
            <td>50x3</td>
            <td>75x3</td>
            <td>125x3</td>
            <td>200/5</td>
            <td>300/5</td>
            <td>Other</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Count</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    );
  };
  const { url } = useRouteMatch();
  return (
    <div>
      <div className="tabs is-centered is-boxed">
        <ul>
          <li>
            <NavLink activeClassName="is-active" to={`${url}/Meters`}>
              Meters
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to={`${url}/Cutouts`}>
              Cutouts
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to={`${url}/GeneralFaults`}>
              General Faults
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to={`${url}/DieselGenerator`}>
              Diesel Generator
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to={`${url}/EmergencyReports`}>
              Emergency Reports
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={`${url}/Meters`} component={Meters} />
        <Route path={`${url}/Cutouts`} component={Cutouts} />
        <Route path={`${url}/GeneralFaults`} component={GeneralFaults} />
        <Route path={`${url}/DieselGenerator`} component={DieselGenerator} />
        <Route path={`${url}/EmergencyReports`} component={EmergencyReports} />
      </Switch>
    </div>
  );
};
function Faults(props: any) {
  const { url } = useRouteMatch();
  return (
    <div>
      <div className="columns">
        <div className="column">
          <Link className="button is-primary is-centered" to={`${url}/lt`}>
            Low Tension Faults
          </Link>
        </div>
        <div className="column">
          <Link className="button is-primary" to={`${url}/ht`}>
            High Tension Faults
          </Link>
        </div>
      </div>
      <Switch>
        <Route path={`${url}/lt`} component={LT}></Route>
        <Route path={`${url}/ht`} component={HT}></Route>
      </Switch>
    </div>
  );
}

export default Faults;
