<template>
	<div class="form-group">
		<label class="form-group__label">
			<slot name="label"></slot>
		</label>
		<select
			class="form-group__input"
			v-model="inputValue"
			@input="$emit('update:modelValue', $event.target.value)"
		>
			<option disabled value="0">Select</option>
			<option
				v-for="option in options"
				:key="option"
				:value="option.value || option"
			>
				{{ option.name || option }}
			</option>
		</select>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

import { useCustomInput } from '@/component/input/useCustomInput';

export default defineComponent({
	emits: ['update:modelValue'],
	props: ['modelValue', 'options'],

	setup(props, { emit }) {
		return {
			inputValue: useCustomInput(props, { emit }),
		};
	},
});
</script>

<style lang="scss" scoped>
@import '@/style/shared/input.scss';
</style>
