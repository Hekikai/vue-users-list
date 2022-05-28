<template>
	<router-link :to="{path: `/users/${paramId}`}">
		<div class="card">
			<slot></slot>
		</div>
	</router-link>
</template>

<script setup>

const props = defineProps({
	paramId: {
		type: Number,
		required: true
	}
});

</script>

<style scoped lang="scss">
@import '../../style/variables';
@import '../../style/mixins';

.card {
	@include heading;
	padding: $padding;
	margin-top: min(40px, 1vw);
	border: 1px solid $border-color;

	@media screen and(max-width: 712px) {
		font-size: 1.5rem;
	}
}

</style>