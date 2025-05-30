import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";

import SafetyBox from "./SafetyBox";

export default function ContactPopover() {
  const [open, setOpen] = useState(false);
  const popoverContentRef = React.useRef<HTMLDivElement | null>(null);

  //Additonal hover functionality to delay opening the popover
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  // Begins a timeout to open the popover after 700ms when the button is hovered
  const handleMouseEnterButton = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpen(true);
    }, 700);
  };
  // Clears the timeout if the button is no longer hovered before the timeout completes
  const handleMouseLeaveButton = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        id="contact"
        onMouseEnter={handleMouseEnterButton}
        onMouseLeave={handleMouseLeaveButton}
      >
        <div className="text-neutral-700 hover:text-neutral-900 transition text-lg font-bold cursor-pointer">
          Contact
        </div>
      </PopoverTrigger>
      {/* Safety box used to determine when the user has exited */}
      <SafetyBox popoverContentRef={popoverContentRef} open={open} setOpen={setOpen} />
      <PopoverContent ref={popoverContentRef} style={{ zIndex: 11 }}>
        <div className="text-sm text-neutral-800">
          <p className="font-medium mb-1">Brett M. Hixon</p>
          <p className="mb-2">Rose-Hulman Institute of Technology</p>
          <p className="mb-1">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:hixonbm@rose-hulman.edu"
              className="text-blue-600 underline"
            >
              hixonbm@rose-hulman.edu
            </a>
          </p>
          <p className="mb-1">
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/RHIT-hixonbm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              github.com/RHIT-hixonbm
            </a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/hixonbm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              linkedin.com/in/hixonbm
            </a>
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
