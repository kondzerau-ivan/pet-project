import React, { JSX } from 'react';
import styled from 'styled-components';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

interface StyledHeadingProps {
  as: keyof JSX.IntrinsicElements;
  color?: string;
}

const StyledHeading = styled.h1<StyledHeadingProps>`
  color: ${({ color }) => color || 'inherit'};
  font-size: 2rem;
`;

const Heading: React.FC<HeadingProps> = ({ level, children, className, color }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <StyledHeading as={Tag} className={className} color={color}>{children}</StyledHeading>;
};

export default Heading;
