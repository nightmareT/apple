// 首页不需要异步
import step1 from '../page/step1'
import step2 from '../page/step2'

const step3 = r => import('../page/step3.vue').then(r)
const step4 = r => import('../page/step4.vue').then(r)
const step5 = r => import('../page/step5.vue').then(r)

export default [
    { path: '/step5', component: step5 },
    { path: '/step4', component: step4 },
    { path: '/step3', component: step3 },
    { path: '/step2', component: step2, alias: window.__isExternal ? '/' : undefined }, // 用来控制外部调用初始页
    { path: '/step1', component: step1, alias: window.__isExternal ? undefined : '/' }
]