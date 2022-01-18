export default function Contact() {
  return (
    <section>
      <div>
        <h1>CONTACT</h1>
        <p>FILL OUT THIS FORM WITH ANY QUESTIONS OR ABOUT A QUOTE.</p>
      </div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">NAME</label>
        <input name="name" type="text" placeholder="NAME" />
        <label htmlFor="email">EMAIL</label>
        <input name="email" type="email" placeholder="EXAMPLE@EMAIL.COM" />
        <label htmlFor="name">MESSAGE</label>
        <textarea name="message" placeholder="MESSAGE" />
        <button>SEND</button>
      </form>
    </section>
  );
}
