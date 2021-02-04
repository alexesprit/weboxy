import { provide } from 'vue';

import { useGenericContext } from '@/provider/UseGenericContext';

import type { OxyFuelCalculator } from '@/model/OxyFuelCalculator';

const OxyFuelCalculatorProviderSymbol = Symbol('OxyFuelCalculator');

export function useOxyFuelCalculatorProvider(
	calculator: OxyFuelCalculator
): void {
	provide(OxyFuelCalculatorProviderSymbol, calculator);
}

export function useOxyFuelCalculatorContext(): OxyFuelCalculator {
	return useGenericContext(OxyFuelCalculatorProviderSymbol);
}
