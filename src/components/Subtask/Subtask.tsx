import React from 'react';
import {FlatList, Text} from 'react-native';

// Design related
import {Card} from '@rneui/base';

// Data model
import {Subtask as SubtaskModel} from './types';

type SubtaskProps = {
  subtasks: SubtaskModel[];
};

const Subtask: React.FC<SubtaskProps> = ({subtasks}: SubtaskProps) => {
  return (
    <Card>
      <FlatList
        data={subtasks}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </Card>
  );
};

export default Subtask;
