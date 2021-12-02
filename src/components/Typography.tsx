import React from 'react';
import styled from 'styled-components';
import {
  variant,
} from 'styled-system';

const textVariants = {
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 16,
  },
  button: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
  body: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
};

interface TextProps {
  type: keyof typeof textVariants;
}

const Text = styled.span<TextProps>(
  variant({
    prop: 'type',
    variants: textVariants,
  }),
);

export function Typography({
  children,
  type = 'body',
  ...rest
}: {
  type?: keyof typeof textVariants;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Text type={type} {...rest}>
      {children}
    </Text>
  );
}
