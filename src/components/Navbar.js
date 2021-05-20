import { ReactComponent as Sherlock } from '../icons/sherlock-holmes.svg';

function Nav() {
  return (
    <div className="navBar">
      <span>Image Searcher</span>
      <div className="box"><Sherlock className="svg-sher" /></div>
    </div>
  )
}

export default Nav