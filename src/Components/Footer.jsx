import { Link } from "react-scroll";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdMail, MdPhone } from "react-icons/md";
import { navItems } from "../constants";
import Logo from "../assets/logo.png"; // Import your logo

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 mt-20 border-t border-gray-300">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Shreedhan Homestay Logo" className="w-32 h-auto mb-4" />
          <h3 className="text-xl font-semibold">About Our Homestay</h3>
          <p className="mt-2 text-gray-600">
            धन्यवाद जी, बड़ो मज़ा आयो! अब त फेर आनो पड़लो! <br />
            Thank you! Had a great time! Now you must visit again!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-green-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2 flex items-center gap-2">
            <MdPhone size={18} className="text-green-600" />
            <a href="tel:+918923196771" className="hover:text-green-600">+91 8923196771</a>
          </p>
          <p className="mt-2 flex items-center gap-2">
            <MdMail size={18} className="text-green-600" />
            <a href="mailto:shreedhanhomestay@gmail.com?subject=Homestay%20Booking%20Inquiry&body=Hello,%20I%20am%20interested%20in%20booking%20your%20homestay." className="hover:text-green-600">shreedhanhomestay@gmail.com</a>
          </p>
          <p className="mt-2">📍 Village Gwar, Khirsu, Pauri, Uttarakhand, India</p>
        </div>
      </div>

      {/* Social Media & Policies */}
      <div className="mt-10 text-center text-gray-600 text-sm">
        <div className="flex justify-center space-x-6 mb-4 text-4xl">
        <a
            href="https://www.instagram.com/khirsu_shreedhan_homestay?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-transform duration-300 hover:scale-125"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://www.facebook.com/share/16AbHHBthi/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-transform duration-300 hover:scale-125"
          >
            <FaFacebook size={40} />
          </a>

        </div>

        <p>© {new Date().getFullYear()} Shreedhan Stays. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center space-x-6">
          <a href="/terms" className="hover:text-green-600">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-green-600">Privacy Policy</a>
          <a href="/refund" className="hover:text-green-600">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
