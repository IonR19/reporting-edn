import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { WorkPlaces } from '../Models/WorkPlaces';
import axios from 'axios';
import { API } from '../config';
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

const EmployeeDataGrid = () => {
  return (
    <div>
      <h1>Display Employees here</h1>
    </div>
  );
};

interface FilterComponentProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
const FilterComponent: React.FC<FilterComponentProps> = props => {
  return (
    <div className='select'>
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
  const [formValues, setFormValues] = useState({
    name: '',
    civilId: '',
    fileNo: '',
    workPlace: 'fr',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    // axios.post(`${API}/employees`, values).then(async (res) => {
    //   setValues({ civilId: "", name: "", fileNo: "", workPlace: "" });
    // });
  };

  let optionValues: { value: string; label: string }[] = [
    ...WorkPlaces.watch.map(w => ({ label: w.title, value: w.value })),
    ...WorkPlaces.section.map(w => ({ label: w.title, value: w.value })),
  ];

  return (
    <div className='box'>
      <form onSubmit={onSubmit}>
        <div className='field'>
          <label className='label' htmlFor='name'>
            Full Name
          </label>
          <div className='control'>
            <input
              className='input'
              id='name'
              type='text'
              value={formValues.name}
              onChange={e => setFormValues({ ...formValues, name: e.target.value })}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='civilId'>
            Civil Id
          </label>
          <div className='control'>
            <input
              className='input'
              id='civilId'
              type='text'
              value={formValues.civilId}
              onChange={e => setFormValues({ ...formValues, civilId: e.target.value })}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='fileNo'>
            File No.
          </label>
          <div className='control'>
            <input
              className='input'
              id='fileNo'
              type='text'
              value={formValues.fileNo}
              onChange={e => setFormValues({ ...formValues, fileNo: e.target.value })}
            />
          </div>
        </div>
        <div className='field'>
          <div className='select'>
            <label htmlFor='workPlace' className='label'>
              Work Place
            </label>
            <select
              id='workPlace'
              className='select'
              value={formValues.workPlace}
              onChange={e => {
                setFormValues({
                  ...formValues,
                  workPlace: e.target.value as string,
                });
              }}>
              {optionValues.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='field'>
          <button className='button is-dark' type='submit'>
            Submit
          </button>
        </div>
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
      history.push('/employees/view');
    }
  }, []);

  return (
    <>
      <EmployeeSubHeader />
      <div className='container'>
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
