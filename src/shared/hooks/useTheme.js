import { useContext } from 'react';

import { ThemeContext } from 'CombinedContextProvider';

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default useTheme;