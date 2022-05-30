<template>
	<div :class="$style.loader"></div>
</template>

<style module lang="scss">

.loader {
	height: 200px;
	width: 200px;
	margin: 20px auto;
	border-top: 4px solid #0a0a0a;
	border-right: 4px solid transparent;
	border-radius: 50%;
	animation: 1s spin linear infinite;
}

@keyframes spin {

	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
}

</style>