import { useState } from "react";

const useTasty = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const handler = async (callback) => {
    try {
      callback();
    } catch (err) {
      console.log(err);
      setErrors(err);
    } finally {
      setIsLoading(false);

      /*setTimeout(() => {
        setIsLoading(false);
      }, 5000);*/
    }
  };

  return {
    isLoading,
    errors,
    handler,
  };
};

export default useTasty;
