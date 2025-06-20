export enum ApiEndpoints {
    RECIPES = '/recipe',
    RECIPES_BY_CATEGORY = '/recipe/category/',
    CATEGORIES = '/category',
    SIGNUP = '/auth/signup',
    LOGIN = '/auth/login',
    FORGOT_PASSWORD = '/auth/forgot-password',
    VERIFY_OTP = '/auth/verify-otp',
    RESET_PASSWORD = '/auth/reset-password',
    UPLOAD_IMAGE = '/file/upload',
    MEASURE_UNITS = '/measure-units',
    CHECK_AUTH = '/auth/check-auth',
    REFRESH_TOKEN = '/auth/refresh',
    LIKE = '/like',
    BOOKMARK = '/bookmark',
    RECIPE_DRAFT = '/recipe/draft',
    BLOGGERS = '/bloggers',
    BLOGGERS_SUBSCRIPTION = '/users/toggle-subscription',
    USER_RECIPES = '/recipe/user/',
}

export const METHODS = {
    get: 'GET',
    post: 'POST',
    patch: 'PATCH',
    delete: 'DELETE',
};
