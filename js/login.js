$(() => {
  $("#submitButton").click(sendLoginData);
});

const loginSuccessRedirect = ( id, token ) => {

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
    loginSuccessRedirect(inputEmail, inputPassword);
  }
};

