
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('click', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        let registerCard = document.getElementById("card")
        let successCard = document.getElementById("success-card")
        let dismissBtn = document.getElementById("goto-form-btn")
        let submitBtn = document.getElementById("submit-btn")
        let emailField = document.getElementById("email").value
        let emailText = document.getElementById("email-text")


        submitBtn.addEventListener("click", () => {
          registerCard.style.cssText = "display: none;";
          successCard.style.cssText = "display: block;";
          emailText.append(emailField);
        })
        dismissBtn.addEventListener("click", () => {
          successCard.style.cssText = "display: none;";
          registerCard.style.cssText = "display: flex;";
        })
      }

      form.classList.add('was-validated')
    }, false)
  })



  // normal code

})()