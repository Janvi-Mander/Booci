import "./pageHeader.scss";
import logo from '../../assets/booki-logo.png';

function PageHeader() {
  return (
    <header className="header__wrapper">
      <img className="header__logo" src={logo} />
      {/* <div className="header__input-wrapper">
        what do we include in the header ?
      </div> */}
    </header>
  );
} 

export default PageHeader;
