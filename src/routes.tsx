import {
//  Outlet,
  Link,
  useLoaderData,
} from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

function Top(): JSX.Element {
  return (
    <>
      <h1>top page. not exist "useLoaderData".</h1>
      <p>
        <Link to="/test1">to test1 page</Link>
      </p>
      <p>
        <Link to="/test2">to test2 page</Link>
      </p>
    </>
  );
}

let test :number = 0


function Test1(): JSX.Element {

  console.log('test1::top', test)
  test = 1
  useLoaderData();
  console.log('test1::middle', test)


  return (
    <>
      <h1>test1 page. exist "useLoaderData".</h1>
      <p>
        <Link to="/">to top page.</Link>
      </p>
      <p>
        <Link to="/test2">to test2 page</Link>
      </p>
      <>{  console.log('test1::bottom', test)}</>
    </>
  );
}

function Test2(): JSX.Element {

  console.log('test2::top', test)
  test = 2

  useLoaderData();

  console.log('test2::middle', test)

  return (
    <>
      <h1>test2 page. exist "useLoaderData".</h1>
      <p>
        <Link to="/">to top page</Link>
      </p>
      <p>
        <Link to="/test1">to test1 page</Link>
      </p>
      <>{console.log('test2::bottom', test)}</>
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
];*/

