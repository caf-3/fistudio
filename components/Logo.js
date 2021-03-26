import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a className="logo">
          <img src="/logo.png" />
        </a>
      </Link>
      <style jsx>{`
        .logo img{
            display:block;
            width: 120px;
        }
        @media (max-width: 600px){
            .logo{
                display: inline-block;
            }
        }
      `}</style>
    </div>
  );
};
export default Logo;
