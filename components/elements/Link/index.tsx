import React from 'react';
import NextLink, { LinkProps } from 'next/link';

type LinkType = LinkProps & { children: React.ReactElement };

function Link({ children, ...rest }: LinkType) {
  return (
    <NextLink {...rest} prefetch={false} passHref={true}>
      {children}
    </NextLink>
  );
}

export default Link;
