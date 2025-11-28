function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-white shadow-md">
    <h1 className="font-bold">Kandy Baby Shop</h1>
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