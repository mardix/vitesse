

import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { UserModule } from '~/types'

export const install: UserModule = async ({ isClient, initialState, app }) => {

  // Vue loading spinner: 
  // window.$__loadingSpinner
  app.use(VueLoading, {
    color: '#2563EB',
    loader: 'spinner',
    width: 96,
    height: 96,
    backgroundColor: '#ffffff',
    opacity: 0.7,
    zIndex: 999,  
    lockScroll: true 
  });
  window.$__loadingSpinner = app.config.globalProperties.$loading
}