import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />

      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-6xl pt-12">

          {/* BLOG CONTENT */}
          <div className="col-span-8">

            <div className="text-5xl font-extrabold">
              {blog.title}
            </div>

            <div className="text-slate-500 pt-2">
              Post on 2nd December 2023
            </div>

            <div className="text-lg text-slate-700 mt-6 leading-relaxed">
              {blog.content}
            </div>

          </div>

          {/* AUTHOR SECTION */}
          <div className="col-span-4 pl-10">

            <div className="text-slate-600 text-lg">
              Author
            </div>

            <div className="flex items-start space-x-4 mt-4">

              <Avatar size="big" name={blog.author?.name || "Anonymous"} />

              <div>
                <div className="text-xl font-bold">
                  {blog.author?.name || "Anonymous"}
                </div>

                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the user's attention
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}