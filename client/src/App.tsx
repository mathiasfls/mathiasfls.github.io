import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Research from "./pages/Research";
import Journalism from "./pages/Journalism";
import Awards from "./pages/Awards";
import MediaCoverage from "./pages/MediaCoverage";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/bio" component={Bio} />
      <Route path="/research" component={Research} />
      <Route path="/journalism" component={Journalism} />
      <Route path="/awards" component={Awards} />
      <Route path="/media-coverage" component={MediaCoverage} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router />
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;