import Vue from 'vue'
import CustomComponent from '../components/CustomComponent.vue'

 new Vue({
    render: h => h(CustomComponent)
}).$mount("#app")