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
				<button v-if="sort" class="text-gray-400 hover:text-gray-800 cursor-pointer" @click="reverse = !reverse">
					<svg v-if="reverse" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 4V15M17 15L13 11M17 15L21 11M7 4V20M7 20L3 16M7 20L11 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7 20V4M7 4L3 8M7 4L11 8M17 20V9M17 9L13 13M17 9L21 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
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