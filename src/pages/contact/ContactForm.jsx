import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm(params) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const getFieldClass = (fieldName) => {
    if (errors[fieldName]) return "form-control is-invalid";
    if (formData[fieldName] && !errors[fieldName])
      return "form-control is-valid";
    return "form-control";
  };
  return (
    <>
      <section className="form-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-11">
              <div className="form-card p-md-5 p-4">
                <div className="form-header mb-5">
                  <h1 className="text-center">Get In Touch</h1>
                </div>
                <div className="contact-form">
                  <div className="contact-form">
                    {isSubmitted && (
                      <div className="success-message">
                        <strong>Thank you!</strong> Your message has been sent
                        successfully. We'll get back to you soon.
                      </div>
                    )}
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="firstName" className="form-label">
                              First Name *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className={getFieldClass("firstName")}
                              placeholder="Enter your first name"
                            />
                            {errors.firstName && (
                              <div className="invalid-feedback">
                                {errors.firstName}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="lastName" className="form-label">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className={getFieldClass("lastName")}
                              placeholder="Enter your last name"
                            />
                            {errors.lastName && (
                              <div className="invalid-feedback">
                                {errors.lastName}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email" className="form-label">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={getFieldClass("email")}
                              placeholder="Enter your email address"
                            />
                            {errors.email && (
                              <div className="invalid-feedback">
                                {errors.email}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={getFieldClass("phone")}
                              placeholder="Enter your phone number"
                            />
                            {errors.phone && (
                              <div className="invalid-feedback">
                                {errors.phone}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message" className="form-label">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className={getFieldClass("message")}
                          placeholder="Enter your message here..."
                          rows={5}
                        />
                        {errors.message && (
                          <div className="invalid-feedback">
                            {errors.message}
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting && <div className="loading-spinner" />}
                        <Send className="me-2" size={18} />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
