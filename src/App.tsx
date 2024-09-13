import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Contact, Error, HomeLayout, Landing, Services } from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
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
],
{
  basename: '/zan-extreme-app',
}
)
function App() {

  return <RouterProvider router={router} />
}

export default App
