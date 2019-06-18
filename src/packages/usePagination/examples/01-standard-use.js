import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { usePagination } from "../index";

import { Button } from "../../../../demo/theme/Button";
import { SelectNative } from "../../../../demo/theme/SelectNative";

import LayoutRow from "storefront-ui/LayoutRow";

export default () => {
  const [page, setPage] = useState(1);

  const pagination = usePagination({
    count: 10,
    current: page,
    onChange: setPage,
    href: page => "#" + page
  });

  return (
    <div>
      <p>View with select</p>
      <LayoutRow gutter={10}>
        <Button
          {...pagination.prevButtonProps}
          disabled={!pagination.prevButtonActive}
        >
          Previous
        </Button>
        <div
          css={css`
            width: 70px;
          `}
        >
          <SelectNative {...pagination.selectProps} />
        </div>
        <div>of {pagination.count}</div>
        <Button
          {...pagination.nextButtonProps}
          disabled={!pagination.nextButtonActive}
        >
          Next
        </Button>
      </LayoutRow>

      <p>View with buttons</p>
      <LayoutRow gutter={4}>
        <Button
          {...pagination.prevButtonProps}
          disabled={!pagination.prevButtonActive}
        >
          Previous
        </Button>

        {pagination.parts.map(part => {
          if (part.type === "separator") return <div>...</div>;
          return part.buttons.map(({ props, page }) => (
            <Button
              kind={page === pagination.current ? "primary" : "minimal"}
              {...props}
            >
              {page}
            </Button>
          ));
        })}

        <Button
          {...pagination.nextButtonProps}
          disabled={!pagination.nextButtonActive}
        >
          Next
        </Button>
      </LayoutRow>
    </div>
  );
};
