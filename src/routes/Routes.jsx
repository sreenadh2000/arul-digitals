import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/common/Loader";
const Home = lazy(() => import("../pages/home/Home"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const About = lazy(() => import("../pages/about/About"));
const Shop = lazy(() => import("../pages/shop/Shop"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const NotFound = lazy(() => import("../components/common/NotFound"));

function Routing() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route
        path="/blog"
        element={<Blog /> }
      /> */}
        {/* 👇 Catch-all route (must be last) */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
