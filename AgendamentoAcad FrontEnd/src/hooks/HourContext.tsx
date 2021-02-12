/* eslint-disable react/prop-types */
import React, {
  createContext, useState, useContext, useCallback,
} from 'react';

interface HourContextInterface {
    ChangeHour(hour: string): void;
    GetHour(): string;

}
const HourContext = createContext<HourContextInterface>({} as HourContextInterface);

export const HourContextProvider: React.FC = ({ children }) => {
  const [selectedHour, setSelectedHour] = useState('00');
  const ChangeHour = (hour: string):void => {
    setSelectedHour(hour);
  };
  const GetHour = useCallback(() => selectedHour, [selectedHour]);
  return (
    <HourContext.Provider value={{ GetHour, ChangeHour }}>
      {children}
    </HourContext.Provider>
  );
};

export function useHour():HourContextInterface {
  const context = useContext(HourContext);

  return context;
}
