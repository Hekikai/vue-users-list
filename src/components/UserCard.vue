<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import '../style/variables';

.card {
	font-family: 'Alegreya Sans SC', sans-serif;
	font-weight: 500;
	font-size: 2.1875rem;
	line-height: 40px;
	border: 1px solid $border-color;
	padding: max(20px, 1vw);
	margin-top: min(20px, 1vw);
}

</style>