<script setup>
import {ref} from 'vue';

const props = defineProps({
	title: String,
	list: {
		type: Boolean,
		default: true,
	},
	sort: {
		type: Boolean,
		default: false,
	}
});

const reverse = ref(false);
</script>

<template>
	<div>
		<div
			class="resume-section mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900"
		>
			<div class="flex items-center justify-between">
				<h3 class="text-xl font-medium" v-html="title"/>
				<button
					v-if="sort"
					class="flex items-center text-gray-400 hover:text-gray-800 cursor-pointer"
					@click="reverse = !reverse"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 2L21 6M21 6L17 10M21 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V11M3 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V13M3 18L7 22M3 18L7 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span v-if="!reverse" class="text-sm ml-2">nyní&rarr;tenkrát</span>
					<span v-else class="text-sm ml-2">nyní&larr;tenkrát</span>
				</button>
			</div>
		</div>
		<ul
			v-if="list"
			class="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-purple-50 before:content-[''] dark:before:bg-purple-950"
			:class="[{'flex flex-col-reverse': reverse}]"
		>
			<slot/>
		</ul>
		<div v-else class="pl-6 text-sm/relaxed text-gray-700 dark:text-gray-300 space-y-2">
			<slot/>
		</div>
	</div>
</template>