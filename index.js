let btn = document.getElementById('myjs1');
btn.addEventListener('click',function(e){
    e.preventDefault()
    let myname = document.getElementById('myname').value; 
    let myemail = document.getElementById('myemail').value;
    let mytime = document.getElementById('mytime').value;
    let a = 100000;
    let b = 1000000;
    let myotp = Math.trunc(a+(b-a)*Math.random());
    console.log(myotp); 
    let body = 'NAME: '+myname+'<br> EMAIL: '+myemail+'<br> TIME: '+mytime+'<br> OTP: '+myotp;
    console.log(body);
    Email.send({
        Host : "smtp.gmail.com",
   		Username : "youremail@gmail.com",
    	password : "xyz",
    	To : myemail,
    	From : "youremail@gmail.com",
    	Subject : "Reservation Details",
    	Body : body
    }).then(
        alert("Mail Sent!")
    );
})
 


