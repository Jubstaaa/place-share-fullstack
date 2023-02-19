import Users from "./pages/Users";
import Layout from "./components/Layout";
import NewPlace from "./pages/NewPlace";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "/places/new",
        element: <NewPlace />,
      },
    ],
  },
];

export default routes;
