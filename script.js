var namerror = document.getElementById("name-error")
var emailerror = document.getElementById("email-error")
var numbererror = document.getElementById("number-error")
var messageerror = document.getElementById("message-error")
var submiterror = document.getElementById("submit-error")

function validatename() {
    var name = document.getElementById("contact-name").value

    if (name.length == 0) {

        namerror.innerHTML = "Name is Required"
        namerror.classList.remove("green")
        return false

    }
    if (!name.match(/^[a-z,',-]+(\s)[a-z,',-]+$/i)) {

        namerror.innerHTML = "Write Full Name"
        namerror.classList.remove("green")
        return false  // false just shows that condition failed and is not met
    }
    namerror.innerHTML = "Valid"
    namerror.classList.add("green")

    return true
}

function validnumber() {
    var number = document.getElementById("contact-phone").value
    if (number.length == 0) {
        numbererror.innerHTML = "Number is Required"
        numbererror.classList.remove("green")
        return

    }
    if (number.length != 11) {
        numbererror.innerHTML = "Enter Valid Length"
        numbererror.classList.remove("green")
        return

    }
    if (!number.match(/^[0-9]{11}$/)) {
        numbererror.innerHTML = "Use Numbers Only"
        numbererror.classList.remove("green")
        return
    }
    numbererror.innerHTML = 'Valid'
    numbererror.classList.add("green")
    return
}

function validemail() {
    var mail = document.getElementById("contact-email").value

    if(mail.length == 0) {
        emailerror.innerHTML = "Email is Required"
        emailerror.classList.remove("green")
        return false
    }
    if(!mail.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {

        emailerror.innerHTML = "Use Correct Mail format "
        emailerror.classList.remove("green")
        return false
    }
    emailerror.innerHTML = "Valid"
    emailerror.classList.add("green")
    return true
}

function validmessage(){
    var message = document.getElementById("message").value
    var required=30
    var left=required-message.length
    // if(message.length<30){
    //     messageerror.innerHTML=`Message should have atleast 30 characters`
    //     messageerror.classList.remove("green")
    //     return false
    // }
    if(left>0){
        messageerror.innerHTML=`Message should have atleast ${left} more characters`
        messageerror.classList.remove("green")
        return false
    }
    messageerror.innerHTML="Valid"
    messageerror.classList.add("green")

}

function validateform(){
    if (messageerror.innerHTML!="Valid" || emailerror.innerHTML!="Valid" || numbererror.innerHTML!="Valid" || namerror.innerHTML!="Valid") {
        submiterror.innerHTML="Please Fill in Remaining Details "
        if(messageerror.innerHTML!="Valid"){
            validmessage()
        }
        if(emailerror.innerHTML!="Valid"){
            validemail()
        }
        if(numbererror.innerHTML!="Valid"){
            validnumber()
        }
        if(namerror.innerHTML!="Valid"){
            validatename()
        }
        return false
    }       
}
