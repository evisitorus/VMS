const PADI_BASE_URL = "https://padi-dev.tees.co.id/external-app";

const API_BASE_URL = env.api_base_path.concat('/api');
const API_ENV = env.api_base_path;
import { environment as env} from "src/environments/environment";

export const ApiRoutes = {
  api_env : API_ENV,
  api_login_route: API_BASE_URL + "/auth/login",
  api_register_route: API_BASE_URL + "/users/register",
  api_activate_route: API_BASE_URL + "/users/activate",
  api_forgot_password_route: API_BASE_URL + "/auth/forgot-password",
  api_reset_password_route: API_BASE_URL + "/auth/reset-password",
  api_add_pengalaman_kerja: API_BASE_URL + "/vendors/pengalaman_kerja",
  api_post_pengalaman_kerja: API_BASE_URL + "/pengalaman_kerjas",
  api_delete_pekerjaan: API_BASE_URL + "/pengalaman_kerjas",
  api_vendor_information_route: API_BASE_URL + "/vendors/",
  api_get_pengalaman_kerja: API_BASE_URL + "/pengalaman_kerjas",
  api_dashboard_vendor_route: API_BASE_URL + "/users/dashboard/1",
  api_profile_pic: API_BASE_URL + "/users/profile/pic",
  api_assets_route: API_BASE_URL + "/mesin_peralatans",
  api_penyedia_usaha_route: API_BASE_URL + "/jenis_penyedia_usahas?page=1",
  api_tenders_route: API_BASE_URL + "/tenders",
  api_list_tender: API_BASE_URL + "/tenders/page/",
  api_list_bumn_tender: API_BASE_URL + "/tenders/company/list",
  api_token_route: API_BASE_URL + "/users/token",
  api_documents_route: API_BASE_URL + "/dokumens",
  api_media_object_route: API_BASE_URL + "/media_objects",
  api_get_pemegang_saham_route: API_BASE_URL + "/pemegang_saham_relationships", //TODO: change api route
  api_add_pemegang_saham: API_BASE_URL + "/vendors",
  api_get_organizations: API_BASE_URL + "/organizations?page=1",
  api_jenis_badan_usaha_route: API_BASE_URL + "",
  api_get_tipe_karyawan: API_BASE_URL + "/sdm_types?page=1",
  api_bidang_karyawan: API_BASE_URL + "/sdm_bidangs?page=1",
  api_pegawai_route: API_BASE_URL + "/sdm_relationships",
  api_update_pegawai_route: API_BASE_URL + "/sdm_relationships/updatePegawai",
  api_get_pegawai_route: API_BASE_URL + "/sdm_relationships/getPegawai/",
  api_add_pegawai_route: API_BASE_URL + "/sdm_relationships/addPegawai",
  api_spt_route: API_BASE_URL + "/spt_pajaks",
  api_jenis_vendor_route: API_BASE_URL + "/jenis_vendors",
  api_get_vendor: API_BASE_URL + "/vendors",
  api_get_users: API_BASE_URL + "/users",
  api_base_url: API_BASE_URL,
  api_jenis_kegiatan_usaha_route: API_BASE_URL + "/jenis_kegiatan_usahas?page=1",
  api_tipe_vendor_route: API_BASE_URL + "/tipe_vendors",
  api_get_organizations_route: API_BASE_URL + "/organizations",
  api_get_provinces_route: API_BASE_URL + "/geo_locations?geoLocationType.description=Provinsi",
  api_get_kotakab: API_BASE_URL + "/geo_location_relationships?geoLocationRule.description=Provinsi%20-%20Kota%2FKabupaten&fromGeoLocation=",
  api_get_kecamatan: API_BASE_URL + "/geo_location_relationships?geoLocationRule.description=Kota%2FKabupaten%20-%20Kecamatan&fromGeoLocation=",
  api_get_kelurahan: API_BASE_URL + "/geo_location_relationships?geoLocationRule.description=Kecamatan%20-%20Kelurahan&fromGeoLocation=",
  api_get_kodepos: API_BASE_URL + "/villages?id=",
  api_vendor_route: API_BASE_URL + "/vendors",
  api_list_bank_route: API_BASE_URL + "/banks",
  api_update_profile: API_BASE_URL + "/vendors/profile",
  api_neraca_route: API_BASE_URL + "/neracas",
  api_address_route: API_BASE_URL + "/addresses",
  api_add_companyAddress:  API_BASE_URL + "/vendors/company_address",
  api_get_contact_mechanism: API_BASE_URL + "/party_contact_mechanisms",
  //api_get_companyAddress:  API_BASE_URL + "/vendors/alamat_perusahaan",
  api_base_pemegang_saham: API_BASE_URL + "/pemegang_saham_relationships",
  api_delete_pemegang_saham: API_BASE_URL + "/pemegang_saham_relationships",
  api_get_party_role_route: API_BASE_URL + "/party_roles",
  api_get_kbli: API_BASE_URL + "/bidang_usahas",
  api_pimpinan_dan_pengurus_route: API_BASE_URL + "/sdm_relationships/pimpinan",
  api_doc_type: API_BASE_URL + "/document_types",
  api_doc_legal: API_BASE_URL + "/dokumens"
};

export const ApiRouteMethods = {
  post: 'POST',
  get: 'GET',
  put: 'PUT',
  delete: 'DELETE'
};
