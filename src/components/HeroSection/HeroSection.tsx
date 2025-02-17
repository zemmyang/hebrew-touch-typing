import React from 'react';
import {useExerciseContext} from '../ExerciseContext/ExerciseContext';
import {KeyboardWarriorSvg} from '../HebrewTouchTyping/KeyboardWarriorSvg';
import * as styles from './hero-section.scss';
import LeftArrow from './LeftArrow';
import classNames from 'classnames';

interface HeroSectionProps {
  onKeyboardToggle: () => void;
  isKeyboardVisible: boolean;
}

const HeroSection = ({ onKeyboardToggle, isKeyboardVisible }: HeroSectionProps): JSX.Element => {
  const { setSelectedExerciseNumber } = useExerciseContext();
  const [isDarkModeToggled, setIsDarkModeToggled] = React.useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkModeToggled(prev => !prev);
    document.documentElement.setAttribute(
      'data-theme',
      !isDarkModeToggled ? 'dark' : 'light'
    );
  };


  return (
    <div className={styles.emptyState}>
      <div className={styles.textContainer}>
        <h1>האתר ללמוד בו הקלדה עיוורת בעברית</h1>

        <button
          className={styles.sharedButton}
          onClick={() => setSelectedExerciseNumber(0)}
        >
          <span>התחל</span>
          <LeftArrow />
        </button>

        <button
          className={classNames(styles.toggleButton, styles.sharedButton, {
            [styles.on]: isDarkModeToggled,
            [styles.off]: !isDarkModeToggled,
          })}
          onClick={handleDarkModeToggle}
        >
          {isDarkModeToggled ? 'Dark' : 'Light'}
        </button>

        <button
          className={classNames(styles.keyboardToggleButton, styles.sharedButton, {
            [styles.on]: !isKeyboardVisible,
            [styles.off]: isKeyboardVisible,
          })}
          onClick={onKeyboardToggle}
        >
          {isKeyboardVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      <KeyboardWarriorSvg />
    </div>
  );
};


export default HeroSection;
