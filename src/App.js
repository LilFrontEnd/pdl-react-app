import "./style.css";
import swal from 'sweetalert';
import { db } from "./firebase";
import { uid } from "uid";
import { getDatabase, ref, set, update, push, child, onValue, remove } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { useState, useEffect } from "react";
// import "./components/Table/TableHead";
import TableHeader from "./components/Table/TableHead";
// import Button from "./components/buttons/Button";
// import Edit from "./components/buttons/Edit";
// import Delete from "./components/buttons/Delete";

function App() {
  // const lists = () => {
  //   const pdls = [
  //     {
  //       name: "Dodong test",
  //       caseNo: "Dodong Case",
  //       crimCaseNum: "Dodong CC",
  //       court: "Dodong Court",
  //       hearingStatus: "Dodong Hearing Status",
  //       hearingResult: "Dodong Hearing Result",
  //       nextHearing: "Dodong Next Hearing",
  //     },
  //     {
  //       name: "Dodong another one",
  //       caseNo: "Dodong Case",
  //       crimCaseNum: "Dodong CC",
  //       court: "Dodong Court",
  //       hearingStatus: "Dodong Hearing Status",
  //       hearingResult: "Dodong Hearing Result",
  //       nextHearing: "Dodong Next Hearing",
  //     },
  //     {
  //       name: "Dodong another two",
  //       caseNo: "Dodong Case",
  //       crimCaseNum: "Dodong CC",
  //       court: "Dodong Court",
  //       hearingStatus: "Dodong Hearing Status",
  //       hearingResult: "Dodong Hearing Result",
  //       nextHearing: "Dodong Next Hearing",
  //     },
  //     {
  //       name: "Dodong another three",
  //       caseNo: "Dodong Case",
  //       crimCaseNum: "Dodong CC",
  //       court: "Dodong Court",
  //       hearingStatus: "Dodong Hearing Status",
  //       hearingResult: "Dodong Hearing Result",
  //       nextHearing: "Dodong Next Hearing",
  //     },
  //     {
  //       name: "Dodong on fire",
  //       caseNo: "Dodong Case",
  //       crimCaseNum: "Dodong CC",
  //       court: "Dodong Court",
  //       hearingStatus: "Dodong Hearing Status",
  //       hearingResult: "Dodong Hearing Result",
  //       nextHearing: "Dodong Next Hearing",
  //     },
  //   ];

  //   return pdls;
  // };
  
  // write
  
  const [name, setName] = useState(null);
  const [case1, setCase] = useState(null);
  const [crimCase, setCrimCase] = useState(null);
  const [court1, setCourt] = useState(null);
  const [hearingStatus, setHearingStatus] = useState(null);
  const [hearingResult, setHearingResult] = useState(null);
  const [nextHearing, setNextHearing] =  useState(null);

  const [names, setNames] = useEffect([]);
  const [cases, setCases] = useEffect([]);
  const [crimCases, setCrimCases] = useEffect([]);
  const [courts, setCourts] = useEffect([]);
  const [hearingStatus1, setHearingStatus1] = useEffect([]);
  const [hearingResult1, setHearingResult1] = useEffect([]);
  const [nextHearings, setNextHearings] =  useEffect([]);

  // read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const pdlData = snapshot.val();
      if (pdlData !== null) {
        Object.values(pdlData).map((name, case1, crimCase, court1, hearingStatus, hearingResult, nextHearing) => {
          setNames((oldArray)  => [...oldArray, name]);
          setCases((oldArray) => [...oldArray, case1]);
          setCrimCases((oldArray) => [...oldArray, crimCase]);
          setCourts((oldArray) => [...oldArray, court1]);
          setHearingStatus1((oldArray) => [...oldArray, hearingStatus]);
          setHearingResult1((oldArray) => [...oldArray, hearingResult]);
          setNextHearings((oldArray) => [...oldArray, nextHearing]);
        });
      }
    });
  }, []);

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "case1") {
      setCase(value);
    }
    if (id === "crimCase") {
      setCrimCase(value);
    }
    if (id === "court1") {
      setCourt(value);
    }
    if (id === "hearingStatus") {
      setHearingStatus(value);
    }
    if (id === "hearingResult") {
      setHearingResult(value);
    }
    if (id === "nextHearing") {
      setNextHearing(value);
    }
  };

 // create
  const handleSubmit = () => {
    // let obj = {
    //   name: name,
    //   case1: case1,
    //   crimCase: crimCase,
    //   court1:  court1,
    //   hearingStatus: hearingStatus,
    //   hearingResult: hearingResult,
    //   nextHearing: nextHearing,
    // }
    // const pdlId = push(child(ref(db), "pdlData")).key;
    // const updates = {};
    // updates['/' + pdlId] = obj
    // return update(ref(db), updates);

    const pdlId = uid();
    // const pdlId = push(child(ref(db), "pdlData")).key;
    set(ref(db, "pdlData/" + `/${pdlId}`), {
      name: name,
      case1: case1,
      crimCase: crimCase,
      court1:  court1,
      hearingStatus: hearingStatus,
      hearingResult: hearingResult,
      nextHearing: nextHearing,
      pdlId,
    })
    .then(() => {
      // Data saved successfully!
      swal({
        title: "Success!",
        text: "Data successfully submitted!",
        icon: "success",
        button: true,
      });
      setName("");
      setCase("");
      setCrimCase("");
      setCourt("");
      setHearingStatus("");
      setHearingResult("");
      setNextHearing("");
      // setTimeout(() => {
      //   location.reload();
      // }, 1100);
    })
    .catch((error) => {
      
    });
    
  };

  // update
  // delete

  
  return (
    <div className="app">
      <div className="app-title-container">
        <div className="app-title">
          <h4>BJMP ESCORT APP</h4>
          <small className="sad">Safekeeping and Development</small>
        </div>
        <div className="modal-btn">
          <div
            id="addNew"
            type="button"
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#form"
          >
            <i className="fas fa-plus"></i>
            <span>Add PDL</span>
          </div>
        </div>
      </div>
      <div id="pdlTableList" className="col-md">
        <div className="row mt-4">
          <div className="col-12">
            <div id="search-btn">
              <div className="input-search">
                <input
                  id="search"
                  type="text"
                  className="search form-control"
                  placeholder="Search pdl here"
                />
              </div>
            </div>
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-bordered" id="crudTable">
                <TableHeader />
                <tbody id="tbody">
                  {lists().map((pdl) => {
                    return (
                      <tr>
                        <td>{pdl.name}</td>
                        <td>{pdl.caseNo}</td>
                        <td>{pdl.crimCaseNum}</td>
                        <td>{pdl.court}</td>
                        <td>{pdl.hearingStatus}</td>
                        <td>{pdl.hearingResult}</td>
                        <td>{pdl.nextHearing}</td>
                        <td>
                          {/* <Button label="Edits" color="warning" /> */}
                          {/* <button className="btn btn-warning m-2 btn-sm" data-bs-toggle="modal" data-bs-target="#form">Edit</button> */}
                          {/* <Edit /> */}
                          {/* <Button label="Delete" color="danger" /> */}
                          {/* <Delete /> */}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div></div>
        <div
          className="modal fade"
          id="form"
          data-bs-keyboard="false"
          tabindex="-1"
          data-bs-backdrop="static"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  PDL DATA
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row ">
                  <div className="for-group col-md-6 mb-3">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <small id="nameError" className="error"></small>
                  </div>
                  <div className="for-group col-md-6 mb-3">
                    <label for="case1">Case</label>
                    <input
                      type="text"
                      name="case1"
                      className="form-control"
                      id="case1"
                      placeholder="Case of Pdl"
                      value={case1}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <small id="caseError" className="error"></small>
                  </div>
                  <div className="for-group col-md-6 mb-3">
                    <label for="crimCase">Cc#</label>
                    <input
                      type="text"
                      name="crimCase"
                      className="form-control"
                      id="crimCase"
                      placeholder="Enter Case Number"
                      value={crimCase}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <small id="ccError" className="error"></small>
                  </div>
                  <div className="for-group col-md-6 mb-3">
                    <label for="court1">Court</label>
                    <input
                      type="text"
                      name="court1"
                      className="form-control"
                      id="court1"
                      placeholder="RTC Court of Pdl"
                      value={court1}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <small id="courtError" className="error"></small>
                  </div>
                  <div className="for-group col-md-6 mb-3">
                    <label for="hearingStatus">Hearing Status</label>
                    <input
                      type="text"
                      name="hearingStatus"
                      className="form-control"
                      id="hearingStatus"
                      placeholder="Enter Hearing Status"
                      value={hearingStatus}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <small id="hsError" className="error"></small>
                  </div>
                  <div className="for-group col-md-6 mb-3">
                    <label for="hearingResult">Hearing Result</label>
                    <input
                      type="text"
                      name="hearingResult"
                      className="form-control"
                      id="hearingResult"
                      placeholder="Enter Hearing Result"
                      value={hearingResult}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <small id="hrError" className="error"></small>
                  </div>
                  <div className="for-group col-md-6 mb-3">
                    <label for="nextHearing">Next Hearing</label>
                    <input
                      type="date"
                      name="nextHearing"
                      className="form-control"
                      id="nextHearing"
                      placeholder="Enter Next Hearing"
                      value={nextHearing}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <small id="nhError" className="error"></small>
                  </div>
                </div>
                <div className="modal-footer">
                  <button onClick={()=>handleSubmit()} className="btn btn-success" id="Submit" type="Submit">
                    Add Data
                  </button>
                  <button className="btn btn-primary" id="Update">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
