
exports.generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
exports.otpExpiryTime = () => Date.now() + 10 * 60 * 1000; // 10 minutes
