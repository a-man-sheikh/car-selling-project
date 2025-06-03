// --- Define helper functions BEFORE register function ---
function generateEmailTemplate(verificationCode, name) {
  return `<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 30px;">
      <h2 style="color: #333;">Email Verification Code</h2>
      <p>Hi ${name},</p>
      <p>Thank you for signing up. To complete your verification, please use the following code:</p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="font-size: 24px; font-weight: bold; color: #4CAF50;">${verificationCode}</span>
      </div>
      <p>This code is valid for the next 5 minutes.</p>
      <p>If you did not request this, please ignore this email.</p>
      <br>
      <p>Best regards,<br>The Team</p>
    </div>
  </body>
</html>`;
}

module.exports = generateEmailTemplate