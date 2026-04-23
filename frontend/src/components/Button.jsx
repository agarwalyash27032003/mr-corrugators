import React from "react";

const Button = ({
  children,
  href,
  onClick,
  type = "button",
  ...rest
}) => {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      type={!href ? type : undefined}
      {...rest}
      className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-purple-600 border-2 border-purple-500 rounded-full overflow-hidden group transition-all duration-300"
    >
      <span className="absolute inset-0 w-0 bg-purple-500 transition-all duration-500 ease-out group-hover:w-full rounded-full"></span>

      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md bg-purple-400 transition duration-500"></span>

      <span className="relative flex items-center gap-2 z-10 transition-all duration-300 group-hover:text-white">
        {children}

        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Component>
  );
};

export default Button;