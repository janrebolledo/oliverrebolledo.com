export default function Contact() {
  return (
    <section>
      <div>
        <h1>CONTACT</h1>
        <p>
          WANT TO GET IN TOUCH?
          <br />
          <br />
          USE THIS FORM TO SEND YOUR QUESTIONS OR COMMENTS.
          <br />
          INQUIRIES WILL BE ANSWERED AS SOON AS POSSIBLE.
        </p>
      </div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">NAME</label>
        <input name="name" type="text" />
        <label htmlFor="email">EMAIL</label>
        <input name="email" type="email" />
        <label htmlFor="name">MESSAGE</label>
        <textarea name="message" />
        <button>SEND</button>
      </form>
    </section>
  );
}
