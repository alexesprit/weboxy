<template>
	<div class="container">
		<app-header />
		<app-settings
			:availableFuels="availableFuels"
			v-model:fuel="fuel"
			class="settings"
		/>
		<advanced-calculator-view :fuelGasName="fuelName" />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import AdvancedCalculatorView from '@/view/AdvancedCalculatorView.vue';
import AppSettings from '@/component/AppSettings.vue';
import AppHeader from '@/component/AppHeader.vue';

import { FuelType } from '@/model/FuelType';

import { useOxyFuelCalculatorProvider } from '@/provider/OxyFuelCalculatorProvider';
import {
	createOxyFuelCalculator,
	getAvailableFuels,
} from '@/model/OxyFuelCalculatorFactory';
import { useI18n } from 'vue-i18n';

const defaultFuel = FuelType.Propane;

export default defineComponent({
	components: {
		AdvancedCalculatorView,
		AppSettings,
		AppHeader,
	},

	setup() {
		const { fuel, fuelName } = useFuel();
		const { availableFuels } = useAvalableFuels();

		const calculator = computed(() => {
			return createOxyFuelCalculator(fuel.value);
		});
		useOxyFuelCalculatorProvider(calculator);

		return { fuel, fuelName, availableFuels };
	},
});

function useFuel() {
	const fuel = ref(defaultFuel);
	const fuelName = computed(() => fuel.value);

	return { fuel, fuelName };
}

function useAvalableFuels() {
	const { t } = useI18n();

	const availableFuels = getAvailableFuels().map((fuel) => {
		return { name: t(fuel), value: fuel };
	});

	return { availableFuels };
}
</script>

<style lang="scss">
@import '@/style/index.scss';

.container {
	max-width: 48em;
	margin: 0 auto;
	padding: 2rem;

	@media (max-width: 48em) {
		padding: 1.5rem;
		max-width: 30em;
	}
}

.settings {
	margin-bottom: 1rem;
}
</style>
