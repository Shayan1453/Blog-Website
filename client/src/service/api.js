import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';
import { getAccessToken, getType } from '../utils/common-utils';

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

// Request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        const accessToken = getAccessToken();

        // Attach token if available and endpoint requires it
        if (accessToken && config.url !== SERVICE_URLS.userSignup.url) {
            config.headers.authorization = accessToken;
        }

        // Configure params or query from TYPE object
        if (config.TYPE?.params) {
            config.params = config.TYPE.params;
        } else if (config.TYPE?.query) {
            config.url = config.url + '/' + config.TYPE.query;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        return processResponse(response);
    },
    function (error) {
        return Promise.reject(processError(error));
    }
);

// Process response
const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data };
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.data?.message || 'Unknown Error Occurred',
            code: response?.status
        };
    }
};

// Process error
const processError = (error) => {
    if (error.response) {
        const status = error.response?.status;
        const message = error.response?.data?.message || "Request failed";

        // Error mapping based on status code
        if (status === 401) {
            return {
                isError: true,
                msg: "Incorrect username or password",
                code: status
            };
        } else if (status === 409) {
            return {
                isError: true,
                msg: "Username already exists",
                code: status
            };
        } else if (status === 403) {
            sessionStorage.clear();
            return {
                isError: true,
                msg: "Session expired, please login again",
                code: status
            };
        } else {
            return {
                isError: true,
                msg: message,
                code: status
            };
        }
    } else if (error.request) {
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        };
    } else {
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        };
    }
};

// API methods
const API = {};

// Loop through SERVICE_URLS to create API methods
for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? undefined : body,
            responseType: value.responseType,
            TYPE: getType(value, body),
            onUploadProgress: function (progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function (progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        });
}

export { API };
