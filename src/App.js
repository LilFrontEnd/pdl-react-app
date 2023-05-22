import "./style.css";

function App() {
  const lists = () => {
    const pdls = [
      {
        name: "Dodong test",
        caseNo: "Dodong Case",
        crimCaseNum: "Dodong CC",
        court: "Dodong Court",
        hearingStatus: "Dodong Hearing Status",
        hearingResult: "Dodong Hearing Result",
        nextHearing: "Dodong Next Hearing",
      },
      {
        name: "Dodong another one",
        caseNo: "Dodong Case",
        crimCaseNum: "Dodong CC",
        court: "Dodong Court",
        hearingStatus: "Dodong Hearing Status",
        hearingResult: "Dodong Hearing Result",
        nextHearing: "Dodong Next Hearing",
      },
      {
        name: "Dodong another two",
        caseNo: "Dodong Case",
        crimCaseNum: "Dodong CC",
        court: "Dodong Court",
        hearingStatus: "Dodong Hearing Status",
        hearingResult: "Dodong Hearing Result",
        nextHearing: "Dodong Next Hearing",
      },
      {
        name: "Dodong another three",
        caseNo: "Dodong Case",
        crimCaseNum: "Dodong CC",
        court: "Dodong Court",
        hearingStatus: "Dodong Hearing Status",
        hearingResult: "Dodong Hearing Result",
        nextHearing: "Dodong Next Hearing",
      },
    ];

    return pdls;
  };

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
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Case</th>
                    <th>Cc#</th>
                    <th>Court</th>
                    <th>Hearing Status</th>
                    <th>Hearing Result</th>
                    <th>Next Hearing</th>
                    <th>Buttons</th>
                  </tr>
                </thead>
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
                          <button className="btn btn-primary btn-sm">
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm">
                            Delete
                          </button>
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
                    />
                    <small id="nhError" className="error"></small>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-success" id="Submit" type="Submit">
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
