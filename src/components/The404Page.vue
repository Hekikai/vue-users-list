<template>
	<div class="not-found">
		<h1 class="not-found__heading">Page not found :(</h1>
		<router-link to="/users">
			Go to the home!
		</router-link>
	</div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "../style/mixins";

.not-found {
	margin: 20px auto;
	text-align: center;

	&__heading {
		@include heading;
		padding: 20px;
	}
}

</style>