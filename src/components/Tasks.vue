<template>
    <div>
        <nav class="nav-wrapper">
            <div class="logo">
                Logo
            </div>
            <div class="flex">
                <div v-for="item in nav" :key="item">
                    <a 
                        :href="item.link" 
                        class="link-item" 
                        :class="[(item.subLinkModal) ? 'link-active': '']"
                        @click="toggleSubModal(item)">
                        {{ item.title }}
                    </a>

                    <template v-if="item.subLinks && item.subLinkModal">
                        <div class="sublinks">
                            <a v-for="subLink in item.subLinks" :key="subLink" :href="subLink.link" class="link-item">{{ subLink.title }}</a>
                        </div>
                    </template>
                </div>
            </div>

            
        </nav>
        <div>
            Learn Vue
            <div>
            <v-btn to="/" dark color='primary'>back to home</v-btn>

            <p>the current value is {{ message }}</p>
            <v-btn @click="modified">Click</v-btn>

            
            <!-- :title="message" shows message on hover  -->
                <v-text :title="message">{{ message + ' is ' + exclamation}}</v-text>
                    <v-spacer></v-spacer>
                    <input v-model="message" style="border:1px black solid">
            <v-btn v-on:click="reverseMessage" color="warning">Reverse Message</v-btn>
                    <v-list>
                    <input v-model="item" style="border:1px black solid">
        
                    <v-btn @click.prevent="addItem">
                        add
                    </v-btn>
                <v-list-item v-for="item in items" :key="item" >
                    {{item}}
                </v-list-item>
            </v-list>
            <v-text :style="myStyles">text</v-text>

        </div>
        </div>
    </div>
        
</template>

<script>

export default {
    name:'Tasks',
    data:()=>({
        myStyles: {color: 'rebeccapurple',fontSize: 50 + 'px'},
        message:'Vue.js',
        fun: 'fun',
        item:'',
        items:[],
        nav:[
            {title:'Home',link:'#home'},
            {title:'About',link:'#about', subLinks:[
                {title:'Audio',link:'#audio'},
                {title:'Video',link:'#video'},
                {title:'Web',link:'#web'}
            ],  subLinkModal:false},
            {title:'Services',link:'#services', subLinks:[
                {title:'Audio',link:'#audio'},
                {title:'Video',link:'#video'},
                {title:'Web',link:'#web'}
            ],  subLinkModal:false}
        ]
    }),
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        },
        modified: function () {
            this.message += '!'
        },
        addItem: function(){
            this.items.push(this.item),
            this.item=''
        },
        toggleSubModal: function (item) {
            if(item.subLinks){
                item.subLinkModal = !item.subLinkModal
            }
        }
    },
    computed: {
        exclamation: function() {
            return this.fun + '!'
        },
    }
}
</script>

<style scoped>
@import './Tasks.css'
</style>
