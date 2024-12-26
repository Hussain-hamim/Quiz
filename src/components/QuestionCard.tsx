import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';
import { useEffect, useState } from 'react';

type QuestionCard = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
  useEffect(() => {
    console.log('Question card mounted');

    return () => {
      console.log('Question card UNmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Question changed');
    // start listening this this question updates

    return () => {
      console.log('Question card change: Cleanup');
      // stop listening this this question updates
    };
  }, [question]);

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption key={option} option={option} />
        ))}
      </View>
    </Card>
  );
}
