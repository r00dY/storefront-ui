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
    _ref,
    ...restProps
  } = props;

  const nextLinkProps = { href, as, prefetch, replace, scroll, shallow };

  return (
    <LinkNext {...nextLinkProps} passHref>
      <Link {...restProps} href={href} ref={_ref} />
    </LinkNext>
  );
}

export default React.forwardRef((props, ref) => (
  <NewLink {...props} _ref={ref} />
));
