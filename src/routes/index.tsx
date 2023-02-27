import {
  createBrowserRouter
} from "react-router-dom";

import { route } from '../types/routes'
import { authProtectedRoutes, publicRoutes } from './routes'
import ValidateRoute from "./ValidateRoute";

const CreateRoutes:any = (routes: route[]) => {
  if(routes !== undefined){
    const brs = routes.map(({path, page, protectedRoute, children}) => {
      const r = {
        path: path,
        element: ValidateRoute(page,protectedRoute),
        children: CreateRoutes(children)
      }
      return r;
    })
    return (
      brs
    )
  }

}

console.log(CreateRoutes(authProtectedRoutes))
 
const R = createBrowserRouter(CreateRoutes(authProtectedRoutes));

export default R