<script setup>
import IconMail from '@/components/icons/IconMail.vue';
import IconPhone from '@/components/icons/IconPhone.vue';
import IconWebsite from '@/components/icons/IconWebsite.vue';

const props = defineProps({
	href: String,
	title: String,
	icon: String,
	blank: Boolean,
});
</script>

<template>
	<div class="flex items-center gap-5">
		<IconMail v-if="icon === 'mail'" class="inline-block size-6 flex-none text-purple-600 dark:text-purple-500"/>
		<IconPhone v-if="icon === 'phone'" class="inline-block size-6 flex-none text-purple-600 dark:text-purple-500"/>
		<IconWebsite v-if="icon === 'website'" class="inline-block size-6 flex-none text-purple-600 dark:text-purple-500"/>
		<a
			:href="props.title"
			:target="props.blank ? '_blank' : '_self'"
			class="truncate font-medium text-black border-b border-gray-400 hover:border-black/75 hover:text-black/75 dark:text-white dark:hover:text-white/75 dark:hover:border-white/75"
		>
			{{ props.title }}
		</a>
	</div>
</template>