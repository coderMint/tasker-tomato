import { Subtask } from "../Subtask/types";

export interface Task {
    title: string,
    estimateLeft: string,
    originalEstimate: string,
    subtaskList: Subtask[]
}