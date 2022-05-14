/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";
import MDCard from "components/MDCard";

const CustomTabPanel = styled(TabPanel)({
  paddingLeft: 0,
  paddingTop: 0,
  padding: `${0} !important`,
});

export default function ExclusiveTab(props) {
  debugger;
  const [value, setValue] = React.useState("1");
  const { tabs, data } = props;
  const products = data;
  // const [products,setProducts]=React.useState(data||[])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MDBox>
      {tabs && tabs.length > 0 ? (
        <TabContext value={value} variant="standard">
          <MDBox sx={{ maxWidth: "100%" }}>
            <TabList
              variant="scrollable"
              scrollButtons="auto"
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ p: 1 }}
            >
              {tabs.map((x) => (
                <Tab label={x.label} value={x.id} />
              ))}
            </TabList>
          </MDBox>
          {tabs.map((x) => (
            <CustomTabPanel sx={{ marginTop: 2 }} value={x.id}>
              <Grid container spacing={1}>
                {products ? (
                  products[x.label].map((info) => (
                    <Grid item xs={3}>
                      {info.ImageLinks[0] ? (
                        <MDCard
                          brand={info.ProductBrand}
                          ratting={info.Rating}
                          price={info.SellingPrice}
                          mrp={info.MRP}
                          title={info.Tittle}
                          stock={info.Stock || 0}
                          image={info.ImageLinks[0]}
                          type={info.ProductType}
                          productId={info.ProductId}
                          category={info.Category}
                        />
                      ) : (
                        <></>
                      )}
                    </Grid>
                  ))
                ) : (
                  <></>
                )}
              </Grid>
            </CustomTabPanel>
          ))}
        </TabContext>
      ) : (
        <MDTypography>
          You dont have any active product in your inventory
        </MDTypography>
      )}
    </MDBox>
  );
}
