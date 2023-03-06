// import { resolve } from "core-js/fn/promise"

export default router => {
    router.push(
        {
            name:'woheni123',
            path: '/ddddd',
            meta: {
                ishow:true
            },
            component: resolve => require(['../index.js'],resolve )
        },
        {
            name:'woheni1111',
            path: '/woheni1',
            meta: {
                ishow:true
            },
            component: resolve => require(['../index.js'],resolve )
        },
    )
}