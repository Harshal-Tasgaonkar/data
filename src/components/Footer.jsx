import React from 'react'

const Footer = () => {
  return (
    
   <>
   {/* Footer */}
   <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl">
      <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-wrap">
  {/* Copyright Section */}
  <div className="text-body text-primary mb-3 mb-md-0">
    © Copyright All Rights Reserved.
  </div>

  {/* Social Media Links */}
  <div className="d-flex justify-content-center mb-3 mb-md-0">
    <a
      href="https://www.facebook.com/share/ra9cKRDkDpy2W94j/?mibextid=qi2Omg"
      className="footer-link mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bx bxl-facebook" />
    </a>
    <a
      href="https://www.instagram.com/autoprofito/?next=%2F"
      className="footer-link mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bx bxl-instagram-alt" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCgfTIIUL16SyHAQzQNmM52A"
      className="footer-link mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bx bxl-youtube" />
    </a>
    <a
      href="https://www.linkedin.com/company/104616702/admin/dashboard/"
      className="footer-link mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bx bxl-linkedin-square" />
    </a>
    <a
      href="https://www.threads.net/@autoprofito"
      className="footer-link mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bx bxl-twitter" />
    </a>
    <a
      href="https://t.me/Autoprofito"
      className="footer-link mx-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bx bxl-telegram" />
    </a>
  </div>

  {/* Powered By Section */}
  <div className="text-center text-md-end">
  <p className="mb-0">
    <span className="d-block mx-auto"> 
      <i className="bx bxs-zap" /> Powered by
    </span>
    <a
      href="https://www.shekruweb.com"
      target="_blank"
      rel="noopener noreferrer"
      className="d-block mt-1"
    >
      Shekru Labs India Pvt. Ltd.
    </a>
  </p>
</div>

</div>




      </div>
    </footer>
    {/* / Footer */}
   </>

  )
}

export default Footer