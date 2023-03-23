var userpass = document.querySelector("[name='password']");
var username = document.querySelector("[name='username']");
var email = document.querySelector("[name='Email']");
var Confirm = document.querySelector("[name='Confirm']");
var Address = document.querySelector("[name='Address']");
var Phone = document.querySelector("[name='Phone']");
var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var s3 = document.querySelector(".s3");
var s4 = document.querySelector(".s4");
var s5 = document.querySelector(".s5");
var s6 = document.querySelector(".s6");
var link = document.querySelector(".oo");
var ii = document.querySelector(".ooo");
var dddd = document.querySelector(".dddd");
var linkk = document.querySelector(".oot");
var iii = document.querySelector(".ooot");
var ddd = document.querySelector(".ddd");

////////////////////////////////////////////////////
link.addEventListener("click", () => {
  ii.classList.toggle("fa-eye-slash");
  if (dddd.type === "password") {
    dddd.type = "text";
  } else {
    dddd.type = "password";
  }
});
linkk.addEventListener("click", () => {
  iii.classList.toggle("fa-eye-slash");
  if (ddd.type === "password") {
    ddd.type = "text";
  } else {
    ddd.type = "password";
  }
});

window.addEventListener("load", function () {
  username = this.document.querySelector("[name='username']");
  username.addEventListener("blur", function (e) {
    if (!isusenamevalid()) {
      username.className = "error";
    } else {
      username.className = "success";
    }
  });
  email = this.document.querySelector("[name='Email']");
  email.addEventListener("blur", function (e) {
    if (!isuseemailvalid()) {
      email.className = "error";
    } else {
      email.className = "success";
    }
  });

  ///////////////////////////////////////////////////////////////////////
  userpass = this.document.querySelector("[name='password']");
  userpass.addEventListener("blur", function (e) {
    if (!isusepassvalid()) {
      userpass.className = "error";
    } else {
      userpass.className = "success";
    }
  }); //end of blur for userpass

  Confirm = this.document.querySelector("[name='Confirm']");
  Confirm.addEventListener("blur", function (e) {
    if (Confirm.value !== userpass.value) {
      Confirm.className = "error";
    } else {
      Confirm.className = "success";
    }
  });
  Address = this.document.querySelector("[name='Address']");
  Address.addEventListener("blur", function (e) {
    if (!isuseAddressvalid()) {
      Address.className = "error";
    } else {
      Address.className = "success";
    }
  });
  Phone = this.document.querySelector("[name='Phone']");
  Phone.addEventListener("blur", function (e) {
    if (!isusePhonevalid()) {
      Phone.className = "error";
    } else {
      Phone.className = "success";
    }
  });

  document.forms[0].addEventListener("submit", function (e) {
    e.preventDefault(); // prevent the default form submission

    // check if the form is complete
    if (!(isusenamevalid() && isusepassvalid() && isuseemailvalid())) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Complete your Data first before submit!",
      });
    } else {
      // form is complete, show success message
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(function () {
        const url = `index2.html`;
        window.location.href = url;
      }, 2000);
    }

    // function to check if the form is complete
    function isFormComplete() {
      // check if all required fields have a value
      var requiredFields = document.querySelectorAll("[required]");
      for (var i = 0; i < requiredFields.length; i++) {
        if (!requiredFields[i].value) {
          return false;
        }
      }
      // form is complete
      return true;
    }

    // wait for five seconds (5000 milliseconds) before executing the code
    setTimeout(function () {
      // code to execute after five seconds
    }, 5000);
  });

  document.forms[0].addEventListener("reset", function (e) {
    if (!confirm("Are You Sure You Want To Clear ?")) {
      e.preventDefault();
    }
  }); //end of reset
}); //end of load
function isusenamevalid() {
  var usernamepattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
  return username.value.match(usernamepattern);
}

function isuseemailvalid() {
  var useremail =
    /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+@gmail\.com$/;
  return email.value.match(useremail);
}

function isusepassvalid() {
  var userpasspattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
  return userpass.value.match(userpasspattern);
}

function isuseAddressvalid() {
  var userAddresspattern =
    /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
  return Address.value.match(userAddresspattern);
}

function isusePhonevalid() {
  var userPhonepattern = /[\d+]{11,}$/;
  return Phone.value.match(userPhonepattern);
}

username.addEventListener("focus", () => {
  s1.classList.add("mmmm");
});
email.addEventListener("focus", () => {
  s2.classList.add("mmmm");
});

userpass.addEventListener("focus", () => {
  s3.classList.add("mmmm");
});
Confirm.addEventListener("focus", () => {
  s4.classList.add("mmmm");
});

Address.addEventListener("focus", () => {
  s5.classList.add("mmmm");
});
Phone.addEventListener("focus", () => {
  s6.classList.add("mmmm");
});
