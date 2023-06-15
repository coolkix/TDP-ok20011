import React from 'react';

export const NavLink: React.FC<NavLinkProps> = (props) => {
    return (
        <li>
            <a
                href={props.href || '#'}
                className="text-white"
            >
                {props.title}
            </a>
        </li>
    );
};

interface NavLinkProps {
    href?: string;
    title: string;
}