import { privateAPI } from "../config/constants";

export const uploadSingleFile = async (payload) => {
  try {
    const response = await privateAPI.post("/auth/upload-image", payload);
    return response?.data?.data;
  } catch (error) {
    console.log("UPLOAD FILE ERROR:", error?.response?.data?.message);
    throw new Error(error?.response?.data?.message || "File upload failed");
  }
};