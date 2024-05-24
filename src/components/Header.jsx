import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="bg-green-100 py-5 flex px-2">
      <Link to={"/Home"} className="px-3">Home</Link>
      <Link to={"/About"}>About</Link>
    </div>
  )
}

export default Header
