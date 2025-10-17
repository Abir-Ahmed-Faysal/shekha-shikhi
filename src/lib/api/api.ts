import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

/** Create a single Axios instance */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000, // 10s default
});

/** Simple response interceptor for logging errors */
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);




/** GET request helper */
export async function GetData<T >(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await axiosInstance.get<{ data: T }>(url, config);
  return response.data.data;
}

/** POST request helper */
export async function PostData<T >(
  url: string,
  payload?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axiosInstance.post<{ data: T }>(url, payload, config);
  return response.data.data;
}

/** PUT request helper */
export async function PutData<T >(
  url: string,
  payload?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await axiosInstance.put<{ data: T }>(url, payload, config);
  return response.data.data;
}

/** DELETE request helper */
export async function DeleteData<T >(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await axiosInstance.delete<{ data: T }>(url, config);
  return response.data.data;
}

/** Optional: export instance if needed for advanced uses */
export { axiosInstance };
