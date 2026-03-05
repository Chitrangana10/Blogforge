import { Link } from "react-router-dom"

interface BlogCardProps {
  authorName: string
  title: string
  content: string
  publishedDate: string
  id: string
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer hover:bg-slate-50 transition">

        {/* Author Row */}
        <div className="flex items-center">

          <Avatar name={authorName} />

          <div className="font-extralight pl-2 text-sm flex items-center">
            {authorName}
          </div>

          <div className="pl-2 flex items-center">
            <Circle />
          </div>

          <div className="pl-2 text-slate-500 text-sm flex items-center">
            {publishedDate}
          </div>

        </div>

        {/* Title */}
        <div className="text-xl font-semibold pt-2">
          {title}
        </div>

        {/* Content Preview */}
        <div className="text-md font-thin text-slate-600">
          {content.slice(0, 100) + "..."}
        </div>

        {/* Reading Time */}
        <div className="text-slate-500 text-sm font-thin pt-4">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>

      </div>
    </Link>
  )
}

export function Circle() {
  return (
    <div className="h-1 w-1 rounded-full bg-slate-500"></div>
  )
}

export function Avatar({
  name,
  size = "small"
}: {
  name: string
  size?: "small" | "big"
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`font-extralight text-gray-300 ${
          size === "small" ? "text-xs" : "text-md"
        }`}
      >
        {name[0]}
      </span>
    </div>
  )
}