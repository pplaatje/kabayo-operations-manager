export type route = {
  path: string,
  page: any,
  title: string,
  protectedRoute: boolean,
  children?: route[]
}