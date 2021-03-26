const Footer = () =>{
    return(
        <footer className="footer-wrapper">
            <div className="copyright">&copy; <a target="_blank" href="https://github.com/caf-3">caf3</a> - {new Date().getFullYear()} Fi Studio.</div>
            <style jsx>{`
                .footer-wrapper{
                    text-align: center;
                    padding: 35px 0 ;
                }
            `}</style>
        </footer>
    )
}
export default Footer;