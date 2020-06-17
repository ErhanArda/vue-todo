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
                        Create a new list
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-list-item-title>
                            <v-icon>mdi-plus</v-icon>
                        </v-list-item-title>
                    </v-list-item-action>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-list style="height:100%">
                <v-list-item
                    v-for="(list,key) in lists"
                    :key="key"
                >
                    <v-list-item-content>
                        <v-list-item-title>
                            {{list.title}}
                        </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-list-item-title>
                            {{list.tasks}}
                        </v-list-item-title>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
            
        </v-navigation-drawer>
</template>

<script>
export default {
    name:"lists",
    data:()=>({
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
            }, { 
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
            }, { 
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
    })
}
</script>