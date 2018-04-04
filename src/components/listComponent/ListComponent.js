import { connect } from 'react-redux';
import React from 'react';
//components
import Task from './Task';
//actions
import { deleteTask, handleSubmit, taskCreateError, taskNameChange, toggleTaskForm , updateActiveTasks} from './listComponent.actions';

export class ListComponent extends React.Component{
  constructor(props){
    super(props);
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
    this.handleTaskFormSubmit = this.handleTaskFormSubmit.bind(this);
    this.updateActiveTasks = this.updateActiveTasks.bind(this);
    this.renderTaskForm = this.renderTaskForm.bind(this);
    this.toggleTaskForm = this.toggleTaskForm.bind(this);
    this.updateActiveTasks = this.updateActiveTasks.bind(this);
  }

  componentWillMount(){
    this.updateActiveTasks();
  }

  handleTaskNameChange(e){
    const {dispatch} = this.props;
    const taskName = e.target.value;
    dispatch(taskNameChange({taskName}));
  }

  handleTaskFormSubmit(){
    const { activeList, dispatch, taskName } = this.props;
    if(taskName){
      dispatch(handleSubmit({taskName: taskName, listId: activeList, completed: false, description: ''}));
      this.updateActiveTasks();
      document.getElementById('taskNameInput').value = '';
    }
    else {
      let error = 'Task name cannot be blank';
      dispatch(taskCreateError(error));
    }
  }

  toggleTaskForm(){
    const { dispatch, showTaskForm } = this.props;
    dispatch(toggleTaskForm(!showTaskForm));
  }

  deleteTask(taskName){
    const { dispatch, taskArray } = this.props;
    let i = 0;
    taskArray.forEach(()=>{
      if(taskArray[i] && taskArray[i].taskName === taskName){
        dispatch(deleteTask(i));
      }
      i++;
    });
    this.updateActiveTasks();
  }

  updateActiveTasks(){
    const { activeList, taskArray, dispatch } = this.props;
    let activeTaskArray = [];
    let len = taskArray.length;
    for(let i = 0; i < len; i++){
      if(taskArray[i].listId === activeList){
        activeTaskArray.push(taskArray[i]);
      }
    }
    dispatch(updateActiveTasks({activeTaskArray}));
  }

  renderTaskForm(){
    let taskFormHtml =(
      <div id="newTaskFormContainer">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="taskName" id="taskNameInput" placeholder="task name" onChange={this.handleTaskNameChange}></input>
            <button onClick={this.handleTaskFormSubmit} id="taskButton">create task</button>
          </form>
        </div>
      </div>
    );
    return taskFormHtml;
  }

  render(){
    const { activeTasks } = this.props;
    return(
      <div className="listComponentContainer" >
        {this.renderTaskForm()}
        <div className="taskContainer">
          {activeTasks.map((task)=>{
            return <Task key={task.taskName} name={task.taskName} deleteTask={this.deleteTask.bind(this)}/>;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { listContainerReducer:{activeList}, listComponentReducer:{showTaskForm, taskArray, taskName, activeTasks} } = state;

  return {
    activeList,
    activeTasks,
    showTaskForm,
    taskArray,
    taskName,
  };
}

export default connect(mapStateToProps)(ListComponent);
