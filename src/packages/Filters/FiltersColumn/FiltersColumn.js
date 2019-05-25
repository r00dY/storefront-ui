import PropTypes from "prop-types";
import React from "react";

import { Accordion$ } from "../../Accordion";
import { BodyStyled, SeparatorStyled } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../../base/helpers/overrides";

const FiltersColumn$ = props => {
  const onChange = () => console.log("sth changed!");

  const {
    data,
    overrides: {
      Header: Header,

      Separator: SeparatorOverride,
      Body: BodyOverride,

      filterComponents: filterComponents
    }
  } = props;

  return (
    <div>
      {data.map((filter, index) => {
        // let arg; // value for components.select or components.range, etc
        // let argCustom = false;
        //
        // // Let's look for specials
        // if (props.components.__custom) {
        //     props.components.__custom.forEach(custom => {
        //         if (custom.match(filter)) {
        //             arg = custom.component;
        //             argCustom = true;
        //         }
        //     });
        // }
        // if (!argCustom) {
        //     arg = props.components[filter.type];
        // }
        //
        // let component;
        // if (typeof arg === "function") {
        //     // if function just call it
        //     component = arg({ data: data, filter, onChange });
        // } else {
        //     // otherwise, arg is object of config
        //     let options = Object.assign(
        //         {},
        //         components[filter.type].defaultOptions,
        //         arg
        //     );
        //     component = components[filter.type].component(
        //         { data: data, filter, onChange },
        //         options
        //     );
        // }

        const Component = filterComponents[filter.type];

        const [Body, bodyProps] = getOverrides(BodyOverride, BodyStyled);
        const [Separator, separatorProps] = getOverrides(
          SeparatorOverride,
          SeparatorStyled
        );

        return (
          <React.Fragment key={filter.id}>
            <div
              css={css`
                ${index < data.length - 1
                  ? rs(props.gutter).css("margin-bottom")
                  : ""}
                ${index > 0 ? rs(props.gutter).css("margin-top") : ""}
              `}
            >
              <Accordion$
                overrides={{
                  Header: Header
                }}
                title={filter.name}
              >
                <Body {...bodyProps}>
                  <Component filter={filter} onChange={onChange} />
                </Body>
              </Accordion$>
            </div>
            {index < data.length - 1 && <Separator {...separatorProps} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

FiltersColumn$.defaultProps = {
  gutter: 16,
  overrides: {}
};

FiltersColumn$.propTypes = {
  gutter: PropTypes.any.isRequired,
  overrides: PropTypes.object
};

export default FiltersColumn$;
