import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Contact, HomeLayout, Landing, Products, Services } from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ]
  },
  {
    path: '/about',
    element: <About />,
  },
])
function App() {

  return <RouterProvider router={router} />
}

export default App
