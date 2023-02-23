import Users from "./pages/Users";
import Layout from "./components/Layout";
import NewPlace from "./pages/NewPlace";
import UserPlaces from "./pages/UserPlaces";
import UpdatePlace from "./pages/UpdatePlace";
import Auth from "./pages/Auth";

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
      {
        path: "/places/:placeId",
        element: <UpdatePlace />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
];

export default routes;
