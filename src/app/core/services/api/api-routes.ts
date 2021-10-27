import { environment as env} from "src/environments/environment";

const API_BASE_URL = env.api_base_path;

export const ApiRoutes = {
    api_login_route: API_BASE_URL + "/auth/login"
};