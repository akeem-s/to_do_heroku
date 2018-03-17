import { connect } from 'react-redux';
import React from 'react';
//components
import TaskView from './TaskView'
//actions
import * as ListComponentActions from './listComponent.actions'

export class ListComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderActiveTasks = this.renderActiveTasks.bind(this);
    this.renderTaskForm = this.renderTaskForm.bind(this);
    this.toggleTaskForm = this.toggleTaskForm.bind(this);
  }

  handleChange(e){
    let val = e.target.value
    let name = e.target.name
    const {dispatch} = this.props

    switch (name) {
      case "task_name_input":
        dispatch(ListComponentActions.taskNameChange(val))
        break;

      case "task_details_input":
        dispatch(ListComponentActions.taskDetailsChange(val))
        break;
      default:

    }
  }

  handleSubmit(e){
    const {dispatch} = this.props
    let taskName = this.props.listComponentReducer.taskName
    let taskDetails = this.props.listComponentReducer.taskDetails

    if(taskName){
      dispatch(ListComponentActions.handleSubmit({taskName: taskName, taskDetails: taskDetails, id: this.props.listContainerReducer.activeList, completed: false}))
      document.getElementById("task_name_input").value = ""
      dispatch(ListComponentActions.taskNameChange(''))
      dispatch(ListComponentActions.taskDetailsChange(''))
      dispatch(ListComponentActions.taskCreateError(''))
    }
    else {
      let error = "Task name cannot be blank"
      dispatch(ListComponentActions.taskCreateError(error))
    }
  }

  toggleTaskForm(){
    const {dispatch} = this.props
    dispatch(ListComponentActions.toggleTaskForm(!this.props.listComponentReducer.showTaskForm))
  }

  deleteTask(taskName){
    const {dispatch} = this.props
    let len = this.props.listComponentReducer.taskArray.length
    for(let i = 0; i < len; i ++){
      if(this.props.listComponentReducer.taskArray[i] && this.props.listComponentReducer.taskArray[i].taskName === taskName){
        dispatch(ListComponentActions.deleteTask(i))
      }
    }
  }

  renderActiveTasks(){
    let activeTasks = []
    let len = this.props.listComponentReducer.taskArray.length
    for(let i = 0; i < len; i ++){
      let name = this.props.listComponentReducer.taskArray[i].taskName
      if(this.props.listComponentReducer.taskArray[i].id === this.props.listContainerReducer.activeList){
        activeTasks.push( <TaskView key={i} name={name} deleteTask={this.deleteTask.bind(this)}/>)
      }
    }
    return activeTasks
  }

  renderTaskForm(){
    let taskFormHtml =(
      <div id="new_task_form_container">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="task_name_input" id="task_name_input" placeholder="task name" onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit} id="task_button">create task</button>
          </form>
        </div>
        </div>
      )
    return taskFormHtml
  }

  render(){

    return(
      <div className="list_component_container" >
        {this.renderTaskForm()}
        <div className="task_container">
          {this.renderActiveTasks()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { listComponentReducer, listContainerReducer } = state

  return {
  	listComponentReducer,
    listContainerReducer
  }
}

export default connect(mapStateToProps)(ListComponent);
