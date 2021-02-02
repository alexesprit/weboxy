import { provide, inject } from 'vue';

import { OxyPropaneCalculator } from '@/model/OxyPropaneCalculator';

const OxyFuelCalculatorProviderSymbol = Symbol('OxyPropaneCalculator');

export function useOxyFuelCalculatorProvider(calculator: OxyPropaneCalculator) {
	provide(OxyFuelCalculatorProviderSymbol, calculator);
}

export function useOxyFuelCalculatorContext(): OxyPropaneCalculator {
	const dependency = inject(OxyFuelCalculatorProviderSymbol);
	if (dependency) {
		return dependency as OxyPropaneCalculator;
	}

	throw new Error(
		`${OxyFuelCalculatorProviderSymbol.toString()} dependency is not available`
	);
}
