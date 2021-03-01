export class TodoItem {
  constructor(taskVal: String, completeVal: Boolean = false) {
    this.task = taskVal;
    this.complete = completeVal;
  }
  task: String;
  complete: Boolean;
}
