import { provide, Ref } from 'vue';

import { useGenericContext } from '@/provider/UseGenericContext';

import type { OxyFuelCalculator } from '@/model/OxyFuelCalculator';

const OxyFuelCalculatorProviderSymbol = Symbol('OxyFuelCalculator');

export function useOxyFuelCalculatorProvider(
	calculator: Ref<OxyFuelCalculator>
): void {
	provide(OxyFuelCalculatorProviderSymbol, calculator);
}

export function useOxyFuelCalculatorContext(): Ref<OxyFuelCalculator> {
	return useGenericContext(OxyFuelCalculatorProviderSymbol);
}
