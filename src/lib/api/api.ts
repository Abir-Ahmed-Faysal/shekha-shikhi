import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosError } from "axios";

/** Create a single Axios instance */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000, // 10s default
});

/** Log API errors globally */
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

/** Common Axios error handler */
function handleAxiosError(err: unknown): never {
  if (axios.isAxiosError(err)) {
    const axiosError = err as AxiosError<{ message?: string }>;
    if (axiosError.response?.status === 404) {
      throw new Error(axiosError.response.data?.message || "Data not found");
    }
    throw new Error(axiosError.response?.data?.message || axiosError.message);
  }
  throw new Error("Unexpected error occurred");
}

/** GET request helper */
export async function GetData<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response = await axiosInstance.get<{ data: T }>(url, config);
    return response.data.data;
  } catch (err) {
    handleAxiosError(err);
  }
}

/** POST request helper */
export async function PostData<T>(url: string, payload?: unknown, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response = await axiosInstance.post<{ data: T }>(url, payload, config);
    return response.data.data;
  } catch (err) {
    handleAxiosError(err);
  }
}

/** PUT request helper */
export async function PutData<T>(url: string, payload?: unknown, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response = await axiosInstance.put<{ data: T }>(url, payload, config);
    return response.data.data;
  } catch (err) {
    handleAxiosError(err);
  }
}

/** DELETE request helper */
export async function DeleteData<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response = await axiosInstance.delete<{ data: T }>(url, config);
    return response.data.data;
  } catch (err) {
    handleAxiosError(err);
  }
}

/** Export instance for advanced use */
export { axiosInstance };
