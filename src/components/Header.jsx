import Navi from './Navi';

const styles = {
     header: {
          backgroundColor: '#C0A1E1',
          minHeight: '10vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
     },
};


function Header() {
     return (
          <>
               <header style={styles.header}>
                    <Navi/>
               </header>
          </>
     );
}

export default Header;