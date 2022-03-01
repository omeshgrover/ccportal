<template>
    <v-layout class="justify-space-around text-center">
        <v-flex v-for="(opt, i) in panel_options" :key="i">
            <v-btn
                elevation="0"
                fab
                small
                :color="opt.bk_color"
                disable
            >
                <v-icon small :color="opt.color">{{opt.icon}}</v-icon>
            </v-btn>
            <p class="link"><small v-html="opt.text"></small></p>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data: ()  => ({
        panel_options: [
            {'icon': 'mdi-snowflake', 'bk_color': 'blue', 'color': 'white', 'text': 'Freeze<br/>card'},
            {'icon': 'mdi-car-speed-limiter', 'bk_color': 'blue', 'color': 'white', 'text': 'Set spend<br/>limit'},
            {'icon': 'mdi-google', 'bk_color': 'white', 'color': 'red', 'text': 'Add to<br/>GPay'},
            {'icon': 'mdi-reload-alert', 'bk_color': 'blue', 'color': 'white', 'text': 'Replace<br/>card'},
            {'icon': 'mdi-trash-can-outline', 'bk_color': 'blue', 'color': 'white', 'text': 'Cancel<br/>card'}
        ]
    })
}
</script>
