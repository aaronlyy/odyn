export const response = (success, message, data = {}) => {
    return {
        success,
        message,
        data
    }
}