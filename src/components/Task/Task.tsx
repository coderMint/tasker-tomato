import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

// Design related
import {Card, Button} from '@rneui/base';

// Data model
import {Task as TaskModel} from './types';

// Custom components
import Subtask from '../Subtask/Subtask';

type TaskProps = {
  task: TaskModel;
};

const Task: React.FC<TaskProps> = ({task}: TaskProps) => {
  const handlePress = () => {
    return Alert.alert('Hi', 'what up');
  };
  return (
    <View>
      <Card>
        <View style={styles.taskTitleContainer}>
          <Text>{task.title}</Text>
        </View>
        <Subtask subtasks={task.subtaskList} />
        <Button
          size="lg"
          title="Mark Done"
          onPress={handlePress}
          style={styles.markDoneCTA}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  taskTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  taskTitle: {
    fontSize: 18,
    flexBasis: '80%',
    flexWrap: 'wrap',
  },
  taskEstimate: {
    fontSize: 18,
  },
  markDoneCTA: {
    marginTop: '16px',
  },
});

export default Task;
