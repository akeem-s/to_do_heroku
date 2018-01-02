export const TASK_NAME_CHANGE = 'TASK_NAME_CHANGE'
export const TASK_DETAILS_CHANGE = 'TASK_DETAILS_CHANGE'
export const HANDLE_TASK_SUBMIT = 'HANDLE_TASK_SUBMIT'
export const TASK_CREATE_ERROR = 'TASK_CREATE_ERROR'
export const TOGGLE_TASK_FORM = 'TOGGLE_TASK_FORM'
export const DELETE_TASK = 'DELETE_TASK'

export function taskNameChange(val){
  return{
    type: TASK_NAME_CHANGE,
    taskName: val
  }
}

export function taskDetailsChange(val){
  return{
    type: TASK_DETAILS_CHANGE,
    taskDetails: val
  }
}

export function handleSubmit(newTask){
  return{
    type: HANDLE_TASK_SUBMIT,
    newTask: newTask,

  }
}

export function taskCreateError(error){
  return{
    type: TASK_CREATE_ERROR,
    error: error
  }
}

export function toggleTaskForm(val){
  return{
    type: TOGGLE_TASK_FORM,
    showTaskForm: val
  }
}

export function deleteTask(val){
  return{
    type: DELETE_TASK,
    taskId: val
  }
}
