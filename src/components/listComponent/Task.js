import React from 'react';

const TaskComponent = ({name, deleteTask}) => {
  return(
    <div className="taskComponentContainer" >
      <div className="taskTabContainer">
        <div className="taskNameTab">
          <i className="fa-lg fa-square-o" aria-hidden="true" onClick={()=>{ deleteTask(name); }}></i> <p> {name} </p>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
