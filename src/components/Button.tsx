import React from 'react';
import styled from 'styled-components';
import {
  variant,
  color as styledSystemColor,
  space,
  SpaceProps,
} from 'styled-system';

const buttonTypes = {
  outline: {
    padding: "10px 14px",
    border: "1px solid #C8D0DA",
    borderRadius: 5,
    "max-height": 40,
    maxWidth: 40,
  },
  navButton: {
    alignItems: "center",
    display: "flex",
    padding: "11px 12px",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.2)",
      borderRadius: 5,
    }
  }
}
interface ButtonProps {
  type?: keyof typeof buttonTypes;
  title?: string;
  Icon?: () => React.ReactElement;
  onClick?: () => void;
}


interface ButtonStyleProps {
  type: keyof typeof buttonTypes;
}

const Container = styled.div<ButtonStyleProps>(
  styledSystemColor,
  space,
  variant({
    prop: 'type',
    variants: buttonTypes,
  }),
  {
    cursor: "pointer",
  }
);

const Title = styled.span`
  font-size: 14px;
  line-height: 15px;
  color: #FFFFFF;
  margin-left: 10px;
`;

export function Button({ title, type = "outline", Icon, ...rest }: ButtonProps & SpaceProps) {
  return (
    <Container type={type} {...rest}>
      {Icon ? <Icon /> : null}
      {title ? <Title>{title}</Title> : null}
    </Container>
  )
}