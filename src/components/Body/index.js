// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showRightNavbar, showContent} = value
      return (
        <div className="body-bg-cont">
          {showLeftNavbar ? (
            <div className="left-navbar-cont">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <ul className="ul-list">
                <li className="item-txt">Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-cont">
              <h1 className="left-heading">Content</h1>
              <p className="content-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="left-navbar-cont">
              <h1 className="left-heading">Right Navbar</h1>
              <div className="ad-cont">
                <p className="item-desc">Ad 1</p>
              </div>
              <div className="ad-cont">
                <p className="item-desc">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
