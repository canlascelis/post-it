/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// svg files
declare module '*.svg' {
  import Vue, {VueConstructor} from 'vue';
  const content: VueConstructor<Vue>;
  export default content;
}
