import { useRef } from "react";
import emailjs from "@emailjs/browser";

function SubscribePage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zrlb0u8", "template_841jewc", form.current, {
        publicKey: "-OBu36vGR835WGotG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">
          Subscribe For More Info!
        </h2>

        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full h-32 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Send"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </div>
  );
}

export default SubscribePage;
