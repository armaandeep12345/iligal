import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHome, FaPhoneAlt, FaComments, FaBatteryFull, FaHeadphones, FaPlug, FaMobileAlt, FaBluetoothB, FaTv, FaLaptop, FaLaptopCode } from 'react-icons/fa';  // Import icons from React Icons

function App() {
  var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    "https://cdn.dribbble.com/userupload/6158957/file/original-ebf63dbadd81e5d05a1974f46d461047.jpg?resize=1024x768&vertical=center",
    "https://cdn.dribbble.com/userupload/5325860/file/original-1a0dac08c6f1c47a2102a2b5b239d4ff.jpg?resize=1024x768&vertical=center",
    "https://cdn.dribbble.com/userupload/17646816/file/original-059c9ee1f384ae854be49a4db9b2a644.png?resize=1024x768&vertical=center",
    "https://media.licdn.com/dms/image/v2/D5622AQEubHotCkpimg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1680838086459?e=2147483647&v=beta&t=inCzDLxQ4Wu9mizcKk9DIDPQRmossDL6hFRwMO_cvc8",
  ];

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Illegal Announcement</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
              <li className="nav-item">
                <a className="nav-link active" href="#"><FaHome /> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FaPhoneAlt /> Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FaComments /> Live Chat</a>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none">
              <li className="nav-item">
                <a className="nav-link active" href="#"><FaHome /> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FaPhoneAlt /> Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FaComments /> Live Chat</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMobile" role="button" data-bs-toggle="dropdown">
                  <FaBatteryFull /> Electronic Accessories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMobile">
                  <li><a className="dropdown-item" href="#"><FaHeadphones /> Headphones</a></li>
                  <li><a className="dropdown-item" href="#"><FaPlug /> Chargers</a></li>
                  <li><a className="dropdown-item" href="#"><FaMobileAlt /> Cables</a></li>
                  <li><a className="dropdown-item" href="#"><FaBatteryFull /> Power Banks</a></li>
                  <li><a className="dropdown-item" href="#"><FaBluetoothB /> Bluetooth Speakers</a></li>
                  <li><a className="dropdown-item" href="#"><FaBluetoothB /> Wireless Earbuds</a></li>
                  <li><a className="dropdown-item" href="#"><FaTv /> Smartwatches</a></li>
                  <li><a className="dropdown-item" href="#"><FaLaptop /> External SSDs</a></li>
                  <li><a className="dropdown-item" href="#"><FaLaptopCode /> Phone Holders</a></li>
                  <li><a className="dropdown-item" href="#"><FaTv /> Screen Protectors</a></li>
                  <li><a className="dropdown-item" href="#"><FaTv /> Laptop Stands</a></li>
                  <li><a className="dropdown-item" href="#"><FaLaptop /> Gaming Accessories</a></li>
                  <li><a className="dropdown-item" href="#"><FaTv /> Camera Accessories</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      

      {/* Image Slider Section */}
<Slider 
  {...sliderSettings}
  autoplay={true} 
  autoplaySpeed={3000}  // Adjust the autoplay speed (in milliseconds)
>
  {images.map((src, index) => (
    <div key={index}>
      <img src={src} alt={`Image ${index + 1}`} className="d-block w-100" style={{ height: `calc(117vh - 252px)` }} />
    </div>
  ))}
</Slider> <br></br><br></br>
<section className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">Empowering announcements with ease and discretion.</p>
        <div className="about-content">
          <p>
            Welcome to [ Illegal Announcement ], your trusted platform for quick and reliable announcements. Our mission is to provide seamless communication solutions, ensuring your messages reach their intended audience efficiently and discreetly.
          </p>
          <p>
            At [Website Name], we believe in innovation and discretion. With cutting-edge tools and user-friendly interfaces, we aim to offer unparalleled service to individuals and organizations looking for secure and swift communication solutions.
          </p>
        </div>
        <div className="about-features">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Reliable & Secure Communication</li>
            <li>Easy-to-Use Interface</li>
            <li>Fast & Discreet Services</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        <div className="about-cta">
          <a href="/get-started" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </section> <br></br>
<div>
      {/* Other sections like Navbar and Slider */}

      {/* Job Apply Section */}
      <section className="job-apply-section">
        <h2>Apply for a Job</h2>
        <form className="job-apply-form">
          <div className="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" className="form-control" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email address" required />
          </div>
          <div className="form-group">
            <label for="resume">Upload Resume</label>
            <input type="file" id="resume" className="form-control" required />
          </div>
          <div className="form-group">
            <label for="message">Cover Letter</label>
            <textarea id="message" className="form-control" rows="4" placeholder="Write your cover letter here..." required></textarea>
          </div>
          <button type="submit">Submit Application</button>
        </form>
      </section>

      {/* Other components */}
    </div> <br></br>
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">Legal Notice</h2>
        <p className="footer-text">
          Please read carefully. For more information or compliance, contact us at:
        </p>
        <div className="footer-contact">
          <p>support@Announcement.com</p>
        </div>
      </div>
    </footer>

    </>
  );
}

export default App;
