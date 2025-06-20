"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  initialActiveItemIndex?: number;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false); // This state seems intended for background/shadow change on scroll

  useMotionValueEvent(scrollY, "change", (latest) => {
    // If you want the background/shadow to appear only after scrolling down
    if (latest > 10) { // Reduced threshold for visibility change on scroll
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // Fixed position, full width, top 0, z-index for layering
      // Bg-black applied here for the base navbar color
      className={cn("fixed inset-x-0 top-0 z-40 w-full bg-black", className)}
      // Add optional shadow/blur animation on scroll here if desired globally for the navbar wrapper
      animate={{
        // For a more subtle shadow on scroll that matches the black background well
        boxShadow: visible
          ? "0px 2px 10px rgba(0, 0, 0, 0.5)" // Darker shadow for black background
          : "none",
        // Only apply blur if explicitly desired on scroll. Image doesn't show blur.
        backdropFilter: visible ? "blur(5px)" : "none", // Subtle blur on scroll
      }}
      transition={{
        type: "tween", // Smoother transition for blur/shadow
        duration: 0.2
      }}
    >
      {/*
        Cloning children to pass the 'visible' prop down.
        This allows NavBody and MobileNav to react to scroll state.
      */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      // No explicit animation for backdropFilter or boxShadow here,
      // as it's now handled by the parent Navbar component for consistency with the image.
      // If you want these effects specifically per NavBody (e.g., when it becomes a floating pill),
      // then re-add them here. For a full-width flat black bar, they're less relevant.
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        // Ensure full width, centered content, and responsive padding
        // Removed fixed width classes as the Navbar wrapper is full width
        "relative z-[60] mx-auto flex w-full flex-row items-center justify-between self-start px-4 py-4 sm:px-6 md:px-8 lg:px-12",
        // `max-w-7xl` is usually good for desktop content width
        // `rounded-full` makes sense for a floating pill, but not a full-width bar. Removing for full-width.
        // `bg-transparent` is correct for initial state if Navbar handles `bg-black`
        // `visible && "bg-black"` is redundant if Navbar already sets `bg-black`
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, initialActiveItemIndex }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(initialActiveItemIndex !== undefined ? initialActiveItemIndex : null);

  return (
    <motion.div
      onMouseLeave={() => {
        if (initialActiveItemIndex === undefined) {
          setHovered(null);
        } else {
          setHovered(initialActiveItemIndex);
        }
      }}
      className={cn(
        // Hide on small screens, show on medium and up
        "hidden md:flex flex-row items-center justify-center space-x-2 lg:space-x-4 text-sm md:text-base lg:text-lg font-medium",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-2 py-1 md:px-3 md:py-2 text-white hover:text-gray-300 transition-colors duration-200" // Added hover effect
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-item-highlight" // Changed layoutId for uniqueness
              className="absolute inset-0 h-full w-full rounded-full border border-white opacity-70" // Subtle opacity for the border
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      // Remove backdropFilter and boxShadow here for consistency with the full-width image.
      // These effects are more for a "floating" mobile nav.
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        // Only show on small screens (hidden on md and up)
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between px-4 py-2 md:hidden",
        // `visible && "bg-black"` is redundant if parent Navbar handles `bg-black`
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Start slightly above
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }} // Exit upwards
          transition={{ type: "tween", duration: 0.2 }}
          className={cn(
            // Full width of its parent (MobileNav), top-full to be below header
            "absolute inset-x-0 top-full z-50 flex w-full flex-col items-start justify-start gap-4 rounded-b-lg bg-black px-4 py-4 shadow-lg", // Simplified shadow
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white h-6 w-6" onClick={onClick} /> // Added size classes
  ) : (
    <IconMenu2 className="text-white h-6 w-6" onClick={onClick} /> // Added size classes
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
        <img
          src="/nexus.svg"
          alt="Nexus Logo"
          width={90} // Adjusted for typical navbar logo size
          height={90} // Adjusted
          className="h-auto w-auto max-h-12 md:max-h-16" // Responsive max height
        />
    </a>
  );
};


// Main component to render the Navbar
const MyNavbar = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Schedule", link: "#schedule" },
    { name: "Speakers", link: "#speakers" },
    { name: "Tickets", link: "#tickets" },
    { name: "Venue", link: "#venue" },
    { name: "Sponsors", link: "#sponsors" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar className="bg-black">
        {/* Desktop Navbar Body - visible on md and up */}
        <NavBody className="hidden md:flex"> {/* Explicitly hide on small, show on md */}
          <NavbarLogo />
          <NavItems items={navItems} initialActiveItemIndex={0} />
        </NavBody>

        {/* Mobile Navbar Body - visible only below md */}
        <MobileNav className="md:hidden"> {/* Explicitly show on small, hide on md */}
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <NavItems
              items={navItems}
              className="flex-col items-start space-x-0 space-y-4" // Stack items vertically
              onItemClick={() => setIsMobileMenuOpen(false)} // Close menu on item click
            />
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default MyNavbar;