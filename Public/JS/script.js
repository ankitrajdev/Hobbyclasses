const navMob = document.querySelector('.nav-link-mob'); const navToggler = document.getElementById('nav-toggler'); const navCloser = document.getElementById('nav_close'); const navProfile = document.querySelector('.nav-profile'); const main = document.querySelector('main'); const navPerson = document.querySelector('#logmainbtn');

navToggler.addEventListener('click', function () { navMob.classList.toggle('active'); }); navCloser.addEventListener('click', function () { navMob.classList.remove('active'); }); navPerson.addEventListener('click', function () { navProfile.classList.toggle('expand'); }); main.addEventListener('click', function () { navProfile.classList.remove('expand'); });

function onSignIn(googleUser) { var profile = googleUser.getBasicProfile(); $("#userName").text(profile.getName()); $("#userEmail").text(profile.getEmail()); $("#userImage").attr('src', profile.getImageUrl()); $("#logmainbtn").css("display", "flex"); $(".g-signin2").css("display", "none");

}

function signOut() { var auth2 = gapi.auth2.getAuthInstance(); auth2.signOut().then(function () { alert("You are signout succesfully"); $(".g-signin2").css("display", "flex"); $("#logmainbtn").css("display", "none"); }); }

const form = document.querySelector(".main-contact-form"); const fullName = document.getElementById("input-name"); const email = document.getElementById("input-email"); const phone = document.getElementById("input-phone"); const mess = document.getElementById("input-message");

function sendEmail() { const bodyMessage = ` <p<strong>Full Name:</strong> ${fullName.value}</p> <p><strong>Email:</strong> ${email.value}</p> <p><strong>Phone Number:</strong> ${phone.value}</p> <p><strong>Message:</strong> ${mess.value}</p> `;

 Email.send({ Host: "smtp.elasticemail.com", Username: "ankitgame09@gmail.com", Password: "3B90AA843D8DCA9333F0808C684A7F36C4F9", To: 'ankitgame09@gmail.com', From: "ankitgame09@gmail.com", Subject: "Hobby Classes Contact Form.", Body: bodyMessage }).then( message => { if (message == "OK") { Swal.fire({ title: "Success!", text: "Message sent successfully!", icon: "success" }); form.reset(); } else{ Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!", footer: '<a href="#">Why do I have this issue?</a>' }); } } ); } form.addEventListener("submit", (e) => { e.preventDefault();

 sendEmail(); });