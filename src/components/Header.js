import Link from "./Link";

function Header() {
    return(
        <div className="ui secondary pointing menu" style={{justifyContent:"space-evenly",padding:'20px',fontWeight:'bold'}}>
            <Link href="/">Accordion</Link>
            <Link href="/list">Search Wikipedia</Link>
            <Link href="/dropdown">DropDown</Link>
            <Link href="/translate">Translate</Link>
        </div>
    )
}

export default Header;