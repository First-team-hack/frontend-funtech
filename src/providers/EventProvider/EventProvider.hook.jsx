import { useContext } from 'react';
import EventProviderContext from './EventProvider.context';

const useEvent = () => {
  return useContext(EventProviderContext);
};

export default useEvent;
