import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../ui/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
    >
      <div className="mx-auto max-w-3xl px-6">

        <SectionHeading
          subtitle="CONTACT"
          title="Get In Touch"
        />

        <p className="mx-auto mt-6 mb-14 max-w-2xl text-center text-slate-400 leading-8">
          Open to internships, collaborations, innovative projects,
          and meaningful conversations.
        </p>

        <ContactForm />

      </div>
    </section>
  );
}