const API_BASE_URL = "https://localhost";
import { environment as env} from "src/environments/environment";

export const ApiRoutes = {
    api_login_route: API_BASE_URL + "/auth/login",
    api_register_route: API_BASE_URL + "/users/register",
    api_activate_route: API_BASE_URL + "/users/activate",
    api_forgot_password_route: API_BASE_URL + "/auth/forgot-password",
    api_reset_password_route: API_BASE_URL + "/auth/reset-password",
    api_dashboard_vendor_route: API_BASE_URL + "/users/dashboard/1"
};



export const ApiRouteMethods = {
    post: 'POST',
    get: 'GET',
    put: 'PUT',
    delete: 'DELETE'
};
