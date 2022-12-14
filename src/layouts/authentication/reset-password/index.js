/* eslint-disable no-unused-vars */

// Images
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Grid from "@mui/material/Grid";
import { useCallback } from "react";
import ResetPassword from "pages/authentication/reset-password";
import loginImage from "../../../assets/images/login.png";

function Basic() {
  return useCallback(
    <CoverLayout>
      <Grid item xs={6}>
        <img src={loginImage} width={620} height={520} alt="abc" />
      </Grid>
      <Grid item xs={4}>
        <ResetPassword />
      </Grid>
    </CoverLayout>
  );
}

export default Basic;
