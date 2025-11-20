export default function ServiceCard({ title, image }) {
  return (
    <div className="bg-creme border border-black rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4 font-serif text-center text-preto">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
}
