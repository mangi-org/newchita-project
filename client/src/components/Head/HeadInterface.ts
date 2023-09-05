import React from 'react';

interface HeadInterface {
    title?: string
    description?: string
    url?: string
    siteName?: string
    locale?: string
    localeAlternate?: string
    children?: React.ReactNode
}

export default HeadInterface;
