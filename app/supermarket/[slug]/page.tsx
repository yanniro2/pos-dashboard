export default function Page({ params }: { params: { slug: string } }) {
  return <div>Supermarket: {params.slug}</div>;
}
