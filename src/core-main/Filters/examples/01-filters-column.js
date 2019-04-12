import React, {useState} from "react";
import {FiltersColumn} from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import filterData from "../../../../docs-utils/filtersData";

export default () => {
    return <div>
        <FiltersColumn
            css={css`
                width: 400px;
            `}
            data={filterData}
        />
    </div>
};
