// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  child,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALjfJ2ogMusoywAB5NCVi3rbN4kqV2lZg",
  authDomain: "my-projects-4fc97.firebaseapp.com",
  databaseURL: "https://my-projects-4fc97-default-rtdb.firebaseio.com",
  projectId: "my-projects-4fc97",
  storageBucket: "my-projects-4fc97.appspot.com",
  messagingSenderId: "642117591202",
  appId: "1:642117591202:web:73e43b8b71ef16d28cb7fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// validate form inputs before submitting
function validateForm() {
  const name = document.getElementById("name").value;
  const case1 = document.getElementById("case1").value;
  const crimCase = document.getElementById("crimCase").value;
  const court1 = document.getElementById("court1").value;
  const hearingStatus = document.getElementById("hearingStatus").value;
  const hearingResult = document.getElementById("hearingResult").value;
  const nextHearing = document.getElementById("nextHearing").value;

  let hasNoError = true;

  document.getElementById("nameError").innerHTML = "";
  document.getElementById("caseError").innerHTML = "";
  document.getElementById("ccError").innerHTML = "";
  document.getElementById("courtError").innerHTML = "";
  document.getElementById("hsError").innerHTML = "";
  document.getElementById("hrError").innerHTML = "";
  document.getElementById("nhError").innerHTML = "";

  if (name == "") {
    document.getElementById("nameError").innerHTML = "Name is required!";
    hasNoError = false;
  }
  if (case1 == "") {
    document.getElementById("caseError").innerHTML = "Pdl case is required!";
    hasNoError = false;
  }
  if (crimCase == "") {
    document.getElementById("ccError").innerHTML = "Criminal case is required!";
    hasNoError = false;
  }
  if (court1 == "") {
    document.getElementById("courtError").innerHTML = "RTC Court is required!";
    hasNoError = false;
  }
  if (hearingStatus == "") {
    document.getElementById("hsError").innerHTML =
      "Pdl Hearing status is required!";
    hasNoError = false;
  }
  if (hearingResult == "") {
    document.getElementById("hrError").innerHTML =
      "Pdl Haering result is required!";
    hasNoError = false;
  }
  if (nextHearing == "") {
    document.getElementById("nhError").innerHTML = "Date is required!";
    hasNoError = false;
  }
  return hasNoError;
}

// function to show data
async function showData() {
  // const dbRef = ref(database, 'pdlData');

  const dbRef = ref(database, "pdlData");

  let html = "";

  onValue(
    dbRef,
    (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        html += "<tr>";
        html += "<td>" + childData.Name + "</td>";
        html += "<td>" + childData.Case + "</td>";
        html += "<td>" + childData.Criminal_Case_Number + "</td>";
        html += "<td>" + childData.Court + "</td>";
        html += "<td>" + childData.Hearing_Status + "</td>";
        html += "<td>" + childData.Hearing_Result + "</td>";
        html += "<td>" + childData.Next_Hearing + "</td>";
        html +=
          '<td><button id= "deletData" onclick= "deleteData(' +
          childKey +
          ')" class="btn btn-danger btn-sm">Delete</button><button onclick="updateData(' +
          childKey +
          ')" class="btn btn-warning m-2 btn-sm" data-bs-toggle="modal" data-bs-target="#form">Edit</button></td>';
        html += "</tr>";
      });

      document.querySelector("#crudTable tbody").innerHTML = html;
    },
    {
      onlyOnce: true,
    }
  );
}

// Loads all data from local storage when document or page loaded
document.onload = showData();

// Declaring variables for search filter
const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("tbody tr");

// Search filter function
searchInput.addEventListener("keyup", function (event) {
  const query = event.target.value.toLowerCase();
  rows.forEach((row) => {
    row.querySelector("td").textContent.toLowerCase().startsWith(query)
      ? (row.style.display = "")
      : (row.style.display = "none");
  });
});

// function to add data to local storage
Submit.addEventListener("click", (e) => {
  // if form is validate
  if (validateForm() == true) {
    const pdlId = push(child(ref(database), "pdlData")).key;

    set(ref(database, "pdlData/" + pdlId), {
      Name: document.getElementById("name").value,
      Case: document.getElementById("case1").value,
      Criminal_Case_Number: document.getElementById("crimCase").value,
      Court: document.getElementById("court1").value,
      Hearing_Status: document.getElementById("hearingStatus").value,
      Hearing_Result: document.getElementById("hearingResult").value,
      Next_Hearing: document.getElementById("nextHearing").value,
    })
      .then(() => {
        // Data saved successfully!
        swal({
          title: "Success!",
          text: "Data successfully submitted!",
          icon: "success",
          button: false,
        });
        setTimeout(() => {
          location.reload();
        }, 1100);
      })
      .catch((error) => {
        // The write failed...
        // validateForm() = false
      });
  }
});

// funtion to delete data from local storage
//  document.querySelector('.btn .btn-danger') = deleteData;
// let deleteData = document.querySelector('.btn .btn-danger');
// deleteData.addEventListener('click', function () {
//   const dbRef = ref(database, "pdlData");
//   console.log(dbRef);

//   remove(dbRef).then(() => {
//     console.log("location removed");
//     showData();
//   });
// })
// const deleteData = document.getElementById('deleteData');
// console.log(deleteData);
document.addEventListener('click', deleteData);

function deleteData() {
  
  // const dbRef = ref(database, "pdlData/" + e.target.pdlId);
  // remove(dbRef).then(() => {
  //   console.log("location removed");
    
  // });
  // pdlId = "" 
  
  // remove(ref(database, "pdlData/" + pdlId), {
  //   Name: document.getElementById("name").value,
  //   Case: document.getElementById("case1").value,
  //   Criminal_Case_Number: document.getElementById("crimCase").value,
  //   Court: document.getElementById("court1").value,
  //   Hearing_Status: document.getElementById("hearingStatus").value,
  //   Hearing_Result: document.getElementById("hearingResult").value,
  //   Next_Hearing: document.getElementById("nextHearing").value,
  // })

  // const dbRef = ref(database, "pdlData/");

  // remove(dbRef).then(() => {
  //   console.log("location removed");
  // });

  // let userRef = this.database.ref('pdlData/' + pdlId);
  //   userRef.remove()
  

  
  


  // let pdlList;
  // if (localStorage.getItem("pdlList") == null) {
  //   pdlList = [];
  // } else {
  //   pdlList = JSON.parse(localStorage.getItem("pdlList"));
  // }
  // confirmation for deleting data
  // swal({
  //   title: "Are you sure?",
  //   text: "Once deleted, you will not be able to recover this file!",
  //   icon: "warning",
  //   buttons: true,
  //   dangerMode: true,
  // }).then((willDelete) => {
  //   if (willDelete) {
  //     pdlList.splice(index, 1);
  //     localStorage.setItem("pdlList", JSON.stringify(pdlList));
  //     showData();

  //     swal("Poof! PDL file has been deleted!", {
  //       icon: "success",
  //     });
  //   } else {
  //     swal("PDL file is safe!");
  //   }
  // });
}

// funtion to update/edit data in local storage
function updateData(index) {
  // Submit button will hide and Update button will show for updating of data in local storage
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  let pdlList;
  if (localStorage.getItem("pdlList") == null) {
    pdlList = [];
  } else {
    pdlList = JSON.parse(localStorage.getItem("pdlList"));
  }

  document.getElementById("name").value = pdlList[index].name;
  document.getElementById("case1").value = pdlList[index].case1;
  document.getElementById("crimCase").value = pdlList[index].crimCase;
  document.getElementById("court1").value = pdlList[index].court1;
  document.getElementById("hearingStatus").value = pdlList[index].hearingStatus;
  document.getElementById("hearingResult").value = pdlList[index].hearingResult;
  document.getElementById("nextHearing").value = pdlList[index].nextHearing;

  document.querySelector("#Update").onclick = () => {
    if (validateForm() == true) {
      pdlList[index].name = document.getElementById("name").value;
      pdlList[index].case1 = document.getElementById("case1").value;
      pdlList[index].crimCase = document.getElementById("crimCase").value;
      pdlList[index].court1 = document.getElementById("court1").value;
      pdlList[index].hearingStatus =
        document.getElementById("hearingStatus").value;
      pdlList[index].hearingResult =
        document.getElementById("hearingResult").value;
      pdlList[index].nextHearing = document.getElementById("nextHearing").value;

      localStorage.setItem("pdlList", JSON.stringify(pdlList));

      location.reload();
    }
  };
}
