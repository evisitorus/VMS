const PADI_BASE_URL = "https://padi-dev.tees.co.id/external-app";

const API_BASE_URL = env.api_base_path.concat('/api');
import { environment as env } from "src/environments/environment";

export const ApiRoutes = {
  api_login_route: API_BASE_URL + "/auth/login",
  api_register_route: API_BASE_URL + "/users/register",
  api_activate_route: API_BASE_URL + "/users/activate",
  api_forgot_password_route: API_BASE_URL + "/auth/forgot-password",
  api_reset_password_route: API_BASE_URL + "/auth/reset-password",
  api_add_pengalaman_kerja: API_BASE_URL + "/badan_usahas/pengalaman_kerja",
  api_get_pengalaman_kerja: API_BASE_URL + "/pengalaman_kerjas",
  api_dashboard_vendor_route: API_BASE_URL + "/users/dashboard/1",
  api_profile_pic: API_BASE_URL + "/users/profile/pic/26",
  api_assets_route: API_BASE_URL + "/mesin_peralatans",
  api_tenders_route: API_BASE_URL + "/tenders",
  api_list_tender: API_BASE_URL + "/tenders/page/",
  api_token_route: API_BASE_URL + "/users/token",
  api_get_pemegang_saham_route: API_BASE_URL + "/pemegang_saham_relationships", //TODO: change api route
  api_add_pemegang_saham:  API_BASE_URL + "/vendors/pemegang_saham",
  api_vendor_information_route: API_BASE_URL + "/vendors/",
  api_penyedia_usaha_route : API_BASE_URL + "/jenis_penyedia_usahas?page=1",
  api_jenis_badan_usaha_route: API_BASE_URL + "",
  api_jenis_vendor_route: API_BASE_URL + "jenis_vendors?page=1",
  api_get_vendor: API_BASE_URL + "/vendors",
  api_get_users: API_BASE_URL + "/users",
  api_base_url: API_BASE_URL,
  api_jenis_kegiatan_usaha_route: API_BASE_URL + "/jenis_kegiatan_usahas?page=1",
  api_tipe_vendor_route: API_BASE_URL + "/tipe_vendors",
  api_get_organizations_route: API_BASE_URL + "/organizations",
  api_get_provinces_route: API_BASE_URL + "/geo_locations?geoLocationType=5",
  api_get_kotakab: API_BASE_URL + "/geo_locations?geoLocationType=6",
  api_get_kecamatan: API_BASE_URL + "/geo_locations?geoLocationType=7",
  api_get_kelurahan: API_BASE_URL + "/geo_locations?geoLocationType=8",
  api_get_kodepos: API_BASE_URL + "/geo_locations?geoLocationType=8",
  api_documents_route: API_BASE_URL + "/dokumens",
  api_media_object_route: API_BASE_URL + "/media_objects",
  api_update_profile: API_BASE_URL + "/vendors/profile"
};

export const ApiRouteMethods = {
  post: 'POST',
  get: 'GET',
  put: 'PUT',
  delete: 'DELETE'
};
