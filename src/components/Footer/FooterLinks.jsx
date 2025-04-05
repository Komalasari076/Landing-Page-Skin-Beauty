export default function FooterLinks({title, links}) {
  return (
    <ul className="flex flex-col gap-3 tracking-wide">
      <li className="text-lg font-semibold">{title}</li>
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
}
