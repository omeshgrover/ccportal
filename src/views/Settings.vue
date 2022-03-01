<style scoped>
	.v-card--reveal {
		bottom: 0;
		opacity: 1 !important;
		position: absolute;
		width: 100%;
	}
</style>

<template>
	<v-card class="white ma-4 ma-sm-auto" max-width="100%">
		<v-card-text>
			<div>Settings page</div>
			<p class="text-h4 text--primary">Settings</p>
			<p>Short information</p>
			<div class="text--primary">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
		</v-card-text>
		
		<v-card-actions>
			<v-btn text color="green accent-4" @click="reveal = true">Learn More</v-btn>
		</v-card-actions>

		<v-expand-transition>
			<v-card
				v-if="reveal"
				class="transition-fast-in-fast-out v-card--reveal"
				style="height: 100%;"
			>
				<v-card-text class="pb-0">
					<p class="text-h4 text--primary">Origin</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates distinctio quia laborum quasi impedit modi officiis possimus vitae maxime dicta deserunt saepe, reprehenderit aut iusto tempore aliquid eligendi nihil!</p>
				</v-card-text>
				<v-card-actions class="pt-0">
					<v-btn text color="green accent-4" @click="reveal = false">Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-expand-transition>
	</v-card>
</template>

<script>
export default {
    data: () => ({
      	reveal: false,
    }),
}
</script>