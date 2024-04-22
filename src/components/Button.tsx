import React, { ReactNode } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { If, Then } from 'react-if'
import { baseTheme } from '../data/baseTheme'
import { TEXTSTYLES } from '../data/textStyles'
import { ButtonProps } from '../interface/ButtonProps'

const SIZES: any = {
    xtra: {
        '--height': '48px',
        '--padding': '0 16px',
        '--min-width': '96px',
        '--font-size': '14px',
        '--font-weight': '600',
    },
    big: {
        '--height': '36px',
        '--padding': '0 16px',
        '--min-width': '96px',
        '--font-size': '14px',
        '--font-weight': '600',
    },
    small: {
        '--height': '32px',
        '--padding': '0 16px',
        '--min-width': '96px',
        '--font-size': '14px',
        '--font-weight': '600',
    },
}

export function Button(props: ButtonProps) {
    const {
        variant = 'primary',
        size = 'big',
        children,
        disabled,
        full,
        style,
        redTheme,
        iconLeft,
        iconRight,
        onClick,
    } = props
    const styles = SIZES[size]

    let Component: any
    switch (variant) {
        case 'primary':
            Component = PrimaryButton
            break
        case 'secondary':
            Component = SecondaryButton
            break
        case 'tertiary':
            Component = TertiaryButton
            break
        case 'ghost':
            Component = GhostButton
            break
        default:
            throw new Error(`Unrecognized Button variant: ${variant}`)
    }

    return (
        <ThemeProvider theme={baseTheme}>
            <Component
                style={{
                    ...styles,
                    ...style,
                }}
                size={size}
                disabled={disabled}
                full={full}
                redTheme={redTheme}
                onClick={onClick}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 6,
                    }}
                >
                    <If condition={iconLeft !== null}>
                        <Then>{iconLeft}</Then>
                    </If>
                    {children}
                    <If condition={iconRight !== null}>
                        <Then>{iconRight}</Then>
                    </If>
                </div>
            </Component>
        </ThemeProvider>
    )
}

const ButtonBase = styled.button<{ full?: boolean }>`
    ${({ size }: any) => (size === 'big' ? TEXTSTYLES.button : TEXTSTYLES.buttonMobile)};
    padding: var(--padding);
    height: var(--height);
    min-width: var(--min-width);
    border-radius: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: var(--font-weight);
    font-size: var(--font-size);
    line-height: 22px;
    cursor: pointer;
    ${({ full }) => (full ? `width: 100%;` : '')}
`

const PrimaryButton = styled(ButtonBase)`
    border: 2px solid ${(p) => (p.disabled ? p.theme.grey.lighter : p.theme.pink.regular)};
    background-color: ${(p) => p.theme.pink.regular};
    color: ${(p) => p.theme.white};
    transition: 0.3s all;

    &:hover {
        background-color: ${(p) => p.theme.pink.dark};
    }

    &:disabled {
        background-color: ${(p) => p.theme.grey.lighter};
        border: 2px solid ${(p) => p.theme.grey.lighter};
    }
`

const SecondaryButton = styled(ButtonBase)`
    border: 2px solid ${(p) => (p.disabled ? p.theme.grey.lighter : p.theme.pink.lightest)};
    background-color: ${(p) => p.theme.pink.lightest};
    color: ${(p) => p.theme.pink.regular};

    &:hover {
        background-color: ${(p) => p.theme.pink.lightest};
        color: ${(p) => p.theme.pink.dark};
    }

    &:disabled {
        background-color: ${(p) => p.theme.grey.lighter};
        color: ${(p) => p.theme.white};
    }
`

const TertiaryButton = styled(ButtonBase)`
    color: ${(p: any) => (p.redTheme ? p.theme.red.regular : p.theme.pink.regular)};
    background-color: transparent;
    border: 2px solid ${(p: any) => (p.redTheme ? p.theme.red.regular : p.theme.pink.regular)};
    &:hover {
        color: ${(p: any) => (p.redTheme ? p.theme.red.regular : p.theme.pink.dark)};
        border: 2px solid ${(p: any) => (p.redTheme ? p.theme.red.regular : p.theme.pink.dark)};
    }

    &:disabled {
        color: ${(p) => p.theme.grey.lighter};
        border: 2px solid ${(p) => p.theme.grey.lighter};
    }
`

const GhostButton = styled(ButtonBase)`
    color: ${(p) => p.theme.pink.regular};
    background-color: transparent;
    border: 2px solid transparent;
    &:hover {
        color: ${(p) => p.theme.pink.dark};
    }

    &:disabled {
        color: ${(p) => p.theme.grey.lighter};
    }
`

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost']),
    size: PropTypes.oneOf(['small', 'big', 'xtra']),
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    full: PropTypes.bool,
}
