export default function NewsPost({ title, text }) {
  return (
    <div className="card">
      <h2 className="card-header">{title}</h2>
      <p className="card-body">{text}</p>
    </div>
  );
}
