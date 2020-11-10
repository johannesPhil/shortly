<template>
	<div class="main">
		<div class="container">
			<div class="link-form">
				<form @submit.prevent="shortenUrl" action="" class="grid">
					<div class="form-control">
						<input
							v-model="url"
							type="text"
							name="link"
							placeholder="Shorten a link here"
							:class="{ 'input-warning': hasError }"
						/>
					</div>
					<div class="form-control">
						<input type="submit" value="Shorten it!" class="btn btn-input " />
					</div>
				</form>
				<p v-if="error" class="error mt-1">
					{{ error }}
				</p>
				<div v-if="loading" class="loader-bg">
					<div class="loader"></div>
				</div>
			</div>
			<div v-if="link" class="result">
				<div class="grid">
					<div class="original">
						{{ link.original_link }}
					</div>
					<div class="generated">
						<input
							v-model="link.short_link"
							ref="short_link"
							type="text"
							name=""
							id="link"
							style="border:transparent;font-weight:bold;outline:none;text-align:center"
						/>
					</div>
					<button @click="copy" ref="copy" class="btn btn-input">Copy</button>
				</div>
			</div>
			<div class="text-center">
				<h2 class="features-heading heading">Advanced Statistics</h2>
				<div class="features-text">
					<p>
						Track how your links are performing across the web with our advanced
						statistics dashboard.
					</p>
				</div>
			</div>
			<div class="features">
				<div class="container grid">
					<div class="appendage"></div>
					<div class="feature card recognition">
						<div class="infographics">
							<img src="@/assets/images/icon-brand-recognition.svg" alt="" />
						</div>
						<h4 class="heading">Brand Recognition</h4>
						<p>
							Boost your brand recognition with each click. Generic links don't
							mean a thing. branded links help instill confidence in your
							content
						</p>
					</div>
					<div class="feature card records">
						<div class="infographics">
							<img src="@/assets/images/icon-detailed-records.svg" alt="" />
						</div>
						<h4 class="heading">Detailed Records</h4>
						<p>
							Gain insight into who is clicking your links. Knowing when and
							where people engage with your content helps inform better
							decisions.
						</p>
					</div>
					<div class="feature card customisable">
						<div class="infographics">
							<img src="@/assets/images/icon-fully-customizable.svg" alt="" />
						</div>
						<h4 class="heading">
							Fully Customisable
						</h4>
						<p>
							Improve brand awareness and content discoverability through
							customizable links, supercharging audience engagement
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="boost text-center mt-5">
			<h3 class="heading my-2">
				Boost your links today
			</h3>
			<a href="" class="btn btn-link">Get Started</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Link",
		data() {
			return {
				loading: false,
				API_BASE: "https://api.shrtco.de/v2/shorten?url=",
				url: "",
				error: "",
				hasError: false,
				link: "",
			};
		},
		methods: {
			shortenUrl() {
				if (!this.url) {
					this.error = "Please add a link";
					this.hasError = true;
					return;
				} else {
					this.loading = true;
					fetch(this.API_BASE + this.url)
						.then((response) => response.json())
						.then((result) => {
							this.loading = false;
							this.link = result.result;
							this.storeToLocal(this.link);
							console.log(this.link);
						});
				}
			},
			storeToLocal(link) {
				let { original_link, short_link } = link;

				let convertedUrl = {
					original_link,
					short_link,
				};

				if (localStorage.getItem("history") === null) {
					let storedHistory = [];

					storedHistory.push(convertedUrl);

					localStorage.setItem("history", JSON.stringify(storedHistory));
				} else {
					let storedHistory = JSON.parse(localStorage.getItem("history"));
					storedHistory.push(convertedUrl);
					localStorage.setItem("history", JSON.stringify(storedHistory));
				}
			},
			copy() {
				this.$refs.short_link.select();
				this.$refs.short_link.setSelectionRange(0, 9999);
				document.execCommand("copy");
				this.$refs.copy.innerText = "Copied!";
				this.$refs.copy.style.background = "var(--dark-violet)";
			},
		},
	};
</script>

<style lang="scss" scoped>
	@keyframes bgPosition {
		0%,
		100% {
			background-position: center;
		}
		20% {
			background-position: bottom left;
		}
		40% {
			background-position: bottom center;
		}
		60% {
			background-position: top center;
		}
		80% {
			background-position: top left;
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.main {
		width: 100%;
		background: var(--gray);
	}

	.link-form {
		position: relative;
		width: 70%;
		padding: 30px;
		top: -50px;
		margin: auto;
		background: hsla(258, 27%, 26%, 0.959);
		border-radius: 5px;
		z-index: 100;
		overflow: hidden;
	}

	.link-form::before {
		content: "";
		position: absolute;

		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("../assets/images/bg-boost-desktop.svg");
		background-repeat: no-repeat;
		animation: bgPosition 20s infinite ease;
		filter: invert(5%);
	}

	.link-form .grid {
		grid-template-columns: 4fr 1fr;
	}

	.form-control {
		height: 2rem;
	}

	.link-form input {
		width: 100%;
		height: 100%;
		border-radius: 5px;
		border: transparent;
	}

	.input-warning {
		border: solid 2px var(--red) !important;
	}

	form {
		position: relative;
	}

	input {
		// outline: none;
		font-size: 0.8rem;
	}

	form input[type="text"] {
		padding-left: 5px;
	}

	input[type="button"]:active {
		transform: scale(0.8);
	}

	.error {
		font-style: italic;
		position: relative;
		color: var(--red);
		z-index: 5;
	}

	.result {
		width: 70%;
		margin: auto;
		padding: 15px 30px;
		border-radius: 5px;
		background: #fff;
		font-size: 0.8rem;
		font-weight: 700;
		margin-top: -20px;
		margin-bottom: 70px;
	}

	.original {
		word-break: break-word;
	}

	.result .grid {
		grid-template-columns: 4fr 2fr 1fr;
	}

	.generated {
		color: var(--cyan);
	}

	.loader {
		border: 6px solid #fff;
		border-top: 6px solid var(--cyan);
		border-radius: 50%;
		width: 36px;
		margin: 10px auto;
		height: 36px;
		animation: spin 1s linear infinite;
	}

	.features {
		position: relative;
		overflow: visible;
		padding: 50px 0;
	}

	.features .grid {
		grid-template-columns: repeat(3, 1fr);
	}

	.feature {
		position: relative;
	}

	.records {
		top: 40px;
	}

	.customisable {
		top: 80px;
	}
	.recognition {
		animation: recognitionPulse 2s linear infinite;
	}

	.appendage {
		position: absolute;
		width: 70%;
		height: 10px;
		background: var(--cyan);
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
	}

	.infographics {
		position: absolute;
		top: -40px;
		width: 80px;
		height: 80px;
		padding: 15px;
		border-radius: 100%;
		background: var(--dark-violet);
	}

	.features-text {
		color: var(--dark-violet);
	}

	.boost {
		position: relative;
		padding: 30px;
		background: hsla(258, 27%, 26%, 0.959);
		z-index: 100;
		overflow: hidden;
	}

	.boost::before {
		content: "";
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("../assets/images/bg-boost-desktop.svg");
		background-repeat: no-repeat;
		animation: bgPosition 40s infinite ease-in-out;
		filter: invert(5%);
	}

	.boost .heading {
		color: #fff;
		font-weight: bolder;
	}

	.boost .btn,
	.boost .heading {
		position: relative;
	}

	@media (max-width: 500px) {
		.link-form,
		.result {
			width: 90%;
		}
		.link-form .grid {
			grid-template-columns: 1fr;
		}

		.boost::before {
			background-image: url("../assets/images/bg-boost-mobile.svg");
		}
	}

	@media (max-width: 768px) {
		.result .grid {
			grid-template-columns: 1fr;
			text-align: center;
		}
		.features .grid {
			grid-template-columns: 1fr;
		}

		.appendage {
			width: 10px;
			height: 80%;
			background: var(--cyan);
			top: 50%;
			left: 50%;
			transform: translateY(-50%);
		}

		.feature {
			text-align: center;
		}

		.infographics {
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
