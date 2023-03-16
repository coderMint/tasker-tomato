import React from 'react';
import {View} from 'react-native';

// Data model
import {Task as TaskModel} from '../../components/Task/types';

// Data related
import {taskList} from '../../store/TaskList';

// Custom components
import Task from '../../components/Task/Task';

const HomeView: React.FC = () => {
  const tasks = taskList.map((task: TaskModel) => <Task task={task} />);
  return <View>{tasks}</View>;
};

export default HomeView;
