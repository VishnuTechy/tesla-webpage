import './details.css';
const Details=()=>{
    return <div className='details prcFont'>
        <h2>About</h2>
        <p>
Introducing the Tesla Model S: Redefining the Art of Driving.

Embark on a journey of unparalleled innovation with the Tesla Model S. Seamlessly blending cutting-edge technology with exquisite design, the Model S redefines the automotive landscape. Feel the exhilaration of instant acceleration, luxuriate in the meticulously crafted interior, and embrace the sustainable future of driving—all in one remarkable vehicle. Elevate your driving experience with the Model S, where every moment behind the wheel is an invitation to the future.</p>
<button className="cta" onClick={() => window.open('https://www.tesla.com/models')}>
  <span>Read More</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg></button></div>
}
export default Details;