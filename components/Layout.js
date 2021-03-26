import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
const Layout = props => {
    return(
        <div className="site-wrapper">
            <Head>
              <title>
                {props.title ? `${props.title} | ` : ''}
                Fi Studio
              </title>
              {props.description ? <meta name="description" content={props.description} /> : null}
            </Head>
            <Header />
            <div className="content-wrapper">
                {props.children}
            </div>
            <Footer />
            <style jsx global>{`
                *{
                    text-decoration: none;
                    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
          'Lucida Grande', sans-serif;
                    color: black;
                    box-sizing: border-box;
                }
                body{
                    margin: 0
                }
                a {
                    color: #00000;
                    text-decoration: none;
                  }
            
                  a:hover {
                    color: #166281;
                  }
            
                  h1,
                  h2,
                  h3 {
                    margin: 40px 0 30px;
                  }
            
                  h1 {
                    font-size: 42px;
                  }
            
                  h2 {
                    font-size: 36px;
                  }
            
                  p {
                    margin: 0 0 10px;
                  }
                  header img {
                    max-width: 100%;
                  }
                /* LAYOUT */
                .content-wrapper{
                    min-height: 600px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}
export default Layout;