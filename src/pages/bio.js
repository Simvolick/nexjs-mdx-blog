import Link from 'next/link'

const Bio = () => {
  return (
    <div className='mt-3 text-center text-xl'>
        <p className='mt-3'>Klim Yadrintsev</p>
        <p className='mt-3'>Пишу про Софт про бизнес и веб</p>
        <p className='mt-3'>Можете найти меня на твиттере <Link href="https://twitter.com/YadrintsevKlim"><a className='text-blue-500'>Twitter</a></Link></p>
        

    </div>
  )
}

export default Bio