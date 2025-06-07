'use client';
import React from 'react';

type Props = {
    children: React.ReactNode;
    size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    weight?: number;
    lineheight?: string;
    spacing?: string;
    className?: string;
    style?: React.CSSProperties;
};

const sizes = {
    h1: '36px',
    h2: '28px',
    h3: '24px',
    h4: '18px',
    h5: '16px',
    h6: '14px',
};

export default function Typography({
    children,
    size,
    weight,
    lineheight,
    spacing,
    className = '',
    style = {},
}: Props) {
    const customStyle = {
        fontSize: sizes[size],
        fontWeight: weight,
        lineHeight: lineheight,
        letterSpacing: spacing,
        ...style,
    };

    return (
        <p className={className} style={customStyle}>
            {children}
        </p>
    );
}
