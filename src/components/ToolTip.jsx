// Module imports
import PropTypes from "prop-types";
import React from "react";

const propsToCapture = ["alignment", "attachment", "children"];

const ToolTip = props => {
  const { alignment, attachment, children } = props;
  const filteredProps = {};

  for (const [key, value] of Object.entries(props)) {
    if (!propsToCapture.includes(key)) {
      filteredProps[key] = value;
    }
  }

  return (
    <div
      {...filteredProps}
      data-attachment={attachment}
      data-alignment={alignment}
      role="ToolTip"
    >
      {children}
    </div>
  );
};

ToolTip.defaultProps = {
  alignment: "center",
  attachment: "bottom"
};

ToolTip.propTypes = {
  alignment: PropTypes.string,
  attachment: PropTypes.string
};

export default ToolTip;
