import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Sentinel from "react-sentinel";

import DumbCard from "../Dumbcard";

const MobileContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td colSpan="3">
            <div className="rectangle is-secondary">&nbsp;</div>
          </td>
        </tr>

        <tr>
          <td colSpan="3" className="has-padding-5">
            <div className="h1 has-primary-shadow">Hello.</div>
            <big>
              I’m <b>Caye</b>. Nice to meet you.
            </big>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <div className="diag-lines" />
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);

const DesktopContent = () => (
  <Fragment>
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td colSpan="3">
            <div className="rectangle is-secondary">&nbsp;</div>
          </td>
        </tr>

        <tr>
          <td colSpan="3" className="has-padding-5">
            <div className="h1 has-primary-shadow">Hello.</div>
            <big>
              I’m <b>Caye</b>. Nice to meet you.
            </big>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <div className="diag-lines" />
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
);

export default class Introduction extends Component {
  getSize = () => {
    const width = this.container.offsetWidth;
    if (width <= 412) {
      return {
        desktop: false,
        mobile: true,
        width
      };
    }

    return { desktop: true, mobile: false, width };
  };

  renderIntroduction = ({ mobile, desktop, width }) => (
    <DumbCard mobile={mobile} desktop={desktop}>
      {mobile && <MobileContent width={width} />}
      {desktop && <DesktopContent width={width} />}
    </DumbCard>
  );

  render() {
    return (
      <div className="introduction" ref={el => (this.container = el)}>
        <Sentinel observe={this.getSize} render={this.renderIntroduction} />
      </div>
    );
  }
}

Introduction.propTypes = {
  mobile: PropTypes.bool,
  desktop: PropTypes.bool,
  children: PropTypes.object
};
