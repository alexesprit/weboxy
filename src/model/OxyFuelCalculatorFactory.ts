import { BaseOxyFuelCalculator } from '@/model/BaseOxyFuelCalculator';
import { OxyFuelCalculator } from '@/model/OxyFuelCalculator';
import { FuelType } from '@/model/FuelType';
import {
	oxyPropaneOxygenFactors,
	oxyPropanePropaneFactors,
} from '@/model/OxyPropaneFactors';

export function createOxyFuelCalculator(fuelType: FuelType): OxyFuelCalculator {
	switch (fuelType) {
		case FuelType.Propane:
			return new BaseOxyFuelCalculator(
				oxyPropaneOxygenFactors,
				oxyPropanePropaneFactors
			);
	}
}

export function getAvailableFuels(): FuelType[] {
	return [FuelType.Propane];
}
