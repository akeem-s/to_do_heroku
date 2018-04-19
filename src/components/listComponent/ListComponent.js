import { connect } from 'react-redux';
import React from 'react';
//components
import Task from './Task';
//actions
import { deleteList } from '../listContainer/listContainer.actions';
import { createTask, deleteTask, taskNameChange, toggleTaskForm , updateActiveTasks} from './listComponent.actions';

export class ListComponent extends React.Component{
  constructor(props){
    super(props);
    this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
    this.handleTaskFormSubmit = this.handleTaskFormSubmit.bind(this);
    this.toggleTaskForm = this.toggleTaskForm.bind(this);
    this.updateActiveTasks = this.updateActiveTasks.bind(this);
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
    const { activeListId, dispatch, id, taskName } = this.props;
    dispatch(createTask({listId: activeListId, userId: id, taskName}));
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

  render(){
    const { activeTasks, activeListName, activeList, id, dispatch } = this.props;
    return(
      <div className='listComponentContainer'>
        <div className='activeListNameContainer'>
          <h3 className='activeListName'>Active List: {activeListName}</h3>
          <i className='fa fa-trash-o listTabTrash' aria-hidden='true' onClick={()=>{ dispatch(deleteList({userId:id, listId: activeList})); }}></i>
        </div>
        <div id="newTaskFormContainer">
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="taskName" id="taskNameInput" placeholder="task name" onChange={this.handleTaskNameChange}></input>
              <button onClick={this.handleTaskFormSubmit} id="taskButton">create task</button>
            </form>
          </div>
        </div>
        <div className='taskContainer'>
          {activeTasks.map((task)=>{
            return <Task key={task.taskName} name={task.taskName} deleteTask={this.deleteTask.bind(this)}/>;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { listContainerReducer:{activeList, activeListName, activeListId }, listComponentReducer:{showTaskForm, taskArray, taskName, activeTasks}, loginReducer:{user:{id}} } = state;

  return {
    activeList,
    activeListId,
    activeListName,
    activeTasks,
    id,
    showTaskForm,
    taskArray,
    taskName,
  };
}

export default connect(mapStateToProps)(ListComponent);
