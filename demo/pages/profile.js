import React, { useState } from "react";

import { Grid, GridItem } from "@commerce-ui/core/Grid";
import Container from "@commerce-ui/core/Container";
import { useTheme } from "@commerce-ui/core/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PageTitle from "../components/PageTitle";
import ProfileLogInContent from "../components/ProfileLogInContent";

const Profile = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding-bottom: 50px;
      `}
    >
      <Container>
        <PageTitle title={"Profile"} />
        <Grid>
          <GridItem params={{ xs: 24, sm: [8, 8] }}>
            <div css={css``}>
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
