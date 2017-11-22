import React, { Component, PropTypes } from 'react';
import ModuleDemo from '.qafrankly/WEB-1484-prod-child';

class ModuleCrossDemo extends Component {

  render(){
	  
    return (
      <div className='FranklyModulesCrossDemo'>
	    test2:<br/>
	    <ModuleDemo text="test parent"></ModuleDemo>
      </div>
    );
	  
  }
}

export default ModuleCrossDemo;
