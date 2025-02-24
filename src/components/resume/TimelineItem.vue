<script setup lang="ts">
const props = defineProps({
	disabled: Boolean,
});
</script>

<template>
	<li
		:class="{'disabled': disabled}"
		class="resume-item mb-6 before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-purple-200/75 before:bg-white before:content-[''] dark:before:border-purple-800/75 dark:before:bg-gray-950"
	>
		<h4
			class="text-sm font-semibold text-purple-600 dark:text-purple-500"
		>
			<slot name="subheading"/>
		</h4>
		<h5
			class="mb-2"
		>
			<slot name="title"/>
		</h5>
		<div
			class="resume-item__body text-sm/relaxed text-gray-700 dark:text-gray-300 space-y-2"
		>
			<slot/>
		</div>
	</li>
</template>

<style lang="scss">
.disabled {
	* {
		opacity: 0.5;
		transition: all 0.3s ease;
	}
	
	&:hover * {
		opacity: 1;
	}
}
</style>