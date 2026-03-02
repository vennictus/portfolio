'use client';

import { useState } from 'react';

interface ShareButtonProps {
    title: string;
    excerpt: string;
    url?: string;
}

export default function ShareButton({ title, excerpt, url }: ShareButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        const shareUrl = url || window.location.href;
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors duration-200 font-mono px-3 py-1.5 border border-transparent hover:border-card-border rounded-sm"
            title="Copy link"
        >
            {copied ? (
                <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-accent-secondary">copied!</span>
                </>
            ) : (
                <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>share</span>
                </>
            )}
        </button>
    );
}
