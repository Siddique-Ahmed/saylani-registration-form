// ###############3 getting all input and select ############### \\

let city = document.querySelector("#city");
let course = document.querySelector("#course");
let campus = document.querySelector("#campus");
let classOption = document.querySelector("#class");
let gender = document.querySelector("#gender");
let qualification = document.querySelector("#qualification");
let laptop = document.querySelector("#laptop");
let userName = document.querySelector("#userName");
let fatherName = document.querySelector("#fatherName");
let Email = document.querySelector("#Email");
let phone = document.querySelector("#phone");
let CNIC = document.querySelector("#CNIC");
let fatherCnic = document.querySelector("#fatherCnic");
let dob = document.querySelector("#date");
let address = document.querySelector("#address");
let userPic = document.querySelector("#userPicture");
let submitBtn = document.querySelector("#SubmitBtn");
let submitForm = document.querySelector("#submit-form");
let myForm = document.querySelector("#myForm")

function getStudentData() {
  let cityValue = city.value;
  let courseValue = course.value;
  let campusValue = campus.value;
  let classOptionValue = classOption.value;
  let genderValue = gender.value;
  let qualificationValue = qualification.value;
  let laptopValue = laptop.value;
  let fatherNameValue = fatherName.value;
  let userNameValue = userName.value;
  let EmailValue = Email.value;
  let phoneValue = phone.value;
  let CNICValue = CNIC.value;
  let fatherCnicValue = fatherCnic.value;
  let dobValue = dob.value;
  let addressValue = address.value;
  let userPicValue = userPic.value;

  return {
    cityValue,
    courseValue,
    campusValue,
    classOptionValue,
    genderValue,
    qualificationValue,
    laptopValue,
    fatherNameValue,
    userNameValue,
    EmailValue,
    phoneValue,
    CNICValue,
    fatherCnicValue,
    dobValue,
    addressValue,
    userPicValue,
  }
}

function GettingData() {
  // Getting getStudentData funtion to save data in localStorage //
  let studentData = getStudentData();

  // saving data in localStorage //
  let getCityValue = localStorage.setItem("cityValue", studentData.cityValue)
  let getCourseValue = localStorage.setItem("courseValue", studentData.courseValue)
  let getCampusValue = localStorage.setItem("campusValue", studentData.campusValue)
  let getClassOptionValue = localStorage.setItem("classOptionValue", studentData.classOptionValue)
  let getGenderValue = localStorage.setItem("genderValue", studentData.genderValue)
  let getQualificationValue = localStorage.setItem("qualificationValue", studentData.qualificationValue)
  let getLaptopValue = localStorage.setItem("laptopValue", studentData.laptopValue)
  let getFatherNameValue = localStorage.setItem("fatherNameValue", studentData.fatherNameValue)
  let getUserNameValue = localStorage.setItem("userNameValue", studentData.userNameValue)
  let getEmailValue = localStorage.setItem("EmailValue", studentData.EmailValue)
  let getPhoneValue = localStorage.setItem("phoneValue", studentData.phoneValue)
  let getCNICValue = localStorage.setItem("CNICValue", studentData.CNICValue)
  let getFatherCnicValue = localStorage.setItem("fatherCnicValue", studentData.fatherCnicValue)
  let getDobValue = localStorage.setItem("dobValue", studentData.dobValue)
  let getAddressValue = localStorage.setItem("addressValue", studentData.addressValue)
  let getUSerPicValue = localStorage.setItem("userPicValue", studentData.userPicValue)
}


function formValidation() {
 
let validCity =  city.value;
let validCourse = course.value;
let validCampus = campus.value;
let validClassOption = classOption.value;
let validGender = gender.value;
let validQualification = qualification.value;
let validLaptop = laptop.value;
let validUserName = userName.value;
let validFatherName = fatherName.value;
let validEmail = Email.value;
let validPhone = phone.value;
let validCnic = CNIC.value;
let validFatherCnic = fatherCnic.value;
let validDob = dob.value;
let validAddress = address.value;
let validUserPic = userPic.value;

if(validFatherName === ""){
  fatherName.style.border = "1px solid red";
}
  
}

// ########### submit button ############# \\

submitBtn.addEventListener("click", () => {
  GettingData();
  formValidation();
  submitForm.style.display = "flex";
});
