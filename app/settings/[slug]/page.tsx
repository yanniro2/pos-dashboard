export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      Supermarket: {params.slug}
    </div>
  );
}
