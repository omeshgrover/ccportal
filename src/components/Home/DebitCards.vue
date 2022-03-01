<template>
    <div>
        <v-card :elevation="$vuetify.breakpoint.xs ? 0 : 1" class="px-0 py-0 px-md-8 py-md-6">
            <v-row>
                <v-col cols="12" sm="12" md="6" class="px-7 px-sm-0">
                    <v-card
                        elevation="0"
                        max-width="400"
                        class="text-right mx-sm-auto"
                        style="border-radius: 5px 5px 0 0"
                    >
                        <span class="text-right mb-0 link green--text show-card-num pa-1 pt-0" @click="is_hidden=!is_hidden;"><small>
                            <v-icon small color="green" v-if="is_hidden">mdi-eye</v-icon>
                            <v-icon small color="green" v-else>mdi-eye-off</v-icon>
                            Show card number</small></span>
                    </v-card>
                    <v-card
                        elevation="0"
                        max-width="400"
                        class="mx-auto"
                    >
                    
                        <v-carousel
                            :continuous="false"
                            :cycle="false"
                            height="250"
                            delimiter-icon="mdi-minus"
                            hide-delimiter-background
                            :show-arrows="false"
                        >
                            <v-carousel-item
                                v-for="(card, i) in cards"
                                :key="i"
                            >
                                <v-sheet
                                    :color="card.color"
                                    height="100%"
                                    tile
                                >
                                    <div class="white--text py-8 px-6">
                                        <div class="float-right">
                                            <v-img src="../../assets/imgs/logo-small.png" max-width="60"></v-img>
                                        </div>
                                        <p class="font-weight-bold mt-8">{{card.name}}</p>
                                        <div class="d-flex justify-space-around" v-if="is_hidden">
                                            <p v-for="(n, j) in card.hidden_num" :key="j">{{n}}</p>
                                        </div>
                                        <div class="d-flex justify-space-around" v-else>
                                            <p v-for="(n, j) in card.num" :key="j">{{n}}</p>
                                        </div>
                                        <div class="d-flex justify-space-around mt-2">
                                            <p>Thru: {{card.thru}}</p>
                                            <p>CVV: {{card.cvv}}</p>
                                            <p></p>
                                        </div>
                                        <div class="float-right">
                                            <v-img src="../../assets/imgs/visa-logo.png" max-width="50"></v-img>
                                        </div>
                                    </div>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                    <v-card
                        :elevation="$vuetify.breakpoint.xs ? 0 : 1"
                        max-width="400"
                        class="mx-auto mt-8 py-4 pb-1"
                        color="#EDF3FF"
                        v-show="!$vuetify.breakpoint.xs"
                    >
                        <CardMenu />
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-card
                        :elevation="$vuetify.breakpoint.xs ? 0 : 1"
                        max-width="400"
                        class="mx-auto py-4 pb-0"
                        color="#EDF3FF"
                        v-show="$vuetify.breakpoint.xs"
                        style="border-radius: 25px 25px 0 0;"
                    >
                        <CardMenu />
                        <div class="px-4 pb-4"><ExpansionPanel /></div>
                    </v-card>
                    <div v-show="!$vuetify.breakpoint.xs"><ExpansionPanel /></div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import CardMenu from '../Common/CardMenu';
import ExpansionPanel from './ExpansionPanel';

export default {
    name: 'debitcards',
    components: {
        CardMenu,
        ExpansionPanel
    },
    data: () => ({
        is_hidden: true,
        cards: [
            {
                'name': 'Mark Henry',
                'hidden_num': ['****', '****', '****', '0058'],
                'num': ['1234', '3604', '9012', '0058'],
                'thru': '12/20',
                'cvv': '***',
                'color': '#01D167'
            },
            {
                'name': 'John Doe',
                'hidden_num': ['****', '****', '****', '0058'],
                'num': ['4503', '3604', '4039', '3456'],
                'thru': '11/22',
                'cvv': '***',
                'color':
                'pink darken-2'
            },
            {
                'name': 'Trang Bui',
                'hidden_num': ['****', '****', '****', '0058'],
                'num': ['2030', '7896', '4037', '4509'],
                'thru': '05/25',
                'cvv': '***',
                'color': 'deep-purple accent-4'
            }
        ]
    }),
}
</script>
