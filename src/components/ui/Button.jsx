import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon: Icon,
  iconRight,
  className = '',
  ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {Icon && !iconRight && <Icon size={18} />}
        <span>{children}</span>
        {Icon && iconRight && <Icon size={18} />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {Icon && !iconRight && <Icon size={18} />}
        <span>{children}</span>
        {Icon && iconRight && <Icon size={18} />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && !iconRight && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconRight && <Icon size={18} />}
    </button>
  );
}
