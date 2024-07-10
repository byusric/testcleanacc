export interface Getimplementation<T = any> {
  execute: () => Promise<T>
}
