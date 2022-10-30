import Link from 'next/link'

const Bio = () => {
  return (
    <div>
    <div className='mt-3 text-center text-xl mx-5'>
        <p className='mt-3'>Klim Yadrintsev</p>
        <p className='mt-3'>Write about software, AI and economics and productivity</p>
        <p className='mt-3'>A Founder and a CEO of a Fashion E-commerce valued over $100 million</p>
        <p className='mt-3'>Contact @ <Link href="https://twitter.com/YadrintsevKlim"  className='text-blue-500'>Twitter</Link></p>

    </div>
      <div>
          <Link href={'/blog/'}>
        <div className="px-3 py-1 text-3xl flex justify-center mt-10">
          <p className='bg-orange-400 rounded-xl flex px-4 py-1 cursor-pointer hover:bg-orange-700'>You can read all my blogs here</p></div>
          </Link>
      </div>
    </div>
  )
}

export default Bio