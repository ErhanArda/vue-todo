<template>
        <div>
                <v-btn to="/" dark color='primary'>back to home</v-btn>

            <!-- <v-card>
                <input v-model="fullName" style="border:1px black solid">
                <v-card-text>
                    <v-text>The current firstName value is : {{firstName}}</v-text>
                        <v-spacer></v-spacer>
                    <v-text>The current lastName value is : {{lastName}}</v-text>
                </v-card-text>
            </v-card> -->

            <p>the current value is {{ message }}</p>
            <v-btn @click="modified">Click</v-btn>

            <v-list>
                <v-list-item v-for="list in lists" :key="list">
                    {{list.title}} - {{list.tasks}}
                </v-list-item>
            </v-list>
            
            <!-- :title="message" shows message on hover  -->
                <v-text :title="message">{{ message + ' is ' + exclamation}}</v-text>
                    <v-spacer></v-spacer>
                    <input v-model="message" style="border:1px black solid">
            <v-btn v-on:click="reverseMessage" color="warning">Reverse Message</v-btn>
        </div>
</template>

<script>
export default {
    name:'Tasks',
    data:()=>({
        message:'Vue.js',
        fun: 'fun',
        firstName:'',
        lastName:'',
        lists:[
            { 
                id:1,
                title:"List",
                tasks:3
            },
            { 
                id:1,
                title:"List",
                tasks:7
            }, { 
                id:1,
                title:"List",
                tasks:13
            },
            { 
                id:1,
                title:"List",
                tasks:56
            },            
        ]
    }),
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        },
        modified: function () {
            this.message += '!'
        }
    },
    computed: {
        exclamation: function() {
            return this.fun + '!'
        },
        // fullName:{
        //     get: function () {
        //         return this.firstName + ' ' + this.lastName
        //     },
        //     set: function(newValue){
        //         var names = newValue.split(' ')

        //         this.firstName= names[0]
        //         this.lastName = names[1]
        //     }   
        // }
    }
}
</script>
