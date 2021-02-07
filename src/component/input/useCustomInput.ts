import Vue, { computed, defineComponent } from 'vue';

// @ts-ignore
export function useCustomInput(props, { emit }) {
	return computed({
		get: () => props.modelValue,
		set: (value) => emit('update:modelValue', value),
	});
}

export function defineCustomInput() {
	return defineComponent({
		emits: ['update:modelValue'],
		props: ['modelValue'],

		setup(props, { emit }) {
			return {
				inputValue: useCustomInput(props, { emit }),
			};
		},
	});
}
