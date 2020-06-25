<template>
        <v-navigation-drawer permanent style="width: 100%">
            <v-toolbar color="blue" dark>
                <v-toolbar-title>Your List</v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- <v-btn color="blue" dark>
                        <v-icon>mdi-magnify</v-icon>
                </v-btn> -->
                <v-icon>mdi-magnify</v-icon>
            </v-toolbar>
            
            <v-list>
                <v-list-item>
                    <v-list-item-content >
                        <!-- <input v-model="item" style="border:2px black solid"> -->
                        <v-text-field
                                name="add item"
                                label="add item"
                                type="text"
                                v-model="item"
                                ></v-text-field>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-list-item-title>
                            <v-btn v-if="item.length>0" @click.prevent="addItem" color="blue" dark>
                                add
                                <v-icon small>mdi-plus</v-icon>
                            </v-btn>
                        </v-list-item-title>
                    </v-list-item-action>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-list style="height:100%">
                <v-list-item
                    v-for="(item,key) in items"
                    :key="key"
                >
                    <v-list-item-content>
                        <v-list-item-title>
                            {{item}}
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-btn @click="removeItem" color="blue" dark>
                                rem<v-icon small>mdi-minus</v-icon>
                            </v-btn>
                </v-list-item>
            </v-list>

            
        </v-navigation-drawer>
</template>

<script>
export default {
    name:"lists",

    data:()=>({
        item:'',
        items:[]
    }),
    methods: {
        addItem: function () {
            this.items.push(this.item),
            this.item=''
        },
        removeItem: function(key) {
            this.items.splice(key,1)
               // this.items = this.items.filter(item => !item)

        }
    }
}
</script>