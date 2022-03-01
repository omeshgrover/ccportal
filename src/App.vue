<template>
	<v-app>
		<sidebar />
		<v-content app class="ma-0 ma-sm-8" color="#0C365A">
			<router-view />
		</v-content>
		<v-footer app v-show="$vuetify.breakpoint.xs" class="pa-0 ma-0">
			<v-col class="text-center pa-0">
				<v-layout class="justify-space-around text-center">
					<v-flex v-for="(opt, i) in items" :key="i">
						<v-btn
							elevation="0"
							fab
							small
							@click="$router.push({ name: opt.route })"
						>
							<v-icon :color="opt.route === $route.name ? '#01D167' : 'grey'">{{opt.icon}}</v-icon>
						</v-btn>
						<p :class="selectedMenuItem(opt)" @click="$router.push({ name: opt.route })"><small v-html="opt.title"></small></p>
					</v-flex>
				</v-layout>
			</v-col>
		</v-footer>
	</v-app>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
	name: 'App',
	components: {
		Sidebar
	},
	
	data: () => ({
		items: [
			{ title: 'Home', icon: 'mdi-arrow-up-drop-circle', route: 'home' },
			{ title: 'Cards', icon: 'mdi-credit-card', route: 'cards' },
			{ title: 'Payments', icon: 'mdi-swap-horizontal-circle-outline', route: 'payments' },
			{ title: 'Credit', icon: 'mdi-arrow-up-circle', route: 'credit' },
			{ title: 'Settings', icon: 'mdi-account', route: 'settings' },
		]
	}),
	methods: {
		selectedMenuItem(opt) {
			return (opt.route === this.$route.name) ? 'highlight-m' : '';
		}
	}
};
</script>