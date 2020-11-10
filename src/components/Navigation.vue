<template>
	<div class="navbar">
		<div class="container flex">
			<div class="logo">
				<img src="@/assets/images/logo.svg" alt="" />
			</div>
			<div ref="navbar" class="navbar-links">
				<nav class="flex">
					<ul class="flex">
						<li><a class="nav-link" href="#features">Features</a></li>
						<li><a class="nav-link" href="#pricing">Pricing</a></li>
						<li><a class="nav-link" href="#resources">Resources</a></li>
					</ul>
					<ul class="flex">
						<li><a class="user-link" href="#">Sign In</a></li>
						<li><a class="user-link" href="#">Sign Out</a></li>
					</ul>
				</nav>
			</div>
			<div v-if="open" class="open" @click="toggleMenu">
				<div class="bar bar-1"></div>
				<div class="bar bar-2"></div>
				<div class="bar bar-3"></div>
			</div>
			<div v-if="close" class="close" @click="toggleMenu"></div>
		</div>
		<div v-if="isVisible" ref="navbar" class="navbar-mobile">
			<nav class="flex">
				<ul class="flex">
					<li><a class="nav-link" href="#features">Features</a></li>
					<li><a class="nav-link" href="#pricing">Pricing</a></li>
					<li><a class="nav-link" href="#resources">Resources</a></li>
				</ul>
				<ul class="flex">
					<li><a class="user-link" href="#">Sign In</a></li>
					<li><a class="user-link" href="#">Sign Out</a></li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Navigation",
		data() {
			return {
				isVisible: false,
				open: true,
				close: false,
			};
		},
		methods: {
			toggleMenu() {
				this.open = !this.open;
				this.close = !this.close;
				this.isVisible = !this.isVisible;
			},
		},
	};
</script>

<style lang="scss" scoped>
	a {
		display: block;
		cursor: pointer;
	}
	.navbar {
		position: relative;
		padding: 0 2.5%;
		margin: 30px 0;
		color: var(--dark-violet);
	}

	.navbar .flex {
		justify-content: flex-start;
	}

	.logo {
		margin-right: 40px;
	}

	.navbar-links {
		width: 100%;
	}

	.navbar-mobile {
		display: none;
		transition: display 0.7s ease;
	}

	.navbar-links .flex {
		justify-content: space-between;
	}

	li {
		margin: 0 15px;
	}

	.nav-link,
	.user-link {
		cursor: pointer;
		width: 100%;
		color: var(--gray);
		font-weight: 500;
		transition: all 0.7s ease;
	}

	.nav-link:hover {
		color: var(--dark-violet);
		font-weight: 700;
	}

	.user-link:hover {
		background: var(--cyan);
		padding: 10px 30px;
		cursor: pointer;
		color: #fff !important;
		border-radius: 50px;
	}

	.user-link:hover {
		color: var(--very-dark-violet);
	}

	.open {
		height: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
	}

	// .close {
	// 	height: 25px;
	// 	display: flex;
	// 	flex-direction: row;
	// 	justify-content: space-between;
	// 	cursor: pointer;
	// }

	.open:hover > .bar,
	.open:focus > .bar,
	.open:active > .bar {
		background: var(--dark-violet);
		transition: background 0.7s ease;
	}

	.bar {
		display: none;
		height: 2px;
		width: 30px;
		background: var(--gray);
	}

	.close {
		display: none;
		width: 30px;
		height: 30px;
		position: relative;
		cursor: pointer;
	}
	.close:after {
		content: "";
		height: 30px;
		border-left: 2px solid var(--gray);
		position: absolute;
		transform: rotate(45deg);
		left: 14px;
	}

	.close:before {
		content: "";
		height: 30px;
		border-left: 2px solid var(--gray);
		position: absolute;
		transform: rotate(-45deg);
		left: 14px;
	}

	.close:after:hover,
	.close:before:hover {
		border-left: 2px solid var(--very-dark-violet);
	}

	@media (max-width: 768px) {
		.navbar .flex {
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: flex-start;
		}

		ul,
		li {
			width: 100%;
			text-align: center;
		}

		ul {
			padding: 2.5% 0;
		}

		// ul.flex {
		// 	border: solid 1px #fff;
		// }

		li {
			margin: 2.5% 0;
		}

		.navbar-links {
			display: none;
		}

		.navbar-links .flex {
			flex-direction: column;
		}

		.navbar-mobile {
			display: block;
			background: var(--dark-violet);
			color: #fff;
			text-align: center;
			border-radius: 10px;
			padding: 5%;
			font-weight: bolder;
			transition: display 0.7s ease;
		}

		.nav-link,
		.user-link {
			color: #fff;
			font-weight: bold;
		}

		nav ul:nth-child(2) {
			border-top: inset 1px #fff;
		}

		.bar,
		.close {
			display: block;
		}
	}
</style>
