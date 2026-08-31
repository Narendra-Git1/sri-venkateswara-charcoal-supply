import SectionHeading from "../common/SectionHeading"
import ProductCard from "./ProductCard"
import { products } from "../../data/products"

function ProductsSection() {
  return (
    <section
      id="products"
      className="bg-neutral-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Our Products"
          title="Charcoal Products for Every Requirement"
          description="Explore our charcoal products for household, cooking, commercial, BBQ and grounding requirements."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
          >
            View All Products
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProductsSection