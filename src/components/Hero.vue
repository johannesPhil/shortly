<template>
	<div class="hero">
		<div class="container grid">
			<div class="hero-text">
				<h1>More than just shorter links</h1>
				<p>
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<a class="btn btn-link mt-3" href="">Get Started</a>
			</div>
			<div class="hero-art">
				<img src="@/assets/images/illustration-working.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Hero",
	};
</script>

<style lang="scss" scoped>
	.hero {
		padding: 5%;
	}

	.hero .grid {
		grid-template-columns: 40% 40%;
		gap: 0;
	}

	.hero-art {
		margin-right: -280px;
	}

	.hero-text p {
		color: #333;
	}

	@media screen and (max-width: 768px) {
		.hero {
			margin-bottom: 10%;
		}
		.hero .grid {
			grid-template-columns: 1fr;
		}

		.hero-text {
			order: 2;
			text-align: center;
			padding: 0 5%;
		}
	}

	@media (max-width: 430px) {
		.hero {
			margin-bottom: 15%;
		}
	}
</style>
