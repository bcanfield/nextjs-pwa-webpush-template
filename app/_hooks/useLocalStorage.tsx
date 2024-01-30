import { useState, useEffect } from "react";

const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }
    setValue(currentValue);
  }, [key, defaultValue]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
