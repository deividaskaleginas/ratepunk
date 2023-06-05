import "./triangleBackground.scss";

interface TriangleBackgroundProps {
  position: "right" | "left";
  color: "lightBlue";
}

export const TriangleBackground: React.FC<TriangleBackgroundProps> = ({
  position,
  color,
}) => <div className={`triangleBackground ${position} ${color}`} />;
