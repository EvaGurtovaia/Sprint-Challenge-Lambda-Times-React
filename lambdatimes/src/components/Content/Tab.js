import React from 'react';

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

// Make sure you include PropTypes on your props.

export default Tab;
