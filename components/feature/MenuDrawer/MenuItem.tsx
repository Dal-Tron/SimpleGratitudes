import clsx from 'clsx';

export const MenuItem = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <div onClick={onClick} className="sg-menu-item">
      <div className="sg-menu-item-text">{label}</div>
      <div
        className={clsx('sg-menu-item-icon', {
          'sg-menu-item-icon-selected': isActive,
        })}
      >
        <Icon />
      </div>
    </div>
  );
};
