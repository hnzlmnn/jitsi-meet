// @flow

/**
 * Checks if call integration is enabled or not.
 *
 * @param {Function|Object} stateful - The redux store or {@code getState}
 * function.
 * @returns {string} - Default URL for the app.
 */
export function isCallIntegrationEnabled() {
    // The feature flag has precedence.
    // return flag ?? !disableCallIntegration;
    return false;
}
