import React from 'react';
import { connect } from 'react-redux';

const TaskComponent = ({name, deleteTask}) => {
    return(
      <div className="task_component_container" >
        <div className="task_tab_container">
          <div className="task_name_tab">
            <i className="fa-lg fa-square-o" aria-hidden="true" onClick={()=>{deleteTask(name)}}></i> <p>  {name} </p>
          </div>
        </div>
      </div>
    )
}

export default TaskComponent
