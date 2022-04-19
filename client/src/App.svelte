<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Login from "../pages/Login.svelte";
	import Signup from "../pages/Signup.svelte";
	import Logout from "../pages/Logout.svelte";
</script>

<main>
	<h1>Welcome!</h1>

	
	
	<Router>
		<nav>
			<Link to="/auth/signup"> Not a User - Signup</Link>
			<br>
			<Link to="/auth/login"> Already a User - Login</Link>
			<br>
			<Link to="/auth/logout"> Logout </Link> 
		</nav>

			<Route path="/auth/signup" component={Signup} />
			<Route path="/auth/login" component={Login}/>
			<Route path="/auth/logout" component={Logout}/>
	</Router>	
</main>



<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>