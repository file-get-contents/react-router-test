import { Outlet, Link, useLoaderData } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

function Top(): JSX.Element {
  return (
    <>
      <h1>top page</h1>
      <p>
        <Link to="/test1">to test1 page</Link>
      </p>
      <p>
        <Link to="/test2">to test2 page</Link>
      </p>
    </>
  );
}

function Test1(): JSX.Element {
  //  useLoaderData();

  return (
    <>
      <>{console.log('rendering!')}</>
      <h1>test1 page</h1>
      <p>
        <Link to="/">to top page</Link>
      </p>
      <p>
        <Link to="/test2">to test2 page</Link>
      </p>
    </>
  );
}

function Test2(): JSX.Element {
  //  useLoaderData();

  return (
    <>
      <>{console.log('rendering!')}</>
      <h1>test2 page</h1>
      <p>
        <Link to="/">to top page</Link>
      </p>
      <p>
        <Link to="/test1">to test1 page</Link>
      </p>
    </>
  );
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Top />,
  },
  {
    path: '/test1',
    element: <Test1 />,
    loader: async () => 'this is a data.',
  },
  {
    path: '/test2',
    element: <Test2 />,
    loader: async () => 'this is a data.',
  },
];

/*
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <Top />,
      },
      {
        path: 'test1',
        element: <Test1 />,
        loader: async () => 'this is a data.',
      },
      {
        path: 'test2',
        element: <Test2 />,
        loader: async () => 'this is a data.',
      },
    ],
  },
];
*/
