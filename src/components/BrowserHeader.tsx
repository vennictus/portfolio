'use client';

interface BrowserHeaderProps {
  date?: string;
  filename?: string;
  variant?: 'blog' | 'project';
}

export default function BrowserHeader({ date, filename, variant = 'blog' }: BrowserHeaderProps) {
  const displayText = filename || date || '';
  const dotColor = variant === 'blog' ? 'bg-[#28c840]' : 'bg-[#28c840]';

  return (
    <div className="browser-header">
      <div className="flex gap-2">
        <div className={`w-3 h-3 rounded-full ${dotColor}`} />
        <div className={`w-3 h-3 rounded-full ${dotColor}`} />
      </div>
      {displayText && <span className="date-stamp">{displayText}</span>}
    </div>
  );
}
