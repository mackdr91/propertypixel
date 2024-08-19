import Link from "next/link";
const Contact = () => {
  return (
    <section className="p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Get in touch with us</h2>
      <p className="mb-4">
        Let's discuss how we can help you. Schedule a consultation today! Hurry,
        limited slots available.
      </p>
      <Link
        href="#"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default Contact;
