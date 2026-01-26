'use client';

interface BrowserHeaderProps {
  date?: string;
  filename?: string;
}

export default function BrowserHeader({ date, filename }: BrowserHeaderProps) {
  const displayText = filename || date || '';

  return (
    <div className="browser-header">
      <div className="browser-dots">
        <div className="browser-dot" />
        <div className="browser-dot" />
      </div>
      {displayText && <span className="date-stamp">{displayText}</span>}
    </div>
  );
}
