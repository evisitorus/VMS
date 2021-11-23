const API_BASE_URL = env.api_base_path.concat('/api');
import { environment as env} from "src/environments/environment";

export const ApiRoutes = {
  api_login_route: API_BASE_URL + "/auth/login",
  api_register_route: API_BASE_URL + "/users/register",
  api_activate_route: API_BASE_URL + "/users/activate",
  api_token_route: API_BASE_URL + "/users/token",
  api_forgot_password_route: API_BASE_URL + "/auth/forgot-password",
  api_reset_password_route: API_BASE_URL + "/auth/reset-password",
  api_add_pengalaman_kerja: API_BASE_URL + "/vendors/pengalaman_kerja",
  api_get_pengalaman_kerja: API_BASE_URL + "/pengalaman_kerjas",
  api_get_pemegang_saham_route: API_BASE_URL + "/pemegang_saham_relationships", //TODO: change api route
  api_dashboard_vendor_route: API_BASE_URL + "/users/dashboard/1",
  api_add_pemegang_saham:  API_BASE_URL + "/vendors/pemegang_saham",
  api_profile_pic: API_BASE_URL + "/users/profile/pic/26",
  api_assets_route: API_BASE_URL + "/mesin_peralatans",
  api_tenders_route: API_BASE_URL + "/tenders",
  api_vendor_information_route: API_BASE_URL + "/vendors/1/information",
  api_penyedia_usaha_route : API_BASE_URL + "/jenis_penyedia_usahas?page=1",
  api_jenis_badan_usaha_route: API_BASE_URL + "",
  api_jenis_vendor_route: API_BASE_URL + "jenis_vendors?page=1"
};

export const ApiRouteMethods = {
  post: 'POST',
  get: 'GET',
  put: 'PUT',
  delete: 'DELETE'
};
