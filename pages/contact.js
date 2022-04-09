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
          className="px-4 py-3 mt-2 mb-4 bg-neutral-900"
          required
          type="text"
          name="name"
        />

        <label htmlFor="email">EXAMPLE</label>
        <input
          placeholder="EXAMPLE@EMAIL.COM"
          className="px-4 py-3 mt-2 mb-4 bg-neutral-900"
          required
          name="email"
          type="email"
        />

        <label htmlFor="name">MESSAGE</label>
        <textarea
          placeholder="MESSAGE"
          className="px-4 py-3 mt-2 mb-4 h-48 bg-neutral-900"
          required
          name="message"
        />

        <button className="bg-neutral-900 px-4 py-3 w-max">SEND</button>
      </form>
    </section>
  );
}
