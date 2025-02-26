const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/Amishachoudhary22" target="_blank" rel="noopener noreferrer">
            <div className="social-icon rounded-full overflow-hidden">
              <img src="/assets/github.svg" alt="github" className="w-full h-full object-cover" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/amisha-choudhary-8957a7221/" target="_blank" rel="noopener noreferrer">
            <div className="social-icon rounded-full overflow-hidden">
              <img src="/assets/linkedin.png" alt="linkedin" className="w-full h-full object-cover" />
            </div>
          </a>
          <a href="https://leetcode.com/u/amisha__1222/" target="_blank" rel="noopener noreferrer">
            <div className="social-icon rounded-full overflow-hidden">
              <img src="/assets/leetcode.png" alt="leetcode" className="w-full h-full object-cover" />
            </div>
          </a>
        </div>
  
        <p className="text-white-500">© 2025 Amisha Choudhary. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;