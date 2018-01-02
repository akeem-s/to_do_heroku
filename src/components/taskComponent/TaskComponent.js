import React from 'react';
import { connect } from 'react-redux';

export class TaskComponent extends React.Component{
  render(){
    return(
      <div className="task_component_container" >
        <div className="task_tab_container">
          <div className="task_name_tab">
            <i className="fa-lg fa-square-o" aria-hidden="true" onClick={()=>{this.props.deleteTask(this.props.name)}}></i> <p>  {this.props.name} </p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { taskComponentReducer } = state

  return {
    taskComponentReducer
  }
}

export default connect(mapStateToProps)(TaskComponent);
