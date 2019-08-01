import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PageTitle from "../theme/PageTitle";
import ProfileLogInContent from "../theme/ProfileLogInContent";

const Profile = () => {
  const theme = useTheme();

  return (
    <div>
      <Container>
        <PageTitle title={"Profile"} />
        <Grid>
          <GridItem params={{ xs: 24, sm: [8, 8] }}>
            <div
              css={css`
                margin-top: ${theme.spacings.s80}px;
              `}
            >
              <ProfileLogInContent />
            </div>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

Profile.tabbar = 4;

export default Profile;
