import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Counter from "./features/counter/Counter";
import Detail from "./pages/Detail";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
