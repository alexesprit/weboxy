import { OxyFuelCalculator } from '@/model/OxyFuelCalculator';
import { OxyFuelUsage } from '@/model/OxyFuelUsage';

export class OxyPropaneCalculator implements OxyFuelCalculator {
	calculateUsage(thickness: number, cutLength: number): OxyFuelUsage {
		if (!(thickness in oxygenFactors)) {
			throw new Error(`Unsupported thickness: ${thickness}`);
		}

		if (!(thickness in propaneFactors)) {
			throw new Error(`Unsupported thickness: ${thickness}`);
		}

		const oxygen =
			(cutLength * oxygenFactors[thickness] * oxygenConversionFactor) /
			1000;
		const fuel = (cutLength * propaneFactors[thickness]) / 1000;

		return { oxygen, fuel };
	}

	getThicknessSupported(): readonly number[] {
		return Object.keys(oxygenFactors).map((key) => Number.parseInt(key));
	}
}

type FactorMap = Record<number, number>;

const oxygenConversionFactor = 1.33;

const oxygenFactors: FactorMap = {
	6: 0.16,
	8: 0.199,
	10: 0.242,
	12: 0.283,
	14: 0.376,
	16: 0.398,
	20: 0.431,
	25: 0.546,
	30: 0.608,
	40: 0.773,
	50: 0.954,
	60: 1.08,
	70: 1.358,
	80: 1.598,
	90: 1.812,
};

const propaneFactors: FactorMap = {
	6: 0.032,
	8: 0.041,
	10: 0.048,
	12: 0.058,
	14: 0.066,
	16: 0.071,
	20: 0.084,
	25: 0.098,
	30: 0.106,
	40: 0.122,
	50: 0.144,
	60: 0.156,
	70: 0.185,
	80: 0.204,
	90: 0.226,
};
