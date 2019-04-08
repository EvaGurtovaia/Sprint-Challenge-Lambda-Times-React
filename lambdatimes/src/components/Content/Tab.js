import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
function className (props) {
  if (props.tab === props.selectedTab)  {
    return 'tab active-tab'
  } 
 else { return 'tab'
 }
}
  return (
    <div
      className={className(props)}
      onClick={() => {props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
tab: PropTypes.string,
selectedTab: PropTypes.string,
selectTabHandler: PropTypes.func
};


export default Tab;
