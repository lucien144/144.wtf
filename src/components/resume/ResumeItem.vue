<script setup>
import TimelineItem from '@/components/resume/TimelineItem.vue';

const props = defineProps({
	begin: String,
	end: String,
	rainbow: Boolean,
	role: String,
	company: String,
	companyWeb: String,
});
</script>

<template>
	<TimelineItem>
		<template #subheading>
			{{begin}}&ndash;<span :class="[rainbow ? 'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text' : '']">{{end}}</span>
		</template>
		<template #title>
			<span class="font-bold" v-html="role"/>
			<span v-if="company">
				@
				<a v-if="companyWeb" :href="companyWeb" target="_blank" class="border-b border-gray-300 hover:border-gray-800 dark:border-gray-600 dark:hover:border-gray-200">{{company}}</a>
				<span v-else>{{company}}</span>
			</span>
		</template>
		<slot/>
	</TimelineItem>
</template>