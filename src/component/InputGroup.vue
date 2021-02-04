<template>
	<div class="group">
		<h2 class="group__header">
			<slot name="header"></slot>
		</h2>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.group {
	padding: 0.5rem 0rem;

	@media (min-width: 48rem) {
		border: 1px solid #bcc3ce;
		border-radius: 0.25rem;
		padding: 1rem;
		height: 100%;
	}

	&__header {
		font-size: 1.2rem;
		font-weight: 600;
		margin-top: -0.5rem;
		margin-bottom: 0.75rem;
	}
}
</style>
