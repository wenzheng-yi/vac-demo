import { Ref, DefineComponent } from 'vue'
export interface CreateConnectOptions<T> {
  components: Record<T, () => Promise<any>>
  maxCalls?: number
}
export interface ConnectInstance<T> {
  name: T
  params: any[]
  receivers: Array<{
    flag: Ref<boolean>
    trigger: Function
  }>
}
export interface DefineReceiveOptions<T> {
  name: T
  flag: Ref<boolean>
  trigger: Function
}
export function asyncCall<T>(name: T, ...options: any): void
export function defineReceive(options: DefineReceiveOptions<T>): void
export function createAsyncConnect<T>(options: CreateConnectOptions<T>): {
  connect: {
    call: asyncCall<T>
    receive: defineReceive<T>
  }
  AsyncConnectRender: DefineComponent
}
