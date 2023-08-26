const btn = document.querySelector('.contact__form-btn')


btn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("object");

    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value
    let x = document.getElementById('privacy').checked;
    const privacyBox = document.querySelector('.contact__form-privacy')

    let body = 'email : ' + email + '<br/> wiadomość : ' + msg;

    if (x == false) {
        alert("Przed wysłaniem zaznacz zgodę")
        privacyBox.classList.add('privacy-box-negative')
    } else {
        privacyBox.classList.remove('privacy-box-negative')

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "encoregamesklep@gmail.com",
            Password: "2A4FE24BCF4A0293651BD450C00318D8C66E",
            To: 'encoregamesklep@gmail.com',
            From: "s-burakowski@wp.pl",
            Subject: "Wiadomość z formularza",
            Body: body
        }).then(
            message => alert("Twoja wiadomość została wysłana. Dziękuję i do usłyszenia"),
            document.getElementById('email').value = '',
            document.getElementById('msg').value = ''

        );

    }

})