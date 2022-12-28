import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        {/* <Switch> is a React Router component which changes the way how routing works.
         - IF we do NOT use <Switch> then EVERY matched route will be active and as a result
          the corresponding components will be rendered (e.g. if we have 'products/1' in the browser
          URL path then BOTH '/products' AND 'products/1' routes are MATCHED)
         - IF we USE <Switch> then ONLY THE FIRST ROUTE is MATCHED (e.g. in our case
          ONLY '/products' route is MATCHED)
          p.s. The "matching" is basically a process of finding a FIRST route WITH which 'path'
          attribute value the current URL path STARTS.

          Let's say we have 3 routes wrapped with <Switch> component:
          <Route path="/p" />
          <Route path="/pro" />
          <Route path="/products" />

          And current URL path is '/products/3'
          In this case Routes 2 and 3 will NEVER MATCH because React Router already found a match
          with Route 1 ('/products/3' STARTS WITH '/p'). So basically it's like calling a String
          'startsWith' method and stopping doing it if there's a match. */}
        <Switch>
          {/* if we want to render a specific page when user visits ROOT path '/'
           we can use <Redirect> component from React Router */}
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* if we want to make matching mechanism more strict (it will basically use EQUALS
          instead of START WITH approach), then we can use
          'exact' attribute (e.g. with this '/products' value from 'path' attribute
           will NEVER MATCH '/products/3' in URL path) */}
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
