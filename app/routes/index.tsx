import PostItems from "~/components/PostItems";
import { Link } from "remix";
import Avatar from "~/components/avatar";
import { Socials } from "~/components/socials";

export default function Index() {
  return (
    <>
      <div className="text-center my-24">
        <Avatar className="mx-auto" />
      </div>
      <div className="lg:grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 xl:col-span-4 mb-12">
          <div className="sticky top-96">
            <h1>
              Hi 👋🏼, <br /> I am Samuel.
            </h1>
            <p className="mt-8">
              I write about JavaScript, TypeScript, Remix, Angular and Tailwind.{" "}
              <Link to="/about">Learn more about me</Link>
              <br />
              <br />
              If you want to connect with me, you can find me in one of the
              channels below
            </p>
            <Socials />
          </div>
        </div>
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="relative">
            <svg
              className="w-5 absolute m-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search articles"
              className="bg-transparent dark:border-gray-700 dark:text-white pl-12 border p-3 rounded-lg mb-8 w-full outline-none focus:border-violet-500 dark:focus:border-orange-500"
            />
          </div>
          <PostItems />
        </div>
      </div>
    </>
  );
}
