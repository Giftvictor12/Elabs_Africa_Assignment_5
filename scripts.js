// alert box 
// Displays an alert dialog box with a message.

function myFunction() {
    alert("i am an alert box!");
  }




  // confirmation box 
  // Displays a confirmation dialog box with OK and Cancel. 

  function myConfirmation() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }




  // prompt 
  // Displays a prompt dialog box for user input

  function myPrompt() {
    let text;
    let person = prompt("Please enter your name:", "Gift Victor");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("prompt").innerHTML = text;
  }



  // Timers and Delay

  function myTimer() {
    alert('Hello Welcome Gift');
  }


//timer out 

const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("timeout").innerHTML = "Welcome Victor"
}

function myStopFunction() {
  clearTimeout(myTimeout);
}

// set and stop intervals 
// Set and Clears an interval set .

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("setstop").innerHTML = date.toLocaleTimeString();
}

function myStop() {
  clearInterval(myInterval);
}

// windows open method 
function myWindows() {
    window.open("https://www.facebook.com");
  }


  
  // open window and close window
  // Open and Closes the browser window 

  let myWindow;

function openWin() {
  myWindow = window.open("", "", "width=200,height=100");
}

function closeWin() {
  myWindow.close();
}

// windows.location 

function getURL() {
    alert("The URL of this page is: " + window.location.href);
}


//windows.history forward and backward
//Provides methods for interacting with the browser history. 

function goBack() {
    window.history.back()
  }

  function goForward() {
    window.history.forward()
  }
