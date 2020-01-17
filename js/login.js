$(() => {
  $("#submitButton").click(sendLoginData);
});

const loginSuccessRedirect = ( data ) => {
  window.location.replace("admin.html");
};

const sendLoginData = () => {
  let inputEmail = $("#inputEmail").val();
  let inputPassword = $("#inputPassword").val();

  let invalidElement = document.createElement("div");
  let errMessage = document.createElement("span");
  errMessage.innerText="Please enter valid email / password";
  errMessage.setAttribute("style","color:red")
  invalidElement.appendChild(errMessage);

  if(!inputEmail || !inputPassword || inputEmail == '' || inputPassword == ''){
    if(!$("span").length)
      $("#loginForm").prepend(invalidElement);
  }
  else {
    //send form to server
    let loginData = {
      email: inputEmail,
      password: inputPassword
    };
    /*
    const ajaxHandle = $.ajax({
      url: '/login',
      method: 'POST',
      data: loginData,
      success: (data) => {
        loginSuccessRedirect(data);
      },
      error: (obj, err) => {
        console.log(err);
      }
    }); */
    loginSuccessRedirect(loginData);
  }
};

