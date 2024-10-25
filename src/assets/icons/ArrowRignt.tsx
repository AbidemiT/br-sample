import { FC } from "react";

interface ArrowRightProps {
  color: string;
}

const ArrowRight: FC<ArrowRightProps> = ({ color }) => (
  <svg viewBox="0 0 13 12" fill="none">
    <path
      d="M11.75 9.25V0.75H3.25M11.5 1L1.25 11.25"
      className={color}
      strokeOpacity="0.5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRight;
