import { useCallback } from "react";

const useFormValueChange = (setValue, propName = "value") => {
  return useCallback(
    (e) => {
      setValue(e.target[propName]);
    },
    [setValue, propName]
  );
};

export default useFormValueChange;
