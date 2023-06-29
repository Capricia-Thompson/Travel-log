import React, { useState } from "react";
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs'

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);
  const eye = (
    <BsFillEyeFill
      onClick={() => setVisibility((visible) => !visible)}
    />
  );
  const eye_slash = (
    <BsFillEyeSlashFill
      onClick={() => setVisibility((visible) => !visible)}
    />
  );

  const Icon = visible ? eye : eye_slash;

  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default usePasswordToggle;
