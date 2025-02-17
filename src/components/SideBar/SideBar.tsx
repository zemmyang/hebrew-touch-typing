import React, {useMemo, useRef} from 'react';
import {
  getFullListOfPracticeAndReviewExercises,
  getListOfTextExercises,
} from '../../utils/generateLetterExercises';
import ExerciseList from '../ExerciseList/ExerciseList';
import * as styles from './side-bar.scss';
import classNames from 'classnames';

interface SideBarProps {
  theme: 'light' | 'dark' | 'auto';
}

const SideBar: React.FC<SideBarProps> = ({ theme }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const lettersExercises = useMemo(() => {
    return getFullListOfPracticeAndReviewExercises();
  }, []);

  const textExercises = useMemo(() => {
    return getListOfTextExercises();
  }, []);

  const vocabExercises = useMemo(() => {
    return getListOfTextExercises();
  }, []);

  return (
    <div className={classNames(styles.root, { [styles.dark]: theme === 'dark' })}>
      <h1>הקלדה עיוורת</h1>

      <ExerciseList
        title="שיעורי אותיות"
        emoji="⌨️"
        exercises={lettersExercises}
        isDarkMode={theme === 'dark'}
        defaultExpanded={true}
      />
      {/*<ExerciseList*/}
      {/*  title="Vocabulary"*/}
      {/*  emoji="️📓"*/}
      {/*  exercises={vocabExercises}*/}
      {/*  isDarkMode={theme === 'dark'}*/}
      {/*  defaultExpanded={false}*/}
      {/*/>*/}
      <ExerciseList
        title="טקסטים"
        emoji="️📖"
        exercises={textExercises}
        isDarkMode={theme === 'dark'}
        defaultExpanded={true}
      />
    </div>
  );
};

export default SideBar;