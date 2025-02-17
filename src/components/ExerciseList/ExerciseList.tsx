import classNames from 'classnames';
import React, {useState} from 'react';
import {Exercise} from '../../utils/generateLetterExercises';
import ExerciseMenuItem from '../ExerciseMenuItem/ExerciseMenuItem';
import * as styles from './exercise-list.scss';
import ExpandIcon from './ExpandIcon';
interface ExerciseListProps {
  exercises: Exercise[];
  title: string;
  emoji: string;
  className?: string;
  isDarkMode?: boolean;
  defaultExpanded?: boolean; // New prop
}

const ExerciseList: React.FC<ExerciseListProps> = ({
                                                     exercises,
                                                     title,
                                                     emoji,
                                                     className,
                                                     isDarkMode = false,
                                                     defaultExpanded = true, // Default value
                                                   }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={classNames(styles.root, className, {[styles.darkMode]: isDarkMode})}>
      <button
        className={styles.header}
        aria-label="expand or collapse toggle"
        onClick={() => setIsExpanded(expanded => !expanded)}
      >
        <ExpandIcon isExpanded={isExpanded} />
        <h3 className={classNames(styles.exerciseHeader, className, {[styles.darkMode]: isDarkMode})}>{title}</h3>
        <span>{emoji}</span>
      </button>
      {isExpanded ? (
        <div className={styles.exercises}>
          {exercises.map(exercise => (
            <ExerciseMenuItem key={exercise.index} exercise={exercise} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ExerciseList;
