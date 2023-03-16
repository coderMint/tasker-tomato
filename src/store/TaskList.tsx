//TODO: Hardcoded list for now; update this to consume redux from firebase

import {Task} from '../components/Task/types';

//TODO: Consume the 'task' whn this is updated
export const taskList: Task[] = [
  {
    title: 'First reminder',
    estimateLeft: '15m',
    originalEstimate: '30m',
    subtaskList: [
      {
        title: 'subtask 1 for first reminder',
        complete: false,
      },
      {
        title: 'subtask 2 for first reminder',
        complete: false,
      },
    ],
  },
  {
    title: 'Second reminder',
    estimateLeft: '',
    originalEstimate: '',
    subtaskList: [
      {
        title: 'subtask 1 for second reminder',
        complete: false,
      },
      {
        title: 'subtask 2 for second reminder',
        complete: false,
      },
    ],
  },
  {
    title: 'Third reminder',
    estimateLeft: '',
    originalEstimate: '',
    subtaskList: [
      {
        title: 'subtask 1 for third reminder',
        complete: false,
      },
      {
        title: 'subtask 2 for third reminder',
        complete: false,
      },
    ],
  },
];
