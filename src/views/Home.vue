<template>
	<div class="home">
		<v-dialog
			v-model="add_new_card"
			persistent
			max-width="400"
		>
			<v-card class="white">
				<v-card-title>
					<span class="text-h5">Card Details</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-form
							ref="form"
    						v-model="valid"
    						lazy-validation
						>
							<v-row>
								<v-col cols="12" sm="12" md="12">
									<v-text-field
										v-model="card.number"
										label="Card Number *"
										:rules="cardRules"
										required
										:append-icon="valueCard ? 'mdi-eye' : 'mdi-eye-off'"
										@click:append="() => (valueCard = !valueCard)"
										:type="valueCard ? 'password' : 'text'"
									></v-text-field>
								</v-col>
								<v-col cols="12" sm="6" md="6">
									<v-text-field
										v-model="card.validity"
										label="Valid Till *"
										:rules="Required"
										placeholder="DD/MM"
										required
									></v-text-field>
								</v-col>
								<v-col cols="12" sm="6" md="6">
									<v-text-field
										v-model="card.cvv"
										label="CVV *"
										:rules="cvvRules"
										required
										:append-icon="valueCVV ? 'mdi-eye' : 'mdi-eye-off'"
										@click:append="() => (valueCVV = !valueCVV)"
										:type="valueCVV ? 'password' : 'text'"
									></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-text-field
										v-model="card.username"
										label="Card Holder Name *"
										:rules="Required"
										required
									></v-text-field>
								</v-col>
							</v-row>
						</v-form>
					</v-container>
					<small>* indicates required field</small>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green darken-1" text @click="closeAndReset()">Close</v-btn>
					<v-btn color="green darken-1" text :loading="loader" @click="submitCardInfo()">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<v-row class="px-4 pt-4 px-sm-0 pt-sm-0">
			<v-col>
				<v-layout>
					<v-flex><p class="mb-0 white-xs--text"><span v-show="!$vuetify.breakpoint.xs">Available</span><span v-show="$vuetify.breakpoint.xs">Account</span> balance</p></v-flex>
				</v-layout>
				<v-layout>
					<v-flex>
						<v-btn x-small color="green" dark class="mt-n1">$$</v-btn>
						<span class="title ml-2 white-xs--text">3,000</span>
					</v-flex>
					<v-spacer></v-spacer>
					<v-flex justify-end class="text-right">
						<v-btn small :color="($vuetify.breakpoint.xs) ? 'white' : 'primary'" @click="add_new_card=true;" :text="$vuetify.breakpoint.xs"><v-icon small class="pr-2">mdi-plus-circle</v-icon>Add New</v-btn>
					</v-flex>
				</v-layout>
			</v-col>
		</v-row>

		<v-tabs
			v-model="tab"
			class="mt-4 mb-4"
			left
			:show-arrows="false"
        >
			<v-tabs-slider color="cyan"></v-tabs-slider>
			
			<v-tab href="#debit_cards" class="white-xs--text text-caption text-sm-subtitle-1 ml-4 mt-sm-0">My debit cards</v-tab>
			<v-tab-item value="debit_cards" class="mt-5 mb-0 mb-sm-5">
				<DebitCards />
			</v-tab-item>
			
			<v-tab href="#company_cards" class="white-xs--text text-caption text-sm-subtitle-1 ml-4 mt-sm-0">All company cards</v-tab>
			<v-tab-item value="company_cards" class="mt-5 mb-5 px-4 px-sm-0">
				<CompanyCards />
			</v-tab-item>
		</v-tabs>
  	</div>
</template>

<script>
import DebitCards from '../components/Home/DebitCards'
import CompanyCards from '../components/Home/CompanyCards'

export default {
	name: 'home',
	components: {
		DebitCards,
		CompanyCards
	},

	data: () => ({
		valid: true,
		add_new_card: false,
		loader: false,
		tab: null,
		valueCard: String,
		valueCVV: String,

		Required: [
			v => !!v || 'Required',
		],
		cardRules: [
			v => !!v || 'Required',
			v => (v && v.length >= 15) || 'Card must be atleast 15 characters',
      	],
		cvvRules: [
			v => !!v || 'Required',
			v => (v && v.length >= 3) || 'Atleast 3 characters',
      	],
		
		card: {
			number: '',
			validity: '',
			cvv: '',
			username: ''
		},
	}),
	methods: {
		submitCardInfo() {
			if(this.$refs.form.validate()) {
				this.loader = true;
				this.$store.dispatch('setCardDetails',this.card);

				console.log('Card Raw: ', this.$store.getters.getCardDetails);
			}
		},
		closeAndReset() {
			this.$refs.form.reset();
			this.loader = false;
			this.add_new_card = false;
		}
	}
}
</script>
