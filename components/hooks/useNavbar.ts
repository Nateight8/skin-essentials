import { useEffect, useState } from "react";

const useNavbarScroll = () => {
  const [isVible, setVisible] = useState(false);
  const [prevPos, setprevPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.pageYOffset;
      console.log(currentPos);

      if (prevPos < currentPos + 5) {
        setVisible(true);
      } else if (prevPos > currentPos) {
        setVisible(false);
      }

      setprevPos(currentPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevPos]);
  return isVible;
};

export default useNavbarScroll;
