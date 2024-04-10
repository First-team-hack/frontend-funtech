import { useContext } from 'react';
import ProfileProviderContext from './ProfileProvider.context';

const useProfile = () => {
  return useContext(ProfileProviderContext);
};

export default useProfile;
