import { environment as env} from "src/environments/environment";

const API_BASE_URL = env.api_base_path;

export const ApiRouteMethods = {
    post: 'POST',
    get: 'GET',
    put: 'PUT',
    delete: 'DELETE'
};

export const ApiRoutes = {
    api_login_route: API_BASE_URL + "/auth/login",
    api_forgot_password_route: API_BASE_URL + "/auth/forgot-password",
    api_reset_password_route: API_BASE_URL + "/auth/reset-password"
};