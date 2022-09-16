
// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters,
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
const msalConfig = {
  auth: {
    clientId: "0759d682-1003-4fb3-8ba4-92d2b16b5a4b",
    authority: "https://login.microsoftonline.com/fc8c180b-2d53-432d-b283-f2b82ec34647",
    redirectUri: "http://localhost:3002",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add here the scopes to request when obtaining an access token for MS Graph API
// for more, visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/docs/scopes.md
const loginRequest = {
  // scope trong mục Expose an API
  scopes: ["api://0759d682-1003-4fb3-8ba4-92d2b16b5a4b/resource.operation.constraint"]
};

// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
  scopes: ["Mail.Read"]
};