import store from "store";
import axios from "axios";


// authorization token management
// TODO: upon unauthorized status, we need to automatically let user logout?
export const setToken = (token) => {
  if (token) {
    store.set("auth-token", token);
  } else {
    store.remove("auth-token");
  }
}

export const getToken = () => {
  return store.get("auth-token");
}


// web request client
const instance = axios.create({
  baseURL: "http://localhost:3000/"
});

const tokenAddingInterceptor = (config) => {
  config.headers = config.headers || {};
  var token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    // NOTE: config headers are kept between requests, so we need to explicitly reset it.
    config.headers.Authorization = "";
  }
  return config;
};

instance.interceptors.request.use(tokenAddingInterceptor);

export function getRandomUser() {
  return instance.get("random-user");
};

export function loginUser({username, password}) {
  return instance.post("login", {
    username, password
  });
};

// TODO: where to put async initialization action (e.g. auto login)?
// initialization on routing ?
// there's no simple answer since this is ux problems too.
// basically, what i want to know is the reasonable place to call initialization action?
//
//  first login request action ----------> render anonymous page (anynomous page state)
//  receiving response action  --success-> render user centric page (user centric page state)
//                             --error---> keep anonymous page
export function validateAndRefreshToken() {
  return instance.get("refresh_token");
};
