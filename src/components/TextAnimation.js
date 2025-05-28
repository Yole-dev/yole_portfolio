import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

TextAnimation.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  animationType: PropTypes.oneOf(["count", "typing", "fade"]),
};

export default function TextAnimation({
  text,
  duration = 1,
  delay = 0,
  animationType = "count",
}) {
  const count = useMotionValue(0);
  const [displayText, setDisplayText] = useState("");
  const textString = typeof text === "number" ? text.toString() : text;
  const textArray = textString.split("");

  const rounded = useTransform(count, (latest) => {
    if (animationType === "count" && typeof text === "number") {
      return Math.round(latest);
    }
    return latest;
  });

  useEffect(() => {
    let controls;
    const timer = setTimeout(() => {
      if (animationType === "count" && typeof text === "number") {
        controls = animate(count, text, { duration });
      } else if (animationType === "typing") {
        // Typing animation implementation
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= textArray.length) {
            setDisplayText(textArray.slice(0, currentIndex).join(""));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, (duration * 1000) / textArray.length);

        return () => clearInterval(interval);
      } else {
        // Default fade animation
        count.set(1);
      }
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      controls?.stop();
    };
  }, [text, duration, delay, animationType]);

  return (
    <motion.span className="text-animation">
      {animationType === "typing" ? displayText : rounded}
    </motion.span>
  );
}
