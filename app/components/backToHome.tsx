import { Link, useLocation } from "remix";

export function BackToHome() {
  let { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && (
        <div className="fixed top-6 left-6 z-50">
          <div className="flex items-center">
            <Link to="/" className="clear inline-block w-6">
              <svg viewBox="0 0 24 24" stroke="currentColor" className="stroke-violet-600 dark:stroke-orange-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
