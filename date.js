exports.getDate = () => {
    const today = new Date();
    const date = today.toLocaleDateString("en-US",{
        year:"numeric",
        month:"long",
        day:"numeric"
    });
    return date.toString();
};
exports.getTime = () => {
    const today = new Date();
    const time = today.toLocaleTimeString('en-US', {
        hour:"numeric",
        minute:"numeric"
    });
    return time.toString();
};