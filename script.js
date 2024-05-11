// ###############3 getting all input and select ############### \\

let city = document.querySelector("#city option");
let course = document.querySelector("#course option");
let campus = document.querySelector("#campus option");
let classOption = document.querySelector("#class option");
let gender = document.querySelector("#gender option");
let qualification = document.querySelector("#qualification option");
let laptop = document.querySelector("#laptop option");
let userName = document.querySelector("#userName");
let fatherName = document.querySelector("#fatherName");
let Email = document.querySelector("#Email");
let phone = document.querySelector("#phone");
let CNIC = document.querySelector("#CNIC");
let fatherCnic = document.querySelector("#fatherCnic");
let date = document.querySelector("#date");
let address = document.querySelector("#address");
let submitBtn = document.querySelector("#SubmitBtn");
let submitForm = document.querySelector("#submit-form");

function getRegistrationData() {
  city = city.value;
  course = course.value;
  campus = campus.value;
  classOption = classOption.value;
  gender = gender.value;
  qualification = qualification.value;
  laptop = laptop.value;
  userName = userName.value;
  fatherName = fatherName.value;
  Email = Email.value;
  phone = phone.value;
  CNIC = CNIC.value;
  fatherCnic = fatherCnic.value;
  date = date.value;
  address = address.value;

  submitBtn.addEventListener("click",()=>{
    submitForm.style.display = "flex";
  })

}
getRegistrationData();
