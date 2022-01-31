import { Link } from "remix";
import { posts } from "~/constants/posts";

export default function PostItems() {
  return (
    <div className="">
      {posts.map(({ title, introduction, views, createdDate, link }) => (
        <div key={link}>
          <Link
            className="group rounded-lg block clear -mx-6 px-6 py-8"
            to={`/posts/${link}`}
          >
            <div className="flex items-start">
              <div className="text-left">
                <div className="flex items-center text-xl tracking-tighter font-medium dark:text-white">
                  <span className="slashed-zero group-hover:underline">
                    {title}
                  </span>
                </div>
                <p className="slashed-zero text-gray-500 mt-2.5 text-sm">
                  {introduction}
                </p>
              </div>
            </div>
            <h6 className="slashed-zero text-xs mt-5 text-gray-500 dark:text-gray-400">
              {createdDate} ∙ {views} views
            </h6>
          </Link>
          <div className="border-t dark:border-gray-700 my-2"></div>
        </div>
      ))}
    </div>
  );
}
