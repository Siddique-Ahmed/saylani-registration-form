let userImg = document.querySelector("#userImg");
let userName = document.querySelector("#userName");
let userCourse = document.querySelector("#userCourse");
let userRollNumber = document.querySelector("#userRollNumber");
let username = document.querySelector("#username");
let fatherName = document.querySelector("#fatherName");
let cnic = document.querySelector("#cnic");

function gettingDataFromAnotherPage() {
  let getImg = localStorage.getItem("userPicValue");
  let getName = localStorage.getItem("userNameValue");
  let getCourse = localStorage.getItem("courseValue");
  let getuserName = localStorage.getItem("userNameValue");
  let getFaterName = localStorage.getItem("fatherNameValue");
  let getCnic = localStorage.getItem("CNICValue");
  let getRollNumber = localStorage.getItem("userPicValue");

  return {
    getImg,
    getName,
    getCourse,
    getuserName,
    getFaterName,
    getCnic,
    getRollNumber,
  };
}
console.log(gettingDataFromAnotherPage());


function addInForm(){

  let studentData = gettingDataFromAnotherPage();
  // let imgUrl = studentData.getImg;

  // userImg.innerHTML = `<img src="${imgUrl}"></img>`
  // userRollNumber.innerText = `${studentData.getImg}`
  userCourse.innerText = `${studentData.getCourse}`
  userName.innerText = `${studentData.getName}`
  username.innerText = `${studentData.getuserName}`
  fatherName.innerText = `${studentData.getFaterName}`
  cnic.innerText = `${studentData.getCnic}`

}

addInForm()