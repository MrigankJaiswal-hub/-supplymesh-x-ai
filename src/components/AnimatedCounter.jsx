import { useEffect, useState } from "react";

export default function AnimatedCounter({
  end = 0,
  duration = 1200,
  prefix = "",
  suffix = "",
  decimals = 0,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * end;

      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  const formattedValue = value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <>
      {prefix}
      {formattedValue}
      {suffix}
    </>
  );
}