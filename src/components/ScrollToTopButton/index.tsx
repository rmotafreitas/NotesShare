import { ArrowUp } from "phosphor-react";
import { useEffect, useState } from "react";

function handleScrollToTop() {
  window.scrollTo(0, 0);
}

export function ScrollToTopButton() {
  const [buttonIsVisible, setButtonIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollToTopButtonVisibility = () => {
      setButtonIsVisible(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScrollToTopButtonVisibility);
  }, []);

  return (
    buttonIsVisible && (
      <button
        className="flex items-center justify-center fixed w-12 h-12 bottom-5 right-5 bg-white rounded-full border-[#b21fa6] border-2 drop-shadow-2xl"
        onClick={handleScrollToTop}
      >
        <ArrowUp size={24} color="#b21fa6" />
      </button>
    )
  );
}
