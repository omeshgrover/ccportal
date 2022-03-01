<template>
    <v-expansion-panels
        v-model="panel"
        multiple
    >
        <v-expansion-panel>
            <v-expansion-panel-header color="#F5F9FF">
                <div>
                    <v-icon color="blue">mdi-card-bulleted</v-icon>
                    <span class="ml-2">Card Details</span>
                </div>
                <template v-slot:actions>
                    <v-icon color="gray">mdi-chevron-up-circle</v-icon>
                </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pa-3">
                Some content
            </v-expansion-panel-content>
        </v-expansion-panel>
        
        <v-expansion-panel>
            <v-expansion-panel-header color="#F5F9FF">
                <div>
                    <v-icon color="blue">mdi-swap-horizontal</v-icon>
                    <span class="ml-2">Recent Transactions</span>
                </div>
                <template v-slot:actions>
                    <v-icon color="gray">mdi-chevron-up-circle</v-icon>
                </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-list two-line>
                    <v-list-item v-for="(item, i) in transactions" :key="i">
                        <v-list-item-icon>
                            <v-btn
                                elevation="0"
                                fab
                                small
                                :color="item.left_ic_btn_color"
                                disable
                            >
                                <v-icon dark :color="item.left_ic_color">{{item.left_ic}}</v-icon>
                            </v-btn>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                            <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
                            <v-list-item-subtitle class="mx-auto text-center">
                                <v-btn
                                    elevation="0"
                                    fab
                                    x-small
                                    color="blue"
                                    disable
                                    max-width="22"
                                    max-height="22"
                                >
                                    <v-icon x-small color="white">mdi-card-bulleted</v-icon>
                                </v-btn>
                                <span color="primary" class="ml-2">{{item.caption}}</span>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        
                        <v-list-item-icon>
                            {{item.right_txt}} <v-icon>mdi-chevron-right</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
                <p class="green--text mx-auto text-center mb-0 link" style="background-color: #EDFFF5; line-height:50px;">View all card transactions</p>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    data: ()  => ({
        panel: [1],
        transactions: [
            {
                'left_ic_btn_color': '#009DFF1A',
                'left_ic_color': 'blue',
                'left_ic': 'mdi-briefcase-variant',
                'title': 'Hamleys',
                'subtitle': '20 May 2020',
                'right_txt': '+ S$ 150',
                'caption': 'Refund on debit card'
            },
            {
                'left_ic_btn_color': '#00D6B51A',
                'left_ic_color': 'green',
                'left_ic': 'mdi-airplane',
                'title': 'Hamleys',
                'subtitle': '20 May 2020',
                'right_txt': '+ S$ 150',
                'caption': 'Charged to debit card'
            },
            {
                'left_ic_btn_color': '#F251951A',
                'left_ic_color': 'pink',
                'left_ic': 'mdi-bullhorn',
                'title': 'Hamleys',
                'subtitle': '20 May 2020',
                'right_txt': '+ S$ 150',
                'caption': 'Charged to debit card'
            },
            {
                'left_ic_btn_color': '#009DFF1A',
                'left_ic_color': 'blue',
                'left_ic': 'mdi-briefcase-variant',
                'title': 'Hamleys',
                'subtitle': '20 May 2020',
                'right_txt': '+ S$ 150',
                'caption': 'Charged to debit card'
            },
        ]
    })
}
</script>