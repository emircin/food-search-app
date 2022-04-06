import { NavLink } from "react-router-dom"
import {ElementList, UnorderList, HeadText, Span, Head} from "./style"

const Navbar = () => {
  return (
    <div>
        <Head>
        <NavLink to="/home" style={{textDecoration:'none'}}><HeadText> <Span>{"<Emir/>"}</Span> Recipe</HeadText></NavLink> 
         <UnorderList>
              <NavLink style={{textDecoration:'none'}} to="/about"><ElementList>About</ElementList></NavLink> 
              <a href="https://github.com/emircin" style={{textDecoration:'none'}}><ElementList>Github</ElementList></a>
              <NavLink style={{textDecoration:'none'}} to="/login"><ElementList>Logout</ElementList></NavLink>
        </UnorderList> 
        </Head>
    </div>
  )
}

export default Navbar