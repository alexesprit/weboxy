<template>
	<input-group>
		<template v-slot:header>Settings</template>

		<custom-select
			:options="availableFuels"
			:modelValue="fuel"
			@input="$emit('update:fuel', $event.target.value)"
		>
			<template v-slot:label>Fuel gas</template>
		</custom-select>
	</input-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import InputGroup from '@/component/InputGroup.vue';
import CustomSelect from '@/component/input/CustomSelect.vue';

export default defineComponent({
	components: { CustomSelect, InputGroup },
	props: {
		availableFuels: {
			type: Array,
			required: true,
		},
		fuel: {
			type: String,
			required: true,
		},
	},
});
</script>
