import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import HebrewTouchTyping from '../HebrewTouchTyping/HebrewTouchTyping';
import SideBar from '../SideBar/SideBar';
import { ExerciseProvider } from '../ExerciseContext/ExerciseContext';
import * as styles from './root.scss';
import { UserDataProvider } from '../UserDataProvider/UserDataProvider';
import '../../../public/css/themes.scss';

const HebrewTouchTypingPage = (): React.ReactElement => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    setTheme(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div data-theme={theme} className={classNames(styles.root)}>
      <a href="#" className={classNames(styles.dlvhdr)}>
        <h3>Hebrew Touch Typing</h3>
      </a>
      <ExerciseProvider>
        <UserDataProvider>
          <SideBar theme={theme} />
          <HebrewTouchTyping />
        </UserDataProvider>
      </ExerciseProvider>
    </div>
  );
};

export default HebrewTouchTypingPage;