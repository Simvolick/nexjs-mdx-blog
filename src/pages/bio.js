import Link from 'next/link'

const Bio = () => {
  return (
    <div className='mt-3 text-center text-xl mx-5'>
        <p className='mt-3'>Klim Yadrintsev</p>
        <p className='mt-3'>Write about software, AI and economics and productivity</p>
        <p className='mt-3'>Contact @ <Link href="https://twitter.com/YadrintsevKlim"><a className='text-blue-500'>Twitter</a></Link></p>
        

    </div>
  )
}

export default Bio