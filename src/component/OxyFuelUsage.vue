<template>
	<div class="row center-xs">
		<div class="col-xs-4">
			<div class="usage">
				<span class="usage__value usage--oxygen">
					{{ formatResult(oxygenUsage * girdersCount) }}
				</span>
				{{ $t('kg') }}
			</div>

			<div class="label">{{ $t('oxygen') }}</div>
		</div>

		<div class="col-xs-4">
			<div class="usage">
				<span class="usage__value usage--fuel">
					{{ formatResult(fuelUsage * girdersCount) }}
				</span>
				{{ $t('kg') }}
			</div>

			<div class="label">{{ $t(fuelName) }}</div>
		</div>

		<div class="col-xs-3">
			<div class="usage">
				<span
					class="usage__counter usage--girders"
					@click="toggleGirdersCount"
				>
					x{{ girdersCount }}
				</span>
			</div>

			<div class="label">
				{{ $tc('girders', girdersCount) }}
			</div>
		</div>
	</div>
</template>

//
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		oxygenUsage: {
			type: Number,
			required: true,
		},

		fuelUsage: {
			type: Number,
			required: true,
		},

		fuelName: {
			type: String,
			required: true,
		},
	},
	data() {
		return { girdersCount: 1 };
	},
	methods: {
		// @ts-ignore
		formatResult(input) {
			return parseFloat(input.toFixed(1));
		},

		toggleGirdersCount() {
			this.girdersCount = 3 - this.girdersCount;
		},
	},
});
</script>

<style lang="scss" scoped>
.usage {
	font-size: 3rem;

	@media (max-width: 48rem) {
		font-size: 1.5rem;
	}

	&__counter,
	&__value {
		font-size: 4rem;
		font-weight: 600;

		@media (max-width: 48rem) {
			font-size: 2rem;
		}
	}

	&__counter {
		cursor: pointer;
	}

	&--fuel {
		color: #b8422c;
	}

	&--oxygen {
		color: #3b4c6f;
	}

	&--girders {
		color: #39780c;
	}
}

.label {
	font-size: 1.1rem;
	margin-top: 0.5rem;
	text-transform: uppercase;

	@media (max-width: 48rem) {
		font-size: 0.8rem;
	}
}
</style>
