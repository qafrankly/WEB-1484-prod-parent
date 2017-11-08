import React, { Component, PropTypes } from 'react';
import ModuleDemo from 'qafrankly/FranklyModulesDemo';

class ModuleCrossDemo extends Component {

  render(){
	  
    return (
      <div className='FranklyModulesCrossDemo'>
	    test2:<br/>
	    <ModuleDemo text="test"></ModuleDemo>
      </div>
    );
	  
  }
}

export default ModuleCrossDemo;
