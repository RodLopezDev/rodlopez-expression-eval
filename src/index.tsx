import * as React from "react";

const useSpecialHook = () => {
  const [log] = React.useState(1);
  return log;
};

export default useSpecialHook;
