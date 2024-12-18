
// import Link from "../Link/Link";
import { useState } from "react";
import Link from "../Link/Link"
import { AiOutlineMenuUnfold ,AiOutlineClose} from 'react-icons/ai';

function NavBar() {
    const [open ,setOpen] = useState( false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" },
    ];
    return (
        <nav>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
{
    open === true? <AiOutlineClose></AiOutlineClose> : 
    <AiOutlineMenuUnfold className="md:hidden"> </AiOutlineMenuUnfold>
  
}
            </div>
          
            <ul className={`md:flex  absolute ${open? '' : 'hidden'}`}>
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>

        </nav>
    );
}

export default NavBar;