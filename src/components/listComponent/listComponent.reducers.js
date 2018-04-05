import { ListComponentActionTypes } from '../../ActionTypes.js';
const { TASK_NAME_CHANGE, TASK_DETAILS_CHANGE, HANDLE_TASK_SUBMIT, TOGGLE_TASK_FORM, DELETE_TASK, RESET_ACTIVE_TASKS, UPDATE_ACTIVE_TASKS} = ListComponentActionTypes;

export function listComponentReducer(state={
  activeTasks: [],
  taskArray:[],
  showTaskForm: false,
}, action){
  const { type, payload } = action;
  switch (type){
    case TASK_NAME_CHANGE:
      return Object.assign({}, state, {
        taskName: payload.taskName,
      });

    case TASK_DETAILS_CHANGE:
      return Object.assign({}, state, {
        taskDetails: payload.taskDetails,
      });

    case HANDLE_TASK_SUBMIT:
      state.taskArray.push(payload);
      return Object.assign({}, state, {
        taskName: '',
        taskDetails: '',
      });

    case TOGGLE_TASK_FORM:
      return Object.assign({}, state, {
        showTaskForm: !state.showTaskForm,
      });

    case DELETE_TASK:
      state.taskArray.splice(action.taskId, 1);
      return Object.assign({}, state, {});

    case RESET_ACTIVE_TASKS:
      return { ...state, activeTasks: [] };

    case UPDATE_ACTIVE_TASKS:
      return Object.assign({}, state, {
        activeTasks: payload.activeTaskArray,
      });

    default:
      return state;
  }
}

export default listComponentReducer;
