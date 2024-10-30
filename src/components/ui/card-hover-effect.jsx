/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-Gray dark:bg-lightBlack/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {/* <Link to={item?.link} className="text-mediumBlue absolute bottom-4 right-4">Learn More</Link> */}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-8 overflow-hidden bg-lightBlack border border-transparent dark:border-White/[0.2] group-hover:border-Gray relative z-20",
        className
      )}>
      <div className="relative z-50 h-full flex flex-col justify-between">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn("text-White font-bold tracking-wide mt-4 text-3xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p className={cn("mt-8 text-Gray tracking-wide leading-relaxed text-xl ", className)}>
      {children}
    </p>
  );
};