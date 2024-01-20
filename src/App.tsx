import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingPage } from "./components/loading";

const HomePage = lazy(() => import("@/pages/home.page"));

export default function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
