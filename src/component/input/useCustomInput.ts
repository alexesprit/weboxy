import Vue, { computed, defineComponent } from 'vue';

// @ts-ignore
export function useCustomInput(props, { emit }) {
	return computed({
		get: () => props.value,
		set: (value) => emit('update:value', value),
	});
}

export function defineCustomInput() {
	return defineComponent({
		emits: ['update:value'],
		props: ['value'],

		setup(props, { emit }) {
			return {
				inputValue: useCustomInput(props, { emit }),
			};
		},
	});
}
