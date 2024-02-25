import clsx from 'clsx';
import { FC } from 'react';

interface ToggleProps {
  leftLabel: string;
  rightLabel: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Toggle: FC<ToggleProps> = ({
  leftLabel,
  rightLabel,
  value,
  onChange,
}) => {
  // Handle change for the range input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '1';
    onChange(newValue);
  };

  return (
    <div className="flex items-center">
      <div
        onClick={() => onChange(false)}
        className={clsx('px-2 font-bold text-white cursor-pointer', {
          '!text-primary-3': value,
        })}
      >
        {leftLabel}
      </div>
      <input
        type="range"
        min="0"
        max="1"
        value={value ? 1 : 0}
        onChange={handleInputChange} // Use onChange instead of onClick
        className="w-8"
      />
      <div
        onClick={() => onChange(true)}
        className={clsx('px-2 font-bold text-white cursor-pointer', {
          '!text-primary-3': !value,
        })}
      >
        {rightLabel}
      </div>
    </div>
  );
};
