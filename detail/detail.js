let userImg = document.querySelector("#userImg");
let userName = document.querySelector("#userName");
let userCourse = document.querySelector("#userCourse");
let userRollNumber = document.querySelector("#userRollNumber");
let username = document.querySelector("#username");
let fatherName = document.querySelector("#fatherName");
let cnic = document.querySelector("#cnic");
let cardRollNumber = document.querySelector(".card-rollnumber");
let batchName = document.querySelector("#batch");

function gettingDataFromAnotherPage() {
  let getImg = localStorage.getItem("userPicValue");
  let getName = localStorage.getItem("userNameValue");
  let getCourse = localStorage.getItem("courseValue");
  let getuserName = localStorage.getItem("userNameValue");
  let getFaterName = localStorage.getItem("fatherNameValue");
  let getCnic = localStorage.getItem("CNICValue");
  let getRollNumber = localStorage.getItem("Roll No");
  let getUserPic = localStorage.getItem("userPicValue");

  return {
    getImg,
    getName,
    getCourse,
    getuserName,
    getFaterName,
    getCnic,
    getRollNumber,
    getUserPic,
  };
}
console.log(gettingDataFromAnotherPage());


function addInForm(){

  let studentData = gettingDataFromAnotherPage();
  let imgUrl = studentData.getImg;

    userImg.innerHTML = `<img src="${imgUrl}"></img>`
  
  userName.innerText = `${studentData.getName}`
  username.innerText = `${studentData.getuserName}`
  fatherName.innerText = `${studentData.getFaterName}`
  cnic.innerText = `${studentData.getCnic}`
  cardRollNumber.innerText = `${studentData.getRollNumber}`

  if(studentData.getCourse === "Phython"){
    userRollNumber.innerText = "phy";
    batchName.innerText = "phy";
  }else if(studentData.getCourse === "Graphic Desigining"){
    userRollNumber.innerText = "GD";
    batchName.innerText = "GD";
  }else if(studentData.getCourse === "Web And App Development"){
    userRollNumber.innerText = "WMA";
    batchName.innerText = "WMA";
  }else if(studentData.getCourse == "Female Web And App Development"){
    userRollNumber.innerText = "FWMA";
    batchName.innerText = "FWMA";
  }

}

addInForm()