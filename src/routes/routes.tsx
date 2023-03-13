import { route } from '../types/routes'

import DefaultLayout from '../layouts/private/DefaultLayout'
import LiveOverview from '../Pages/LiveOverview'


const Routes: route[] = [
  // events
  { path: "/", page: DefaultLayout, title: "Home", protectedRoute: false, children:[
    
  ]},
  { path: "/live-overview", page: LiveOverview, title: "Live Overview", protectedRoute: false }
];

export { Routes }