import React from "react";
import Button from "../Button";
import NextLink from "next/link";

const NextButton = React.forwardRef((props, ref) => {
  let {
    href,
    external,
    forceLink = false,
    as,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    ...restProps
  } = props;

  const nextLinkProps = { href, as, prefetch, replace, scroll, shallow };

  if (external === undefined) {
    // if not given, default is based on href
    if (
      typeof href === "string" &&
      (href.startsWith("http://") || href.startsWith("https://"))
    ) {
      external = true;
    } else {
      external = false;
    }
  }

  if ((href || forceLink) && !external) {
    return (
      <NextLink {...nextLinkProps} passHref>
        <Button {...restProps} href={href} ref={ref} />
      </NextLink>
    );
  }

  return <Button {...restProps} ref={ref} href={href} />;
});

export default NextButton;
