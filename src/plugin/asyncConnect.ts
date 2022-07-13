import { createAsyncConnect, useBatchDefine } from 'vue-async-connect'
const batch = useBatchDefine<
  'autoClear/time' | 'autoClear/other' | 'param/props' | 'param/method'
>(import.meta.glob('../batchDefine/**/*.vue'))
const components = {
  a: () => import('../components/name/a.vue'),
  b: () => import('../components/name/b.vue'),
  c: () => import('../components/name/c.vue'),
}
type Connects = keyof typeof components
const { connect: CN, AsyncConnectRender } = createAsyncConnect({
  components: {
    ...components,
    ...batch,
  },
  maxCalls: 5,
})
export { CN, AsyncConnectRender, Connects }
