import React, { useState } from "react";

import { Grid, GridItem } from "@commerce-ui/core/Grid";
import Container from "@commerce-ui/core/Container";
import { AccordionHeader$ } from "@commerce-ui/core/AccordionHeader";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { rslin } from "responsive-helpers";

import { Accordion$ } from "@commerce-ui/core/Accordion";
import { StatefulInput } from "../components/Input";
import { useTheme } from "@commerce-ui/core/Theme";
import data from "../data";
import { Image } from "../components/Image";

import routerPush from "../helpers/routerPush";
import { ButtonRaw } from "../components/ButtonRaw";

const Menu = () => {
  const theme = useTheme();
  // const [open, setOpen] = useState(false);

  const categories = [
    {
      label: "Food",
      image: data.images.landscape2,
      subcategories: [
        {
          label: "Shop all food"
        },
        {
          label: "Snacks"
        },
        {
          label: "Granola & Oatmeal"
        },
        {
          label: "Pantry Essentials"
        },
        {
          label: "Baby Food"
        },
        {
          label: "Baking mixes"
        },
        {
          label: "Beverages"
        }
      ]
    },
    {
      label: "Home",
      image: data.images.landscape3,
      subcategories: [
        {
          label: "Shop all home"
        },
        {
          label: "Cleaning Essentials"
        },
        {
          label: "Tableware"
        },
        {
          label: "Household Essentials"
        },
        {
          label: "Cooks' Tools"
        },
        {
          label: "Outdoor"
        },
        {
          label: "Kitchen Linens"
        },
        {
          label: "Office Supplies"
        },
        {
          label: "Gift & Party"
        }
      ]
    },
    {
      label: "Beauty",
      image: data.images.landscape4,
      subcategories: [
        {
          label: "Shop all beauty & personal care"
        },
        {
          label: "Beauty"
        },
        {
          label: "CBD Collection"
        },
        {
          label: "Personal Care"
        },
        {
          label: "Baby Care"
        }
      ]
    },
    {
      label: "Health",
      image: data.images.landscape5,
      subcategories: [
        {
          label: "Shop all health & wellness"
        },
        {
          label: "Vitamins and Suplements"
        },
        {
          label: "Nutrition Powders"
        },
        {
          label: "CBD Collection"
        },
        {
          label: "Aromatherapy mixes"
        }
      ]
    }
  ];

  const CategoryHeader = image => props => (
    <AccordionHeader$
      {...props}
      overrides={{
        Root: {
          component: (sharedProps, rootProps) => (
            <div
              css={css`
                width: 100%;
                position: relative;
              `}
            >
              <Image
                image={image}
                // mode={"cover"}
                css={css``}
              />
              <div
                css={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  ${theme.fonts.h3.css}
                `}
              >
                <Container>{sharedProps.$title}</Container>
              </div>
            </div>
          )
        }
      }}
    />
  );

  const CategoryItem = props => (
    <div
      css={css` span {${theme.fonts.body2.css} height: ${
        theme.spacings.s140
      }px; display: flex; align-items: center; } &:not(:last-of-type) span {border-bottom: 1px solid ${
        theme.colors.mono300.css
      }; }`}
    >
      <ButtonRaw
        onClick={() => routerPush("/collection")}
        css={css`
          width: 100%;
        `}
      >
        <Container>
          <span>{props.children}</span>
        </Container>
      </ButtonRaw>
    </div>
  );

  return (
    <div>
      <Container
        css={css`
          ${rslin(theme.spacings.s80, theme.spacings.s100).css(
            "margin-top"
          )} ${rslin(theme.spacings.s80, theme.spacings.s100).css(
            "margin-bottom"
          )}
        `}
      >
        <Grid>
          <GridItem params={{ xs: 24, md: [6, 9] }}>
            <StatefulInput
              placeholder={"What you're looking for?"}
              onFocus={() => {
                routerPush("/search");
              }}
              search={true}
            />
          </GridItem>
        </Grid>
      </Container>

      <div>
        {categories.map((category, i) => {
          return (
            <Accordion$
              title={category.label}
              openAtInit={false}
              key={i}
              overrides={{ Header: CategoryHeader(category.image) }}
              css={css`&:not(:first-of-type) {margin-top: ${
                theme.spacings.s20
              }px;`}
              scrollTopAtOpen={true}
            >
              {category.subcategories.map((subcategory, j) => {
                return <CategoryItem key={j}>{subcategory.label}</CategoryItem>;
              })}
            </Accordion$>
          );
        })}
      </div>
    </div>
  );
};

Menu.tabbar = 1;

export default Menu;
