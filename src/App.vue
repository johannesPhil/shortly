<template>
	<div id="app">
		<Navigation />
		<Hero />
		<Link />
		<Footer />
	</div>
</template>

<script>
	import Navigation from "./components/Navigation";
	import Hero from "./components/Hero";
	import Link from "./components/Link";
	import Footer from "./components/Footer";
	export default {
		name: "App",
		components: {
			Navigation,
			Hero,
			Link,
			Footer,
		},
	};
</script>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

	:root {
		--very-dark-violet: hsl(260, 8%, 14%);
		--dark-violet: hsl(257, 27%, 26%);
		--cyan: hsl(180, 66%, 49%);
		--hover-state: rgb(136, 247, 247);
		--red: hsl(0, 87%, 67%);
		--gray: hsl(0, 0%, 75%);
		--gray-violet: hsl(258, 7%, 63%);
		--dark-blue: hsl(255, 11%, 22%);
		--red: hsl(0, 87%, 67%);
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html,
	body {
		font-family: "Poppins", sans-serif;
		font-size: 18px;
		overflow-x: hidden;
	}

	img {
		width: 100%;
		height: 100%;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		cursor: pointer;
	}

	ul,
	li {
		list-style: none;
	}
	// #app {
	// 	font-family: Avenir, Helvetica, Arial, sans-serif;
	// 	-webkit-font-smoothing: antialiased;
	// 	-moz-osx-font-smoothing: grayscale;
	// 	text-align: center;
	// 	color: #2c3e50;
	// 	margin-top: 60px;
	// }

	.container {
		max-width: 1100px;
		margin: auto;
	}

	.flex {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.grid {
		display: grid;

		gap: 20px;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.btn {
		display: inline-block;
		padding: 10px 30px;
		background: var(--cyan);
		color: #fff;
		font-weight: bolder;
		cursor: pointer;
		border: none;
		transition: background-color 0.2s ease-in-out;
	}

	.btn:hover {
		background-color: var(--hover-state);
	}

	.btn-input {
		border-radius: 5px;
		transition: transform 0.3s ease-in-out;
	}

	.btn-input:active {
		transform: scale(0.8);
	}

	.btn-link {
		border-radius: 50px;
	}

	.logo {
		justify-self: flex-start;
	}

	.flex-between {
		justify-content: space-between;
	}

	.text-center {
		text-align: center;
	}

	.mt-1 {
		margin-top: 1rem;
	}

	.mt-2 {
		margin-top: 1.5rem;
	}
	.mt-3 {
		margin-top: 2rem;
	}
	.mt-4 {
		margin-top: 3rem;
	}
	.mt-5 {
		margin-top: 4rem;
	}

	.mx-1 {
		margin: 0 1rem;
	}

	.my-1 {
		margin: 1rem 0;
	}
	.my-2 {
		margin: 1.5rem 0;
	}
	.my-3 {
		margin: 2rem 0;
	}
	.my-4 {
		margin: 3rem 0;
	}
	.my-5 {
		margin: 4rem 0;
	}

	.p-1 {
		padding: 1rem;
	}
	.p-2 {
		padding: 1.5rem;
	}
	.p-3 {
		padding: 2rem;
	}
	.p-4 {
		padding: 3rem;
	}
	.p-5 {
		padding: 4rem;
	}

	.p-1 {
		padding: 1rem;
	}
	.py-2 {
		padding: 1.5rem 0;
	}
	.py-3 {
		padding: 2rem 0;
	}
	.py-4 {
		padding: 3rem 0;
	}
	.py-5 {
		padding: 4rem 0;
	}

	.bt-gray {
		border-top: inset 1px #fff;
	}

	.card {
		background: #fff;
		border-radius: 10px;
		margin: 10px;
		padding: 60px 30px;
		color: var(--gray-violet);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.heading {
		color: var(--very-dark-violet);
		font-weight: bolder;
	}
</style>
