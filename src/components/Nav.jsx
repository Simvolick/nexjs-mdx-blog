import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='nav p-3 border-b-8'>
    <Link href='/' passHref>
        <h2 className='cursor-pointer'>Klim Yadrintsev</h2>
    </Link>
    <Link href='/bio' passHref>
        <h2 className='ms-5 cursor-pointer my-auto'>BIO</h2>
    </Link>

    </nav>

    )
}

export default Nav
