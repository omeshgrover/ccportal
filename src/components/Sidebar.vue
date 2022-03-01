<template>
	<v-navigation-drawer
		absolute
		:permanent="$vuetify.breakpoint.mdAndUp"
		left
		color="#0C365A"
		dark
		app
		height="100%"
	>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title>
					<v-img src="../assets/imgs/logo.png" max-width="125"></v-img>
				</v-list-item-title>
				<v-list-item-subtitle class="text-wrap pt-4 grey--text">
					Trusted way of banking for 3,000+ SMEs and startups in Singapore
				</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
		
		<v-divider></v-divider>
		
		<v-list dense class="mt-8">
			<v-list-item
				v-for="item in items"
				:key="item.title"
				link
				@click="$router.push({ name: item.route })"
				:class="item.route === $route.name ? 'highlight py-3' : 'py-3'"
			>
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	name: 'Sidebar',
	
	data: () => ({
		items: [
			{ title: 'Home', icon: 'mdi-arrow-up-drop-circle', route: 'home' },
			{ title: 'Cards', icon: 'mdi-credit-card', route: 'cards' },
			{ title: 'Payments', icon: 'mdi-swap-horizontal-circle-outline', route: 'payments' },
			{ title: 'Credit', icon: 'mdi-arrow-up-circle', route: 'credit' },
			{ title: 'Settings', icon: 'mdi-account', route: 'settings' },
		]
	}),
};
</script>