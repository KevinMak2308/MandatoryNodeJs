<script>
    let url = "http://localhost:3000/auth/login";

    async function userLogin() {
        let email = document.getElementById("inpEmail").value;
        let password = document.getElementById("inpPassword").value;

        let postLoginRequest = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };

        return fetch(url, postLoginRequest)
            .then(response => response.json())
            .then(data => userValidation(data))
            .then(postSignupMail())
            .catch((error) => console.log(error));
    }

    let contactUrl = "http://localhost:3000/contact";

      async function postSignupMail() {
        let postSignUpEmail = {
          method: "POST",
          headers: {
            "contant-type": "application/json"
          }
        }

        return fetch(contactUrl, postSignUpEmail)
        .then(response => response.json())
        .catch(error => console.log(error));
      }

    function userValidation(data) {
      console.log(data);
      if (data) {
        toastr.success("Login Success")
        setTimeout(() => { window.location.href = "http://localhost:8080" }, 2000);
      } else {
        toastr.warning("Unable to Login");
      }
    }
</script>

<h1> Login </h1>

<input id="inpEmail" type="email" placeholder="email" />
<input id="inpPassword" type="password" placeholder="password" />
<button on:click={userLogin}>login</button>