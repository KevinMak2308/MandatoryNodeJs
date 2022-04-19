<script>
    
    function userLogout() {
        sessionStorage.clear();
        toastr.success("You have been logged out")
        window.location.href = "http://localhost:3000/auth/logout";
    };

    userLogout();

    /*let url  = "http://localhost:3000/auth/logout";
    async function userLogout() {

        let postLogoutRequest = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
        };

        return fetch(url, postLogoutRequest)
            .then(response => response.json())
            .then(toastr.success("You have been logged out"))
            .then(setTimeout(() => { window.location.href = "http://localhost:8080" }, 2000))
            .catch((error) => console.log(error));
    };*/


</script>

