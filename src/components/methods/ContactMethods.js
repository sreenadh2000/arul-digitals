const makeCall = () => {
  window.location.href = "tel:+919014364411";
};

const openWebSite = () => {
  window.location.href = "https://sreenadh2000.github.io/arul-digitals/";
};
const openWhatsApp = (productName, comeFrom = "") => {
  const phone = "919014364411";
  const standradMessage = encodeURIComponent(
    "Hello, I want to know more about your printing services"
  );

  if (comeFrom === "product") {
    const productMessage = `Hello, I want to know about ${productName} and the pricing.`;
    window.open(`https://wa.me/${phone}?text=${productMessage}`, "_blank");
  } else {
    window.open(`https://wa.me/${phone}?text=${standradMessage}`, "_blank");
  }
};

const openInstagram = () => {
  window.open("https://www.instagram.com/your_username/", "_blank");
};

const openGoogleMaps = () => {
  window.open(
    "https://www.google.com/maps?q=13.21414796338859,79.09668426806766",
    "_blank"
  );
};

const sendEmail = () => {
  const email = "aruldigitalschittoor@gmail.com.com";
  const subject = encodeURIComponent("Inquiry about Printing Services");
  const body = encodeURIComponent(
    "Hello, I would like to know more about your printing solutions."
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

export {
  makeCall,
  openWebSite,
  openWhatsApp,
  openInstagram,
  openGoogleMaps,
  sendEmail,
};
