<template>
	<router-link :to="{path: `${route.path}/${paramId}`}">
		<div class="card">
			<slot></slot>
		</div>
	</router-link>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
	paramId: {
		type: Number,
		required: true
	}
});

</script>

<style scoped lang="scss">
@import '../../../style/variables';
@import '../../../style/mixins';

.card {
	@include heading(800, 50px, 4rem);
	padding: $padding;
	margin-top: min(40px, 1vw);
	border: 1px solid $border-color;
	transition: all 0.3s ease-in;

	&:hover {
		@include shadowOnHover;
	}

	@media screen and(max-width: 712px) {
		font-size: 3rem;
	}
}

</style>