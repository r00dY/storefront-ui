import React from "react";
import Link from "../Link";
import LinkNext from "next/link";

function NewLink(props) {
  const {
    href,
    as,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    ...restProps
  } = props;

  const nextLinkProps = { href, as, prefetch, replace, scroll, shallow };

  return (
    <LinkNext {...nextLinkProps} passHref>
      <Link {...restProps} href={href} />
    </LinkNext>
  );
}

export default NewLink;
