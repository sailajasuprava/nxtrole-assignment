import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-6 text-center space-y-4">
      <div className="flex justify-center space-x-6">
        <span>
          <FaFacebook
            size={24}
            className="hover:opacity-70 hover:scale-125 duration-150"
          />
        </span>

        <span>
          <FaTwitter
            size={24}
            className="hover:opacity-70 hover:scale-125 duration-150"
          />
        </span>
        <span>
          <FaInstagram
            size={24}
            className="hover:opacity-70 hover:scale-125 duration-150"
          />
        </span>
        <span>
          <FaLinkedin
            size={24}
            className="hover:opacity-70 hover:scale-125 duration-150"
          />
        </span>
      </div>
      <p>© 2025 NxtRole.AI</p>
    </footer>
  );
}

export default Footer;
