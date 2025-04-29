export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <input
        className={`border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
        {...props}
      />
    );
  };
  