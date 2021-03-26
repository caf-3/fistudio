import Link from 'next/link';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const images = [
  '/portfolio/14.jpg',
  '/portfolio/13.jpg',
  '/portfolio/12.jpg',
  '/portfolio/11.jpg'
];

const Homepage = () => (
  <Layout title="Pagina Inicial" description="Olá, somos a Fi
  Um estudio ficticio de fotografia
  ...">
    <div className="cover">
      <div className="hello">
        <h1>Olá, somos a Fi</h1>
        <div>
            <h3>Um estudio ficticio de fotografia</h3>
        </div>
        <Link href="/servicos">
          <a className="view-more"> Oque fazemos</a>
        </Link>
      </div>
    </div>
    <div className="latest-work">
      <h2> Últimos trabalhos</h2>
      <Gallery images={images} />
      <div className="">
        <Link href="/portfolio">
          <a className="view-more">Ver todos</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 600px;
        background: transparent url(/cover.jpg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        left: 60px;
        padding: 30px;
      }
      .hello h1, .hello h3, .hello a {
        margin: 0 0 10px 0;
        color: white;
      }
      .hello div{
          margin-bottom: 50px;
      }
      .hello a{
          background-color: #166281;
          padding: 15px;
      }
      .hello a:hover{
        background-color: #01b3fb;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;
