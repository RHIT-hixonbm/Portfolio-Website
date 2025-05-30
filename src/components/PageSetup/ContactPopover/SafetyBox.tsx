import React, { useState } from "react";

const calculateSafetyBoxStyle = (contentRect: DOMRect): React.CSSProperties => {
    //Calculate the safety box left position based on the content rectangle and a box sizing multiplier
    const boxSizingMultiplier = 1.3; // Adjust this multiplier to increase the size of the safety box
    const contentRectXCenter = contentRect.left + contentRect.width / 2;
    const safetyBoxXCenter = contentRect.left + (contentRect.width * boxSizingMultiplier / 2);
    const safetyBoxLeft = contentRect.left - (safetyBoxXCenter - contentRectXCenter);

    //Calculate the safety box top position based on the content rectangle and a box sizing multiplier
    const contentRectYCenter = contentRect.top + contentRect.height / 2;
    const heightAdditional = 20; // Add an offset to the height to ensure the safety box covers the area around the popover trigger
    const safetyBoxYCenter = contentRect.top + heightAdditional + (contentRect.height * boxSizingMultiplier / 2);
    const safetyBoxTop = contentRect.top - (safetyBoxYCenter - contentRectYCenter);

    return {
        left: safetyBoxLeft,
        top: safetyBoxTop,
        width: contentRect.width * boxSizingMultiplier,
        height: contentRect.height * boxSizingMultiplier + heightAdditional,
        zIndex: 12,
    }
}

export default function SafetyBox({
  popoverContentRef,
  open,
  setOpen,
}: {
  popoverContentRef: React.RefObject<HTMLDivElement | null>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [safetyBoxStyle, setSafetyBoxStyle]: [
    React.CSSProperties,
    React.Dispatch<React.SetStateAction<React.CSSProperties>>
  ] = useState({});
  //Position the safety box to cover the area around the popover
  React.useEffect(() => {
    if (popoverContentRef.current) {
      const contentRect = popoverContentRef.current.getBoundingClientRect();
      setSafetyBoxStyle(calculateSafetyBoxStyle(contentRect));
    }
  }, [open, popoverContentRef]);
  // Handles mouse leave events for the safety area
  const handleMouseSafetyArea = (e: React.MouseEvent) => {
    //Ensure the mouse didn't go to popover content before closing
    if (
      popoverContentRef.current &&
      !popoverContentRef.current.contains(e.relatedTarget as Node)
    ) {
      // If the mouse leaves the safety area, close the popover
      setOpen(false);
    }
  };

  return (
    <>
      {open && (
        <div
          style={{ ...safetyBoxStyle, pointerEvents: "auto", position: "fixed" }}
          onMouseLeave={handleMouseSafetyArea}
          id="safety-box"
        />
      )}
    </>
  );
}
