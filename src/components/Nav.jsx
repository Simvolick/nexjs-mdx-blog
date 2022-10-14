import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='p-3 border-b-4 border-teal-200'>
        <Link href='/' >
        <div className='text-center m-2 p-2 cursor-pointer text-lg font-semibold' alt="Клим Ядринцев">Klim Yadrintsev</div>
        </Link>
        <div className='mx-5 flex flex-row items-center justify-center'>
            <Link href='/' >
                <h2 className='cursor-pointer bg-teal-200 px-5 py-2 rounded-xl mx-2'>Home</h2>
            </Link>
            <Link href='/bio'>
                <h2 className='ms-5 cursor-pointer bg-teal-200 px-5 py-2 rounded-xl mx-2'>Bio</h2>
            </Link>
            <Link href='/blog'>
                <h2 className='ms-5 cursor-pointer bg-teal-200 px-5 py-2 rounded-xl mx-2'>Blog</h2>
            </Link>
        </div>
    </nav>

    )
}

export default Nav
