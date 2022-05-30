import { createContext, useContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('מה תרצו לקבוע?');

  const contextValues = {
    pageTitle,
    setPageTitle,
  };

  return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
