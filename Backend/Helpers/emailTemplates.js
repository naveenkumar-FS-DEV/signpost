export const enquiryTemplate = (name, email, phone, message) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);">
      
      <!-- Company Name -->
      <div style="background: #007bff; padding: 15px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">SIGNPOST Celfon5G+</h1>
      </div>

      <!-- Email Content -->
      <div style="padding: 20px;">
        <h2 style="color: #333; text-align: center; margin-bottom: 20px; border-bottom: 2px solid #007bff; display: inline-block;">New Enquiry Received</h2>
        
        <p><strong style="color: #333;">Name:</strong> <span style="color: #555;">${name}</span></p>
        <p><strong style="color: #333;">Email:</strong> <span style="color: #555;">${email}</span></p>
        <p><strong style="color: #333;">Phone:</strong> <span style="color: #555;">${phone}</span></p>
        
        <p><strong style="color: #333;">Message:</strong></p>
        <p style="color: #555; background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; font-style: italic;">
          ${message}
        </p>
      </div>

      <!-- Footer -->
      <div style="background: #007bff; padding: 10px; text-align: center; border-radius: 0 0 10px 10px;">
        <p style="color: #ffffff; margin: 0; font-size: 14px;">&copy; 2025 SIGNPOST Celfon5G+. All Rights Reserved.</p>
      </div>

    </div>
  </div>
`;
