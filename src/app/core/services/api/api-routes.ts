<<<<<<< HEAD
const API_BASE_URL = "https://localhost:8000";
import { environment as env} from "src/environments/environment";
=======
const API_BASE_URL = "https://localhost";
import {environment as env} from "src/environments/environment";
>>>>>>> 8fc650513ad4db80c5095e7df6783a7a127530cd

export const ApiRoutes = {
  api_login_route: API_BASE_URL + "/auth/login",
  api_register_route: API_BASE_URL + "/users/register",
  api_activate_route: API_BASE_URL + "/users/activate",
  api_forgot_password_route: API_BASE_URL + "/auth/forgot-password",
  api_reset_password_route: API_BASE_URL + "/auth/reset-password",
  api_dashboard_vendor_route: API_BASE_URL + "/users/dashboard/1",
  api_profile_pic: API_BASE_URL + "/users/profile/pic/26",
  api_add_pengalaman_kerja: API_BASE_URL + "/badan_usahas/pengalaman_kerja",
  api_get_pengalaman_kerja: API_BASE_URL + "/pengalaman_kerjas",
};

export const ApiRouteMethods = {
  post: 'POST',
  get: 'GET',
  put: 'PUT',
  delete: 'DELETE'
};
