//H1 change
document.getElementById("app").innerHTML="Welcome";
// write a function to connect to the listner
var form = document.getElementById("addForm");

function onSubmit(event) {
   event.preventDefault(); 
   const first= form.elements["f_name"].value;
   const last = form.elements["l_name"].value;
   const email = form.elements["email"].value;
   if (first == ""){
     document.getElementById("first").style.backgroundColor ="red";
     window.alert("please enter your first name. ");
   }else if( last == ""){
     if (first != ""){
       document.getElementById("first").style.backgroundColor ="white";   }
      document.getElementById("last").style.backgroundColor ="red";
      window.alert("please enter your last name. ");
   }else if (email == ""){
     if (first != ""){
       document.getElementById("last").style.backgroundColor ="white";   }
     document.getElementById("email").style.backgroundColor ="red";
     window.alert("Please enter your email. ");
   }else{
     if (first != ""){
       document.getElementById("email").style.backgroundColor ="white";   }
     window.alert(`hey ${first} ${last} ${email} you submitted a form`);
   }
}

//function that checks blank feilds

// attach function to the form "submit" event.
form.addEventListener('submit', onSubmit);