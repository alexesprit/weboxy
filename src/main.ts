// for Vue I18n
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import 'flexboxgrid/dist/flexboxgrid.css';

import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import en from '@/locale/en.json';
import ru from '@/locale/ru.json';

import Weboxy from '@/Weboxy.vue';

const i18n = createI18n({
	locale: getBrowserLocale(),
	globalInjection: true,

	messages: { en, ru },
});

createApp(Weboxy).use(i18n).mount('#app');

function getBrowserLocale(): string {
	return navigator.language.split('-')[0];
}
