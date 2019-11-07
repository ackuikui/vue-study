import myInput from './myInput.vue'
import myDialog from './myDialog.vue'

const components = {
    myInput,
    myDialog
}

// eslint-disable-next-line no-unused-vars
const install = function (Vue, Option) {
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key])
    })
}

export default {
    install
}