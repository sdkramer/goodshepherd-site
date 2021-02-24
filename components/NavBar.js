import { SocialIcon } from 'react-social-icons'

function NavBar(props) {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <a
            href="/"
            className="inflex-flex items-center py-2 px-3 my-6 text-red-200 hover:text-green-800 text-2xl font-bold tracking-widest"
          >
            Church of the Good Shepherd
          </a>
          <a
            href="/about"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-300 hover:text-green-800"
          >
            About Us
          </a>
          <a
            href="/posts"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-300 hover:text-green-800"
          >
            Blog Posts
          </a>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
<SocialIcon url='https://www.facebook.com/CharlestownNH03603/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
<SocialIcon url='http://www.usachurches.org/church/anglican-church-of-the-good-shepherd.htm' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
