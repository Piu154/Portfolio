const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 footer-section">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3 ">
        <a href="https://github.com/Piu154" target="_blank" rel="noopener noreferrer">
  <div className="social-icon cursor-pointer">
    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
  </div>
</a>
            <a href="https://www.linkedin.com/in/priya-samanta/" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">
            <img src="/assets/linkedin (1).png" alt="twitter" className="w-1/2 h-1/2" />
          </div>
            </a>
            <a href="https://leetcode.com/u/Priya154/" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">
            <img src="/assets/icons8-level-up-your-coding-skills-and-quickly-land-a-job-24 (1).png" alt="instagram" className="w-1/2 h-1/2" />
          </div>
            </a>
          <a href="https://www.instagram.com/_sketch_book_tour_/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
          </a>
         
        </div>
  
        <p className="text-white-500">© 2025 Priya Samanta. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;