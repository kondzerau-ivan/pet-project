import React, { JSX } from 'react';
import styled from 'styled-components';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  fontSize?: string;
  color?: string;
}

interface StyledHeadingProps {
  as: keyof JSX.IntrinsicElements;
  color?: string;
  fontSize?: string;
}

const StyledHeading = styled.h1<StyledHeadingProps>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({fontSize}) => fontSize || 'inherit'};
`;

const Heading: React.FC<HeadingProps> = ({ level, children, className, fontSize, color }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <StyledHeading as={Tag} className={className} fontSize={fontSize}  color={color}>{children}</StyledHeading>;
};

export default Heading;
