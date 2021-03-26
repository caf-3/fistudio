import Link from 'next/link';
const Menu = () =>{
    return(
        <div className="menu">
                <ul>
            <li>
                <Link href="/">
                    <a>Pagina inicial</a>
                </Link>
            </li>
            <li>
                <Link href="/servicos">
                    <a>Serviços</a>
                </Link>
            </li>
            <li>
                <Link href="/portfolio">
                    <a>Portfólio</a>
                </Link>
            </li>
            <li>
                <Link href="/sobre">
                    <a>Sobre</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            .menu ul{
                list-style: none;
                display: flex;
                justify-content: space-between;
            }
            .menu ul li{
                margin: 0 11px 0;
                font-size: 19px;
            }
        `}</style>
        </div>
    )
}
export default Menu;