import { Task } from "../components/Task/types";

export const taskTitleList = (taskList: Task[], taskIndex: number) => {
    return taskList.map((task: Task, index: number) =>
        {index === taskIndex ? task.title : null}
    );
}

export const SubtaskList = (taskList: Task[], taskIndex: number) => {
    return taskList.map((task: Task, index: number) => 
        {index === taskIndex ? task.subtaskList : null}
    );
}