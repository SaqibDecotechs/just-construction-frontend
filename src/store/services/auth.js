import { privateAPI, publicAPI } from "../../config/constants";
import store from "../../store";
import { toast } from 'react-toastify';

import { clearUser, setAllUser, setUser } from "../slices/authSlice";

const handleError = (error) => {
  const message = error?.response?.data?.message || "Server Error";
  console.error(message);
  toast.error(message);
};

const handleSuccess = (message) => {
  toast.success(message);
};

export const login = async (payload) => {
  try {
    const response = await publicAPI.post("/auth/login", payload);
    const unverified = response?.data?.data?.message === "Unverified";
    if (unverified) {
      const isToken = await requestEmailToken(payload.email);
      if (isToken) {
        return "unverified";
      }
    } else {
      store.dispatch(setUser(response?.data?.data));
      // getUser();
      localStorage.setItem("token", response?.data?.data?.token);
      localStorage.setItem("userId", response?.data?.data?.user?._id);
      handleSuccess('Login successful!');
      return "verified";
    }
  } catch (error) {
    handleError(error);
    return error?.response?.data?.message;
  }
};

export const register = async (payload) => {
  try {
    const response = await publicAPI.post("/auth/register", payload);
    if (response) {
      const isEmailVerified = await requestEmailToken(payload?.email);
      handleSuccess('Registration successful! Please check your email for verification.');
      return isEmailVerified || true; // Ensure it returns truthy value for redirect
    }
  } catch (error) {
    handleError(error);
    return false;
  }
};

export const forgotPassword = async (payload) => {
  try {
    const response = await publicAPI.post("/auth/forgot-password", {
      email: payload,
    });
    if (response) {
      handleSuccess('Reset link sent to your email successfully!');
    }
    return response;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const resetPassword = async (payload) => {
  try {
    const response = await publicAPI.post("/auth/reset-password", payload);
    if (response) {
      handleSuccess('Password reset successfully!');
    }
    return response;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const requestEmailToken = async (payload) => {
  try {
    const response = await publicAPI.post("/auth/requestEmailToken", {
      email: payload,
    });
    return response;
  } catch (error) {
    handleError(error);
  }
};

export const verifyEmail = async (payload) => {
  try {
    const response = await publicAPI.post("/auth/verifyEmail", payload);
    console.log(response?.data?.data);
    return response;
  } catch (error) {
    handleError(error);
  }
};

export const createPassword = async (payload) => {
  try {
    const response = await publicAPI.post("/auth/createPassword", payload);
    console.log(response?.data?.data);
    return response;
  } catch (error) {
    handleError(error);
  }
};

export const getUser = async () => {
  try {
    if (localStorage.getItem("token")) {
      const response = await privateAPI.get("/auth/profile");
      console.log("🚀 ~ getUser ~ response:", response)
      store.dispatch(setUser(response?.data?.data));
      // localStorage.setItem("token", response?.data?.data?.token);
      localStorage.setItem("userId", response?.data?.data?.user?._id);
      // if (!response?.data?.data?.user?.isActive) {
      //   logout();
      // }
      return response?.data?.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    logout()
  }
};

export const updateUser = async (payload) => {
  try {
    const response = await privateAPI.post("/auth/update", payload);
    if (response) {
      handleSuccess(response?.data?.data?.message || "User updated successfully.");
      await getUser();
    }
    return response;
  } catch (error) {
    handleError(error);
  }
};

export const updatePassword = async (payload) => {
  try {
    const response = await privateAPI.post("/auth/updatepassword", payload);
    if (response) {
      handleSuccess(
        response?.data?.data?.message || "Password updated successfully."
      );
      await getUser();
    }
    return response;
  } catch (error) {
    handleError(error);
  }
};

export const logout = async () => {
  localStorage.clear();
  store.dispatch(clearUser());
  handleSuccess('Logged out successfully!');
};

export const getUserStatus = async () => {
  try {
    const response = await privateAPI.post("/auth/user-status", {
      _id: localStorage.getItem("userId"),
    });
    if (!response?.data?.data?.status) {
      logout();
    }
    return response;
  } catch (error) {
    handleError(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await privateAPI.get("/admin/get-users-schedule");
    if (response) {
      store.dispatch(setAllUser(response?.data?.data));
    }
    return response?.data?.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateImage = async (data) => {
  try {
    const res = await privateAPI.post("", data);
    if (res?.status === 200) {
      return res;
    }
  } catch (error) {
    console.log("error image", error);
  }
};