import { ReactNode } from "react";

interface ScrollLinkProps {
  targetId: string;
  children: ReactNode;
  offset?: string;
  onClick?: () => void;
}

const SmoothScroll: React.FC<ScrollLinkProps> = ({
  targetId,
  offset = "0",
  onClick,
  children,
}) => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      const offsetInPixels =
        parseFloat(offset) *
        parseFloat(getComputedStyle(document.documentElement).fontSize);
      const offsetPosition = section.offsetTop - offsetInPixels;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      onClick?.();
    }
  };

  return (
    <a
      onClick={handleLinkClick}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      {children}
    </a>
  );
};

export default SmoothScroll;
