import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-950">
          {product.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {product.shortDescription}
        </p>

        <div className="mt-5">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center text-sm font-semibold text-neutral-900 transition hover:text-neutral-600"
          >
            View Product
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard