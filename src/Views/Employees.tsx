import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { WorkPlaces } from '../Models/WorkPlaces';
import faker, { internet } from 'faker';
import axios from 'axios';
import moment from 'moment';
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
    phoneNumber: '',
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
    <div className='block'>
      <Link to={`${url}/add`} className='button is-primary '>
        Add
      </Link>
      <Link to={`${url}/view`} className='button is-primary'>
        View
      </Link>
      <Link to={`${url}/view/71`} className='button is-primary'>
        Employee 71
      </Link>
    </div>
  );
}

const EmployeePage: React.FC = () => {
  const PersonalDetails = () => {
    const {
      name,
      internet: { email },
      address,
    } = faker;
    return (
      <div className='block box is-rounded'>
        <h1 className='title is-2 has-text-centered'>Personal Details</h1>
        <div className='columns is-multiline'>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>Name</p>
            <p className='title is-5'>{name.findName()}</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>Civil Id</p>
            <p className='title is-5'>{2e12}</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>Email</p>
            <p className='title is-5'>{internet.exampleEmail()}</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>Phone Number</p>
            <p className='title is-5'>{6e7}</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>Location</p>
            <p className='title is-5'>{address.city() + ', ' + address.country()}</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>File No</p>
            <p className='title is-5'>55555</p>
          </div>
        </div>
      </div>
    );
  };
  const WorkDetail = () => {
    return (
      <div className='block box is-rounded'>
        <h1 className='title is-2 has-text-centered'>Work Details</h1>
        <div className='columns is-multiline'>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>WorkPlace</p>
            <p className='title is-5'>Asima</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>Section</p>
            <p className='title is-5'>Emergency</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>Title</p>
            <p className='title is-5'>Team Leader</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>Rank</p>
            <p className='title is-5'>Watch</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>Location</p>
            <p className='title is-5'>sample</p>
          </div>
          <div className='column is-4-tablet'>
            <p className='subtitle is-6'>File No</p>
            <p className='title is-5'>sample</p>
          </div>
        </div>
      </div>
    );
  };
  const LastVacations = () => {
    return (
      <div className='block box'>
        <h1 className='title is-2 has-text-centered'>Last 10 Vacations</h1>
        <table className='table is-fullwidth'>
          <thead>
            <tr>
              <th>#</th>
              <th>from</th>
              <th>to</th>
              <th>duration</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {[1, 1, 1, 1, 1, 1, 1].map((_, i) => {
              const from = moment(faker.date.past());
              const to = moment(faker.date.future());
              const diff = moment.duration(to.diff(from), 'days');
              const type = ['Emergency', 'Pregnancy', 'Periodic'];
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{from.format('DD/MM/YYYY')}</td>
                  <td>{to.format('DD/MM/yyyy')}</td>
                  <td>{diff.days()}</td>
                  <td>{type[faker.random.number(2)]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <div>
      <PersonalDetails />
      <WorkDetail />
      <LastVacations />
    </div>
  );
};
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
      <div className='container'>
        <EmployeeSubHeader />
        <Switch>
          <Route path={`${path}/`} exact component={() => <h1>Data</h1>} />
          <Route path={`${path}/view/:EmployeeId`} component={EmployeePage} />
          <Route path={`${path}/view`} component={EmployeeDataGrid} />
          <Route path={`${path}/add`} component={AddEmployeeForm} />
        </Switch>
      </div>
      {/* <Table /> */}
    </>
  );
}

export default Employees;
