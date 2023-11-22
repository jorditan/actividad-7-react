import Info from './Info';

const style = {
     section: {
          minHeight: "100vh",
          display: "flex",
          backgroundImage: 'linear-gradient(to bottom, #c0a1e1, #c3b0e1, #c9bee0, #d0ccdd, #d9d9d9)',
     },
     article: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

     }
}


function Main(props) {
     return (
          <>
               <section style={style.section}>
                    <article style={style.article}>
                         <Info {...props}/>
                    </article>
               </section>
          </>
     );
}

export default Main;