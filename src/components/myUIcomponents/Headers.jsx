import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Headers() {
  return (
    <div className="flex justify-between text-2xl sm:text-3xl font-bold mt-7 pb-4 bg-gray-950 border-b border-gray-800">
        {/*two components at one side my name with logo and other side blogs  */}
        <div className="flex">
          <div>
          <Avatar>
          <AvatarImage src="/heroImage.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          </div>

        <p>
          Jesroff
        </p>
          </div>
          <p>
            Blogs
          </p>
    </div>
  )
}

export default Headers