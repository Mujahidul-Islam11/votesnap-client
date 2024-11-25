const Footer = () => {
  return (
    <div className="border-t">
      <footer className="footer text-black p-10 w-full max-w-7xl mx-auto md:px-12">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
     <div>
      <h3 className="px-10 text-[16px] text-gray-600 text-center">Copyright © 2024 - All right reserved by <b>VoteSnap</b></h3>
     </div>
    </div>
  );
};

export default Footer;
