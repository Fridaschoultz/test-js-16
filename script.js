//mouseover() och onmouseout()
function over(mOver) {
    mOver.innerHTML = "May the force be with you!"
  }
  
  function out(mOut) {
    mOut.innerHTML = "Prova igen kompis!"
  }


//Onclick event med funktion
document.getElementById("btn1").onclick = displayDate;

function displayDate() {
  document.getElementById("date").innerHTML = Date();
}

//onsubmit med alert
function myFunction() {
    alert("Formuläret skickades");
  }

  //array cars
  const cars = ["Volvo", "BMW", "KIA", "skoda"];
    cars.push("ferrari");

    document.getElementById("array-cars").innerHTML = cars; 

    //switch sats - som sätter case efter tiden på dygnet
    const hour = new Date().getHours(); // med new date skapar vi en egen behållare i hour för vår tid, ny instans
    let message;
    switch (hour) {
        case 7, 8, 9, 10:
            message = "God Morgon!";
            break;
        case 11, 12, 13, 14, 15, 16:
            message = "God Eftermiddag!";
            break;
    
        default:
            message = "God Kvall!";
    }
    
    document.getElementById("switch").innerHTML = message;



  //Form validering med onsubmit

  function formValidation()
  {
      let message = [];
      let username = document.getElementById("username");
      let password = document.getElementById("password");
      let confirmedUsername = false; //boolean variabel kommer bli true när ett användarnamn skrivits in, annars är den false
      let confirmedPassword = false; //boolean variabel kommer bli true när alla kraven för password är uppfyllda, annars är den false
  
      if(username.value == "" || username.value == null) // att input fältet ska vara tomt som default innan vi skriver in något i input fältet = null
          message.push("Please input your username");
      else
          confirmedUsername = true;
  
      if(password.value.length < 6)
          message.push("Your password needs to atleast be 6 characters long");
      else if(password.value.length > 15)
          message.push("Your password can max be 15 characters long");
      else
          confirmedPassword = true;
  
      document.getElementById("demo").innerHTML = message;
  
      if(confirmedPassword == true && confirmedUsername == true)
          document.getElementById("demo").innerHTML = "Message has been sent!";
  }









