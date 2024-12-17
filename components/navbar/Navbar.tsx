import Container from "../global/Container"
import CartButton from "./CartButton"
import DarkMode from "./DarkMode"
import LinksDropDown from "./LinksDropDown"
import Logo from "./Logo";
import NavSearch from "./NavSearch";
// import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
       <Logo />
       <NavSearch />
       <div className="flex gap-4 items-center">
        <CartButton/>
        <DarkMode/>
        <LinksDropDown />
       </div>
      </Container>
    </nav>
  )
}

export default Navbar