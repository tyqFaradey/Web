import styles from "./Map.module.scss";

export default function Map({
  width,
  height,
  viewBox,
  circleX,
  circleY,
  circleR,
  ...props
}) {
  return (
    <svg viewBox={viewBox} width={width} height={height} {...props}>
      <image href="/assets/section9/world.svg" />

      <circle
        className={styles.mapMaker}
        cx={circleX}
        cy={circleY}
        r={circleR}
      />
    </svg>
  );
}
