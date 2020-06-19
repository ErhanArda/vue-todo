<template>
    <v-div style="max-height: 96.7vh;height:100vh; overflow:hidden">
    <v-container fluid fill-height pl-0 r-0 pb-0 pt-0>
        <v-layout row align-space-between justify-space-between>
            <v-flex lg3 pr-2>
                <Lists />
            </v-flex>

        <v-flex lg6 pr-2 pl-2>
            <v-btn @click="seen=false" v-if="seen" dark color="green">
                Tasks
            </v-btn>
            <v-btn @click="seen=true" v-else color="red" dark>
                false
            </v-btn>
            <v-btn to="/tasks" color="primary">
                Tasks
            </v-btn>
        </v-flex>

        <v-flex lg3 pr-2>Options</v-flex>
        </v-layout>
    </v-container>
    <!-- <v-footer height="auto" color="blue">
    <v-layout justify-center>
        <v-flex blue white--text text-center>
            &copy;2020
            <strong>Ycp</strong>
        </v-flex>
    </v-layout>
    </v-footer>-->
    <v-footer height="auto" app color="blue" class="white--text">
        <span>Ycp</span>
            <v-spacer></v-spacer>
            <span>&copy; 2020</span>
    </v-footer>
    </v-div>
</template>

<script>
import Lists from "./Lists";
export default {
    name: "todo",
    components: { Lists },
    data() {
        return {
            seen: true
        }
    },
    }
</script>
