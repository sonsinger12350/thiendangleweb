import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export interface ApiError {
  message: string;
  code: string;
  status: number;
  data: unknown;
}

export const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<{ message?: string; code?: string }>) => {
    const apiError: ApiError = {
      message: error.response?.data?.message || "An unexpected error occurred",
      code: error.response?.data?.code || "UNKNOWN_ERROR",
      status: error.response?.status || 500,
      data: error.response?.data || null,
    };

    return Promise.reject(apiError);
  }
);

export default axiosClient;
