import Link from "next/link"

const header = () => {
  return (
    <div className="row-span-1 flex justify-between items-center">
    <div className="text-white jolly-logder text-4xl ml-4"><Link href="/">Pick and Win</Link></div>
    <div><button className='text-white border border-white px-12 py-2 rounded-sm mr-4'><Link href="/login">Login</Link></button></div>
  </div>
  )
}

export default header
