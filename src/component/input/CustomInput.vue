<template>
	<div class="form-group">
		<label class="form-group__label">
			<slot name="label"></slot>
		</label>
		<input class="form-group__input" type="input" v-model="inputValue" />
	</div>
</template>

<script>
import { defineCustomInput } from '@/component/input/useCustomInput';

export default defineCustomInput();
</script>

<style lang="scss" scoped>
@import '@/style/shared/input.scss';
</style>
