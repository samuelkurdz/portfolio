import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import styles from "./styles/app.css";
import { BackToHome } from "./components/backToHome";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      href: "https://use.typekit.net/saq2ocs.css",
      rel: "stylesheet",
    },
  ];
}
export const meta: MetaFunction = () => {
  return {
    title: "Samuel Adebayo",
    description: "Samuel Adebayo's Portfolio",
    "og:title": "Samuel Adebayo: Frontend Engineer.",
    "og:description":
      "Samuel Adebayo is a Frontend Engineer highly skilled at building accessibly enhanced web applications. He is from Lagos, Nigeria",
    "og:type": "website",
    "twitter:url": "https://www.samueladebayo.tech",
    "twitter:creator": "@samuelAdebay0",
    "twitter:site": "@samuelAdebay0",
    "og:site_name": "Samuel Adebayo",
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-slate-900 selection:bg-fuchsia-300 selection:text-fuchsia-900">
        <BackToHome />
        <div className="mx-auto md:w-10/12 w-10/12">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </div>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
