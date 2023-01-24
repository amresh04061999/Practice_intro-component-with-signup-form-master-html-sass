 function validateform() {
        let firstname = document.myform.firstname.value;
        let lastname = document.myform.lastname.value;
        let email = document.myform.email.value;
        let password = document.myform.password.value;
       // get id in input
        let getfirstname=document.getElementById("getfirstname");
        let getlastname=document.getElementById("getlastname");
        let getemail=document.getElementById("getemail");
        let getpassword=document.getElementById("getpassword");
        let getimageicon=document.getElementById("image-icon");
        let getimageicon1=document.getElementById("image-icon2");
        let getimageicon2=document.getElementById("image-icon3");
        let getimageicon3=document.getElementById("image-icon4");
        if (firstname == null || firstname == "") {
           document.getElementById("firstname").innerHTML="First Name cannot be empty";
           getfirstname.classList.replace("border-input","input-border");
           getimageicon.classList.replace("d-none","d-block");
        }  
        if (lastname == null || lastname == "") {
            document.getElementById("lastname").innerHTML="Last Name cannot be empty";
            getlastname.classList.replace("border-input","input-border");
            getimageicon2.classList.replace("d-none","d-block");
        } 
         if (email == null || email == "") {
            document.getElementById("email").innerHTML="Look Like this not a email"; 
            getemail.classList.replace("border-input","input-border");
            getimageicon3.classList.replace("d-none","d-block");

        } 
        if (password == null || password == "") {
            document.getElementById("password").innerHTML="Password cannot be Empty";
            getpassword.classList.replace("border-input","input-border");
            getimageicon4.classList.replace("d-none","d-block");
            return false;
        }
    }
