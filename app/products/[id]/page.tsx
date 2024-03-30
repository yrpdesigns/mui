const getProduct = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
};

export default async function Page({ params }: any) {
  const product = await getProduct(params.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.image,
    description: product.description,
    aggregateRating: {
      ratingValue: product.rating.rate,
      reviewCount: product.rating.count,
    },
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2>{product.title}</h2>
    </section>
  );
}
