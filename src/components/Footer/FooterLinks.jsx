export default function FooterLinks({title, links}) {
  return (
    <ul className="flex flex-col gap-3 tracking-wider">
      <li className="font-semibold text-sm">{title}</li>
      {links.map((link, index) => (
        <li key={index} className="text-xs">{link}</li>
      ))}
    </ul>
  );
}
