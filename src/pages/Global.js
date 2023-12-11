import { useEffect } from "react";

const GlobalVarable = () => {
  useEffect(() => {
    window.myYosuefi = "yousefi value";
  }, []);
  
  return null;
};

export default GlobalVarable;
