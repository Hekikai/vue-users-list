<template>
	<div class="post">
		<h4 class="post__heading">
			{{ title }}
		</h4>
		<p class="post__description">
			{{ body.slice(0,50) }}...
		</p>
	</div>
</template>

<script setup>

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true
	}
})

</script>

<style scoped lang="scss">
@import "../../../style/mixins";
@import "../../../style/variables";

.post {
	border: $border;
	padding: $padding;
	transition: all 0.3s ease-in;

	&:hover {
		@include shadowOnHover
	}

	&__heading {
		font: 800 2rem/40px 'Open Sans', sans-serif;
		margin-bottom: 4px;

		@media screen and (max-width: 1400px) {
			font: 1rem/25px;
		}
	}

	&__description {
		font: 1.5rem/35px 'Open Sans', sans-serif;
	}
}

</style>