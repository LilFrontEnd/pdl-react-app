import "./style.css";

function App() {
  return (
    <div class="app">
      <div class="app-title-container">
        <div class="app-title">
          <h4>BJMP ESCORT APP</h4>
          <small class="sad">Safekeeping and Development</small>
        </div>
        <div class="modal-btn">
          <div
            id="addNew"
            type="button"
            class="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#form"
          >
            <i class="fas fa-plus"></i>
            <span>Add PDL</span>
          </div>
        </div>
      </div>
      <div id="pdlTableList" class="col-md">
        <div class="row mt-4">
          <div class="col-12">
            <div id="search-btn">
              <div class="input-search">
                <input
                  id="search"
                  type="text"
                  class="search form-control"
                  placeholder="Search pdl here"
                />
              </div>
            </div>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table class="table table-bordered" id="crudTable">
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
                <tbody id="tbody"></tbody>
              </table>
            </div>
          </div>
        </div>
        <div></div>
        <div
          class="modal fade"
          id="form"
          data-bs-keyboard="false"
          tabindex="-1"
          data-bs-backdrop="static"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  PDL DATA
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row ">
                  <div class="for-group col-md-6 mb-3">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Enter Name"
                    />
                    <small id="nameError" class="error"></small>
                  </div>
                  <div class="for-group col-md-6 mb-3">
                    <label for="case1">Case</label>
                    <input
                      type="text"
                      name="case1"
                      class="form-control"
                      id="case1"
                      placeholder="Case of Pdl"
                    />
                    <small id="caseError" class="error"></small>
                  </div>
                  <div class="for-group col-md-6 mb-3">
                    <label for="crimCase">Cc#</label>
                    <input
                      type="text"
                      name="crimCase"
                      class="form-control"
                      id="crimCase"
                      placeholder="Enter Case Number"
                    />
                    <small id="ccError" class="error"></small>
                  </div>
                  <div class="for-group col-md-6 mb-3">
                    <label for="court1">Court</label>
                    <input
                      type="text"
                      name="court1"
                      class="form-control"
                      id="court1"
                      placeholder="RTC Court of Pdl"
                    />
                    <small id="courtError" class="error"></small>
                  </div>
                  <div class="for-group col-md-6 mb-3">
                    <label for="hearingStatus">Hearing Status</label>
                    <input
                      type="text"
                      name="hearingStatus"
                      class="form-control"
                      id="hearingStatus"
                      placeholder="Enter Hearing Status"
                    />
                    <small id="hsError" class="error"></small>
                  </div>
                  <div class="for-group col-md-6 mb-3">
                    <label for="hearingResult">Hearing Result</label>
                    <input
                      type="text"
                      name="hearingResult"
                      class="form-control"
                      id="hearingResult"
                      placeholder="Enter Hearing Result"
                    />
                    <small id="hrError" class="error"></small>
                  </div>
                  <div class="for-group col-md-6 mb-3">
                    <label for="nextHearing">Next Hearing</label>
                    <input
                      type="date"
                      name="nextHearing"
                      class="form-control"
                      id="nextHearing"
                      placeholder="Enter Next Hearing"
                    />
                    <small id="nhError" class="error"></small>
                  </div>
                </div>
                <div class="modal-footer">
                  <button class="btn btn-success" id="Submit" type="Submit">
                    Add Data
                  </button>
                  <button class="btn btn-primary" id="Update">
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
