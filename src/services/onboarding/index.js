/* eslint-disable no-debugger */
import { responseBuilder } from "lib/helper";
import { apiInstance } from "../../api";

const registerAccount = async (reqParam) => {
  try {
    return responseBuilder(await apiInstance.post("/brand/register", reqParam));
  } catch (err) {
    return null;
  }
};

export const passwordReset = async (reqParam) => {
  try {
    return responseBuilder(
      await apiInstance.patch("/authorizer/register", reqParam)
    );
  } catch (err) {
    return null;
  }
};
export const login = async (payload) => {
  try {
    const { EmailId, Password } = payload;
    const reqParam = {
      EmailId,
      Password,
    };

    const { data } = await apiInstance.post("/authorizer/login", reqParam);
    return data;
  } catch (err) {
    return null;
  }
};

export const generateOTP = async (payload) => {
  try {
    const requestBody = {
      countryCode: "+91",
      contactNumber: payload.ContactNumber,
      action: payload.Action,
      emailId: payload.EmailId,
    };

    return responseBuilder(
      await apiInstance.post(`/authorizer/generate-otp`, requestBody)
    );
  } catch (err) {
    return null;
  }
};

export const updateContactInfo = async (payload, emailId, brandId) => {
  try {
    const reqParam = {
      Name: payload.Name,
      Mobile: payload.Mobile,
      CountryCode: "+91",
      EmailId: emailId,
      Languages: payload.Languages,
      BrandId: brandId,
    };

    return responseBuilder(
      await apiInstance.patch(`/brand/contact-info/${emailId}`, reqParam)
    );
  } catch (err) {
    return null;
  }
};
export const updateBankDetails = async (payload, emailId, brandId) => {
  try {
    const reqParam = {
      BeneficiaryName: payload.BeneficiaryName,
      IFSCode: payload.IFSCode,
      EmailId: emailId,
      AccountNumber: payload.AccountNumber,
      BankName: payload.BankName,
      BrandId: brandId,
      AccountType: payload.AccountType,
    };

    return responseBuilder(
      await apiInstance.patch(`/brand/bank-details/${emailId}`, reqParam)
    );
  } catch (err) {
    return null;
  }
};

export const updateAddressDetails = async (payload, emailId, brandId) => {
  try {
    const reqParam = {
      BillingAddress: payload.BillingAddress,
      ShippingAddress: payload.ShippingAddress,
      BrandId: brandId,
      Logo: payload.Logo,
      Signature: payload.Signature,
    };

    return responseBuilder(
      await apiInstance.patch(
        `/brand/update-address-details/${emailId}`,
        reqParam
      )
    );
  } catch (err) {
    return null;
  }
};

export const updateBusinessDetails = async (payload, emailId) => {
  try {
    const reqParam = {
      BusinessName: payload.BusinessName,
      BusinessType: payload.BusinessType,
      Category: payload.Category,
      SubCategory: payload.SubCategory,
      GSTIN: payload.GSTIN,
      GSTNVerification: payload.GSTNVerification,
      BusinessPAN: payload.BusinessPAN,
      PANOwnerName: payload.PANOwnerName,
      BrandName: payload.BrandName,
      PinCode: payload.PinCode,
      WebSiteLink: payload.WebSiteLink,
      BrandId: payload.BrandId,
    };

    return responseBuilder(
      await apiInstance.patch(`/brand/business-details/${emailId}`, reqParam)
    );
  } catch (err) {
    return null;
  }
};

export const updateDocuments = async (payload, emailId, brandId) => {
  try {
    const reqParam = {
      BrandId: brandId,
      ...payload,
    };

    return responseBuilder(
      await apiInstance.patch(`/brand/update-documents/${emailId}`, reqParam)
    );
  } catch (err) {
    return null;
  }
};
export const getBrandAccount = async (emailId) => {
  const { data } = await apiInstance.get(`/brand/details/${emailId}`);
  return data;
};
export const getHealthCheck = async () => {
  const { data } = await apiInstance.get("/authorizer/health");
  return data;
};
export const postHealth = async () =>
  responseBuilder(await apiInstance.post("/authorizer/health"));

export default registerAccount;
