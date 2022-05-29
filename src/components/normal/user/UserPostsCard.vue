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

	&__heading {
		font: 700 17px/23.15px 'Open Sans', sans-serif;
		margin-bottom: 4px;

		@media screen and (max-width: 720px) {
			font: 14px/17px;
		}
	}

	&__description {
		font: 0.75rem/17px 'Open Sans', sans-serif;
	}
}

</style>