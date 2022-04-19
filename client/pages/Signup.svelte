<script>
  
    let url = "http://localhost:3000/auth/signup";

    async function userSignup() {
      let email = document.getElementById("inpEmail").value
      let password = document.getElementById("inpPassword").value

      let postLoginRequest = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          "email": email,
          "password": password,
        })
      }


      return fetch(url, postLoginRequest)
        .then(response => response.json())
        .then(data => userValidation(data))
        .catch(error => console.log(error));
    
    }

    

    function userValidation(data) {
      console.log(data);
      if (data) {
        toastr.success("Signup Success")
        setTimeout(() => { window.location.href = "http://localhost:8080" }, 2000);
      } else {
        toastr.warning("Unable to Signup");
      }
    }

    </script>

    <h1> Signup </h1>

    <input id="inpEmail" type="" placeholder="email">
    <input id="inpPassword" type="password" placeholder="password">
    <button on:click={userSignup}>SignUp</button>
