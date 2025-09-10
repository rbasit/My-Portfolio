export const metadata = {
  title: "Contact — Rida Basit",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">Contact</h1>
      <p className="text-gray-700">
        The fastest way to reach me is via email.
      </p>
      <div className="card space-y-2">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:ridabasit82@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            ridabasit82@gmail.com
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/rida-basit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            linkedin.com/in/rida-basit
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/rbasit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            github.com/rbasit
          </a>
        </p>
      </div>
    </div>
  );
}
