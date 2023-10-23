// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showLeftNavbar,
        showRightNavbar,
        showContent,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const toggleShowContent = () => {
        onToggleShowContent()
      }
      const toggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const toggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="config-controller-bg-controller">
          <h1 className="control-heading">Layout</h1>
          <div className="input-cont">
            <input
              type="checkbox"
              id="layout1"
              name="layout1"
              value="Content"
              checked={showContent}
              onChange={toggleShowContent}
            />
            <label htmlFor="layout1" className="label-txt">
              Content
            </label>
          </div>
          <div className="input-cont">
            <input
              type="checkbox"
              id="layout2"
              name="layout2"
              value="Left Navbar"
              checked={showLeftNavbar}
              onChange={toggleShowLeftNavbar}
            />
            <label htmlFor="layout2" className="label-txt">
              Left Navbar
            </label>
          </div>
          <div className="input-cont">
            <input
              type="checkbox"
              id="layout3"
              name="layout3"
              value="Right Navbar"
              checked={showRightNavbar}
              onChange={toggleShowRightNavbar}
            />
            <label htmlFor="layout3" className="label-txt">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
