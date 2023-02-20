import Users from "./pages/Users";
import Layout from "./components/Layout";
import NewPlace from "./pages/NewPlace";
import UserPlaces from "./pages/UserPlaces";

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
      {
        path: "/:userId/places",
        element: <UserPlaces />,
      },
    ],
  },
];

export default routes;
