import logo from '../images/taycanturbos3.png';
import './home.css';
const Home = () => {
  return (
    <div className="car foreground">
      <div><table id="contact"><tr><td>about us.</td><td>connect.</td></tr></table></div>
      
      <table id="year"><tr><td><p>20</p></td></tr><tr><td><p>24</p></td></tr></table>
      
      
      <img  src={logo} alt="Tesla" width="46%"  title="Tesla"/>
      
  <svg width="770" id="bgStrip"className="background"height="800" viewBox="0 0 691 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.424896 800L465.41 0H690.322L225.336 800H0.424896Z" fill="black"/>
</svg>

    </div>
  );
};

export default Home;
