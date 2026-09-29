import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import Shell from "./components/Shell.jsx";
import { ErrorBoundary } from "./components/error-boundary.jsx";
import { Skeleton } from "@workspace/portfolio-design-system/components/ui/skeleton";

const Home = lazy(() => import("./pages/Home.jsx"));
const Work = lazy(() => import("./pages/Work.jsx"));
const Architecture = lazy(() => import("./pages/Architecture.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

function Loading() { return <div className="mx-auto max-w-7xl px-5 py-20 md:px-10"><Skeleton className="mb-8 h-8 w-32" /><Skeleton className="h-32 w-full" /></div>; }
function FeatureBoundary({ children, name }) {
  return <ErrorBoundary resetKey={name}>{children}</ErrorBoundary>;
}
function App() {
  return <Shell><Suspense fallback={<Loading />}><Switch>
    <Route path="/" component={Home} />
    <Route path="/work"><FeatureBoundary name="work"><Work /></FeatureBoundary></Route>
    <Route path="/architecture"><FeatureBoundary name="architecture"><Architecture /></FeatureBoundary></Route>
    <Route path="/contact" component={Contact} />
    <Route><Home /></Route>
  </Switch></Suspense></Shell>;
}
export default App;