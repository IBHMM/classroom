
String.prototype.toMail = function () {
    let email = this.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");


    if (!email.toLowerCase().includes("@gmail.com")) {
        email += "@hotmail.com"
    }

    console.log(email)
}

"biufqdwegr8743__..,,".toMail()

