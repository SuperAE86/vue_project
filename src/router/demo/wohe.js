// import { resolve } from "core-js/fn/promise"

export default router => {
    router.push(
        {
            name:'demo',
            path: '/demo',
            meta: {
                ishow:true
            },
            component: resolve => require(['../../views/AboutView.vue'],resolve )
        },
        {
            name:'de101',
            path: '/demo101',
            meta: {
                ishow:true
            },
            component: resolve => require(['../index.js'],resolve )
        },
    )
   
}