import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-block text-center';
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-black border-2 border-black hover:bg-gray-50'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName}>
      {children}
    </button>
  );
}
