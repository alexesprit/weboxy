export interface OxyFuelUsage {
	readonly oxygen: number;
	readonly fuel: number;
}

export const noUsage: OxyFuelUsage = { oxygen: 0, fuel: 0 };
