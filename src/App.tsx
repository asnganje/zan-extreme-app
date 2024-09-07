import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Contact, HomeLayout, Landing, Services } from "./pages"

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
