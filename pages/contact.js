import Head from "next/head";

export default function Contact() {
  return (
    <section className="md:flex md:flex-col md:justify-center p-12 md:px-24">
      <Head>
        <title>Desvo Filmz — Contact</title>
      </Head>
      <h1 className="text-xl font-bold heading">CONTACT</h1>
      <p>
        FOR ALL PRICING AND BOOKING INQUIRIES, PLEASE FILL OUT THE FORM BELOW.
        PLEASE INCLUDE AS MUCH RELEVANT INFORMATION AS POSSIBLE, FOR EXAMPLE,
        THE LOCATION OF THE PROJECT, AMOUNT OF IMAGES NEEDED, INTENDED USAGE OF
        THE IMAGES, AND TIMEFRAME FOR PROJECT COMPLETION. I LOOK FORWARD TO
        HEARING FROM YOU.
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="mt-8 flex flex-col w-full"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">NAME</label>
        <input
          placeholder="NAME"
          className="text-white rounded-3xl py-4 px-6 mt-2 mb-3 mr-2 w-full transition-all border-solid border-2 bg-transparent border-white"
          required
          type="text"
          name="name"
        />

        <label htmlFor="email">EXAMPLE</label>
        <input
          placeholder="EXAMPLE@EMAIL.COM"
          className="text-white rounded-3xl py-4 px-6 mt-2 mb-3 mr-2 w-full transition-all border-solid border-2 bg-transparent border-white"
          required
          name="email"
          type="email"
        />

        <label htmlFor="name">MESSAGE</label>
        <textarea
          placeholder="MESSAGE"
          className="text-white rounded-3xl py-4 px-6 mt-2 mr-2 h-48 w-full transition-all border-solid border-2 bg-transparent border-white"
          required
          name="message"
        />

        <button className="text-white rounded-full py-4 px-6 mt-2 mr-2 hover:bg-[#ffffff40] transition-all border-solid border-2 w-max border-white cursor-pointer">
          SEND
        </button>
      </form>
    </section>
  );
}
