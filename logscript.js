var userpass = document.querySelector("[name='password']");
var username = document.querySelector("[name='username']");
var spanone = document.querySelector(".spanone");
var spantwo = document.querySelector(".spantwo");
window.addEventListener("load", function () {
  // select username : blur
  username = this.document.querySelector("[name='username']");
  username.addEventListener("blur", function (e) {
    if (!isusenamevalid()) {
      username.className = "error";
    } else {
      username.className = "success";
    }
  }); //end of blur for username
  //select userpass
  userpass = this.document.querySelector("[name='password']");
  userpass.addEventListener("blur", function (e) {
    if (!isusepassvalid()) {
      userpass.className = "error";
    } else {
      userpass.className = "success";
    }
  }); //end of blur for userpass

  document.forms[0].addEventListener("submit", function (e) {
    e.preventDefault(); // prevent the default form submission

    // check if the form is complete
    if (!(isusenamevalid() && isusepassvalid())) {
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

function isusepassvalid() {
  var userpasspattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
  return userpass.value.match(userpasspattern);
}
userpass.addEventListener("focus", () => {
  spantwo.classList.add("spantwoo");
});
username.addEventListener("focus", () => {
  spanone.classList.add("spanonee");
});
var link = document.querySelector(".oo");
var ii = document.querySelector(".ooo");
var dddd = document.querySelector(".dddd");

////////////////////////////////////////////////////
link.addEventListener("click", () => {
  ii.classList.toggle("fa-eye-slash");
  if (dddd.type === "password") {
    dddd.type = "text";
  } else {
    dddd.type = "password";
  }
});
