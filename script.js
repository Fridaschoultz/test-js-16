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
        case 7: case 8: case 9: case 10:
            message = "God Morgon!";
            break;
        case 11: case 12: case 13: case 14: case 15: case 16:
            message = "God Eftermiddag!";
            break;
        case 17: case 18: case 19: case 20: case 21: case 22: case 23:
                message = "God Kvall!";
                break;
        default:
            message = "God Natt";
            break;
    }
    
    document.getElementById("switch").innerHTML = message; 

    // if-sats
    /*
    const hour = new Date().getHours(); 
    let message;
    if(hour < 10)
    {
        message = "God Morgon!";
    }
    else if(hour <= 16)
    {
        message = "God Eftermiddag!";
    }
    else
    {
        message = "God KvÃ¤ll!";
    }
    
    document.getElementById("if").innerHTML = message;
    */
    



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









