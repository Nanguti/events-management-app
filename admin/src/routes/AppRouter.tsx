import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout, GuestLayout } from "../components";

import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import Dashboard from "../views/Dashboard";
import ListEvents from "../views/Events/ListEvents";
import CreateEvent from "../views/Events/CreateEvent";
import PendingApprovals from "../views/Approvals/PendingApprovals";
import NotFound from "../views/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import ViewEvent from "../views/Events/ViewEvent";
import EditEvent from "../views/Events/EditEvent";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Guest Routes */}
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Authenticated Routes */}
        <Route element={<ProtectedRoute layout={<DefaultLayout />} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<ListEvents />} />
          <Route path="/events/:eventId" element={<ViewEvent />} />
          <Route path="/events/:eventId/edit" element={<EditEvent />} />
          <Route path="/events/create" element={<CreateEvent />} />
          <Route path="/approvals" element={<PendingApprovals />} />
        </Route>

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
