import { BaseOxyFuelCalculator } from '@/model/BaseOxyFuelCalculator';
import { OxyFuelCalculator } from '@/model/OxyFuelCalculator';
import { FuelType } from '@/model/FuelType';

import { oxyPropaneFactors } from '@/model/OxyPropaneFactors';
import { oxyAcetyleneFactors } from '@/model/OxyAcetyleneFactors';

export function createOxyFuelCalculator(fuelType: FuelType): OxyFuelCalculator {
	switch (fuelType) {
		case FuelType.Acetylene:
			return new BaseOxyFuelCalculator(oxyAcetyleneFactors);

		case FuelType.Propane:
			return new BaseOxyFuelCalculator(oxyPropaneFactors);
	}
}

export function getAvailableFuels(): FuelType[] {
	return [FuelType.Acetylene, FuelType.Propane];
}
