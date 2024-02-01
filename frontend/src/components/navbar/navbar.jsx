import "./navbar.scss"
import { SlMenu } from "react-icons/sl";


function Navbar() {
	return (
        <>
        <div className="navbar space__evenly ">
			<img className="icon" src="./B.png" />
            <SlMenu className="burger__menu" />
		</div>
        <hr />
        </>
		
	);
}

export default Navbar;
