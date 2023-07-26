
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const detail = [
    {
      Action: ":",
      Phone_no: "123456789",
      Call_date: "2023-4-24",
      Recording_File: "",
      Resp_Code: "",
      Comp_Name: "",
      Agent_id: "1052"
    },
    {
      Action: ":",
      Phone_no: "12345",
      Call_date: "2023-6-24",
      Recording_File: "",
      Resp_Code: "",
      Comp_Name: "",
      Agent_id: "1074"
    },
    {
      Action: ":",
      Phone_no: "1234557",
      Call_date: "2023-6-28",
      Recording_File: "",
      Resp_Code: "",
      Comp_Name: "",
      Agent_id: "107eu"
    },
  ];

  const [agentIdFilter, setAgentIdFilter] = useState('');
  const [phoneNumberFilter, setPhoneNumberFilter] = useState('');

  // Filter the detail array based on the search criteria
  const filteredDetail = detail.filter((item) => {
    const agentIdMatch = item.Agent_id.includes(agentIdFilter);
    const phoneNumberMatch = item.Phone_no.includes(phoneNumberFilter);
    return agentIdMatch && phoneNumberMatch;
  });

 

  return (
    <div>
      <div className="container mt-4  ">
      <p className='bg-black text-light px-5 p-2 '><b>Manage Call Recording</b></p>
        <form>
          <div className="row mt-3 border border-dark ">
            <div className="col-md-4">
              
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  <b>Phone Number</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={phoneNumberFilter}
                  onChange={(e) => setPhoneNumberFilter(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  <b>Agent</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={agentIdFilter}
                  onChange={(e) => setAgentIdFilter(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Volunteer</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                   disabled
                />
              </div>

            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Call from</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  <b>Agent id</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                />
              </div>
             
            </div>


            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <b>Call date</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  <b>Volunteer</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                />
              </div>
            
            </div>
            {/* ... (rest of the form) ... */}
          </div>

          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="row mt-3">
                <div className="col-md-6">
                  <button className='btn btn-dark '>Search</button>
                </div>
                
              </div>
            </div>
          </div>
        </form>

        <table className='table mt-5'>
          <thead>
            <tr>
              <th scope="col">Action</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">callDate</th>
              <th scope="col">Recording</th>
              <th scope='col'>Resp</th>
              <th scope='col'>CompName</th>
              <th scope='col'>AgentId</th>
            </tr>
          </thead>
          <tbody>
            {filteredDetail.map((user, index) => (
              <tr key={index} className=''>

              <td
 
  data-bs-toggle="modal"
  data-bs-target="#myModal"
>
 <td >{user.Action}</td>
</td>
                
                <td>{user.Phone_no}</td>
                <td>{user.Call_date}</td>
                <td>{user.Recording_File}</td>
                <td>{user.Resp_Code}</td>
                <td>{user.Comp_Name}</td>
                <td>{user.Agent_id}</td>
              </tr>
            ))}
          </tbody>
        </table>



        <div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">Modal body..</div>
       btn:1,<br />
       btn:2,<br />
       brn:3
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  );
}

export default App;

