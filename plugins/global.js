// Import global packages and components that are used across the app here!

import Vue from 'vue'
import AppFooterLandscape from '@/components/layout/AppFooterLandscape'
import AppFooterLinks from '@/components/layout/AppFooterLinks'
import AppHeader from '@/components/layout/AppHeader'
import AppNavBtn from '@/components/layout/AppNavBtn'
import AppToggleLang from '@/components/app/AppToggleLang'
import AppSelect from '@/components/app/AppSelect'
import AppNavAdding from '@/components/app/AppNavAdding'
import AppNavSearching from '@/components/app/AppNavSearching'

Vue.component('app-footer-landscape', AppFooterLandscape)
Vue.component('app-footer-links', AppFooterLinks)
Vue.component('app-header', AppHeader)
Vue.component('app-toggle-lang', AppToggleLang)
Vue.component('app-select', AppSelect)
Vue.component('app-nav-btn', AppNavBtn)
Vue.component('app-nav-adding', AppNavAdding)
Vue.component('app-nav-searching', AppNavSearching)
