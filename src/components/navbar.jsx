function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
    <h1 className="font-bold text-xl">Kandy Baby Shop</h1>
    <input className="bg-gray-400 rounded-full p-2 text-sm" placeholder="Search..."/>
    <nav>
    <ul className="flex gap-4 mr-3">
      <li>About</li>
      <li>Contact Us</li>
      <li>Login</li>
    </ul>
    </nav>
    </div>
  )
}

export default Navbar;