import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import ExerciseTextBlock from '../ExerciseTextBlock/ExerciseTextBlock';
import classNames from 'classnames';
import * as styles from './hebrew-touch-typing.scss';
import ExerciseTitle from '../ExerciseTitle/ExerciseTitle';
import {useExerciseContext} from '../ExerciseContext/ExerciseContext';
import ExerciseCompleteCard from '../ExerciseCompleteCard/ExerciseCompleteCard';
import HeroSection from '../HeroSection/HeroSection';
import {useWPM} from '../../utils/useWPM';

interface HebrewTouchTypingProps {
  className?: string;
}

const HebrewTouchTyping = ({
  className,
}: HebrewTouchTypingProps): React.ReactElement | null => {
  const {selectedExercise} = useExerciseContext();
  const [isExerciseComplete, setIsExerciseComplete] = useState(false);
  const text = useMemo(
    () => selectedExercise?.text.join('') ?? '',
    [selectedExercise],
  );
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState('');
  const {wpm, elapsedTimeSeconds} = useWPM(inputValue, text);
  const isFinished = text.length === inputValue.length;

  useEffect(() => {
    setInputValue('');
    setIsExerciseComplete(false);
  }, [selectedExercise]);

  const onInputChanged = useCallback(
    (newText: string) => {
      if (isExerciseComplete) {
        return;
      }

      setInputValue(newText);
      if (newText.length === text.length) {
        setIsExerciseComplete(true);
      }
    },
    [isExerciseComplete, text],
  );

  if (selectedExercise == null) {
    return <HeroSection />;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <input
        aria-hidden="true"
        data-testid="input"
        className={styles.input}
        ref={inputRef}
        autoFocus={true}
        onBlur={() => inputRef.current?.focus()}
        value={inputValue}
        onChange={e => onInputChanged(e.target.value)}
      ></input>
      <ExerciseTitle className={styles.title} />
      <ExerciseTextBlock userInputText={inputValue} />
      <div
        className={classNames(styles.wpm, {
          [styles.wpmShown]: elapsedTimeSeconds > 1 && !isFinished,
        })}
      >
        {wpm.toFixed(0)} WPM
      </div>
      {isExerciseComplete && (
        <ExerciseCompleteCard
          wpm={wpm}
          inputText={inputValue}
          exerciseText={text}
        />
      )}

      {/* <object
        id="keyboard-svg"
        className={styles.keyboardSvg}
        type="image/svg+xml"
        data={KeyboardSvg}
      >
        Keyboard SVG
      </object> */}
    </div>
  );
};

export default HebrewTouchTyping;
