import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import Icon from '../Icon';

interface CopyIconProps {
  copyContent: any;
}

const CopyIcon: React.FC<CopyIconProps> = ({ copyContent }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(copyContent);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 1500);
  }, [copied]);
  return (
    <div>
      <button
        onClick={onCopy}
        className={`copy-anchor transform-all flex aspect-square w-7 items-center justify-center rounded-full bg-[#4285F4] duration-300 ${
          copied && 'bg-[#0F9D58]'
        }`}
        data-tooltip-content={copied ? 'Copied' : 'Copy'}
      >
        <Icon.DocumentCopy className='h-4 w-4 fill-white' />
      </button>
      <Tooltip anchorSelect='.copy-anchor' />
    </div>
  );
};

export default CopyIcon;
