import { Link, useParams } from "react-router-dom"
import { products } from "../../data/products"
import ContactActions from "../../components/contact/ContactActions"

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
            />
        </svg>
    )
}

function CheckIcon() {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4 10 3.5 3.5L16 5"
            />
        </svg>
    )
}

function ProductDetails() {
    const { productId } = useParams()

    const product = products.find(
        (item) => item.id === productId,
    )

    // =========================================================
    // PRODUCT NOT FOUND
    // =========================================================

    if (!product) {
        return (
            <main className="min-h-screen bg-neutral-50 px-4 py-24 sm:px-6 lg:px-8">

                <div
                    className="
                        mx-auto
                        max-w-2xl
                        text-center
                        animate-[productFadeUp_0.4s_ease-out_both]
                    "
                >

                    <div
                        className="
                            mx-auto
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-neutral-950
                            text-2xl
                            font-black
                            text-amber-400
                        "
                    >
                        !
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                        Product
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                        Product Not Found
                    </h1>

                    <p className="mx-auto mt-4 max-w-lg leading-7 text-neutral-600">
                        The product you are looking for does not exist or
                        may no longer be available.
                    </p>

                    <Link
                        to="/products"
                        className="
                            group
                            mt-8
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-neutral-950
                            px-6
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-amber-500
                            hover:text-neutral-950
                            hover:shadow-lg
                            hover:shadow-amber-500/20
                        "
                    >
                        <span>Back to Products</span>

                        <span
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-x-1
                            "
                        >
                            ←
                        </span>
                    </Link>

                </div>

                <style>{`
                    @keyframes productFadeUp {
                        from {
                            opacity: 0;
                            transform: translateY(14px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        *,
                        *::before,
                        *::after {
                            animation-duration: 0.01ms !important;
                            animation-iteration-count: 1 !important;
                            transition-duration: 0.01ms !important;
                        }
                    }
                `}</style>

            </main>
        )
    }

    const isAvailable = product.status === "available"

    return (
        <main className="bg-neutral-50">

            {/* =====================================================
                ANIMATION STYLES
            ====================================================== */}

            <style>{`
                @keyframes productFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(16px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes productFadeIn {
                    from {
                        opacity: 0;
                    }

                    to {
                        opacity: 1;
                    }
                }

                @keyframes productScale {
                    from {
                        opacity: 0;
                        transform: scale(0.97);
                    }

                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .product-fade-up {
                    animation: productFadeUp 0.45s ease-out both;
                }

                .product-fade-in {
                    animation: productFadeIn 0.5s ease-out both;
                }

                .product-scale {
                    animation: productScale 0.5s ease-out both;
                }

                @media (prefers-reduced-motion: reduce) {
                    .product-fade-up,
                    .product-fade-in,
                    .product-scale {
                        animation: none;
                    }
                }
            `}</style>


            {/* =====================================================
                TOP PRODUCT HEADER
            ====================================================== */}

            <section className="relative overflow-hidden bg-white">

                {/* Background Accents */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        top-10
                        h-96
                        w-96
                        rounded-full
                        bg-amber-500/5
                        blur-3xl
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-40
                        bottom-0
                        h-80
                        w-80
                        rounded-full
                        bg-neutral-950/5
                        blur-3xl
                    "
                />


                <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24">

                    {/* =================================================
                        BREADCRUMB
                    ================================================== */}

                    <div
                        className="
                            product-fade-up
                        "
                    >

                        <Link
                            to="/products"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-semibold
                                text-neutral-500
                                transition-colors
                                duration-200
                                hover:text-neutral-950
                            "
                        >

                            <span
                                className="
                                    transition-transform
                                    duration-200
                                    group-hover:-translate-x-1
                                "
                            >
                                ←
                            </span>

                            Back to Products

                        </Link>

                    </div>


                    {/* =================================================
                        PRODUCT CONTENT
                    ================================================== */}

                    <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">


                        {/* =================================================
                            PRODUCT IMAGE
                        ================================================== */}

                        <div
                            className="
                                product-scale
                            "
                            style={{ animationDelay: "0.05s" }}
                        >

                            <div
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-neutral-200
                                    bg-neutral-100
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:border-amber-400/50
                                    hover:shadow-xl
                                "
                            >

                                {/* Image */}

                                <div className="aspect-[4/3] overflow-hidden sm:aspect-[5/4]">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            ease-out
                                            group-hover:scale-105
                                        "
                                    />

                                </div>


                                {/* Image Overlay */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-neutral-950/20
                                        via-transparent
                                        to-transparent
                                        opacity-0
                                        transition-opacity
                                        duration-300
                                        group-hover:opacity-100
                                    "
                                />


                                {/* Product Label */}

                                <div
                                    className="
                                        absolute
                                        left-5
                                        top-5
                                        rounded-full
                                        border
                                        border-white/60
                                        bg-white/90
                                        px-4
                                        py-2
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.16em]
                                        text-neutral-800
                                        shadow-sm
                                        backdrop-blur-sm
                                    "
                                >
                                    Charcoal Product
                                </div>

                            </div>


                            {/* Image Caption */}

                            <div className="mt-4 flex items-center justify-between gap-4">

                                <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                                    Sri Venkateswara Charcoal Supply
                                </p>

                                <span className="h-px flex-1 bg-neutral-200" />

                            </div>

                        </div>


                        {/* =================================================
                            PRODUCT INFORMATION
                        ================================================== */}

                        <div
                            className="
                                product-fade-up
                            "
                            style={{ animationDelay: "0.12s" }}
                        >

                            {/* Category */}

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-amber-500" />

                                <p
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-amber-600
                                    "
                                >
                                    Charcoal Product
                                </p>

                            </div>


                            {/* Product Name */}

                            <h1
                                className="
                                    mt-5
                                    text-4xl
                                    font-black
                                    leading-tight
                                    tracking-tight
                                    text-neutral-950
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >
                                {product.name}
                            </h1>


                            {/* Short Description */}

                            <p
                                className="
                                    mt-6
                                    max-w-2xl
                                    text-base
                                    leading-8
                                    text-neutral-600
                                    sm:text-lg
                                "
                            >
                                {product.shortDescription}
                            </p>


                            {/* Availability */}

                            <div
                                className="
                                    mt-7
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-neutral-200
                                    bg-neutral-50
                                    px-4
                                    py-2.5
                                "
                            >

                                <span
                                    className={`
                                        h-2.5
                                        w-2.5
                                        rounded-full
                                        ${
                                            isAvailable
                                                ? "bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.10)]"
                                                : "bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.10)]"
                                        }
                                    `}
                                />

                                <span className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                                    {isAvailable
                                        ? "Currently Available"
                                        : "Currently Unavailable"}
                                </span>

                            </div>


                            {/* =================================================
                                PRODUCT BENEFITS
                            ================================================== */}

                            <div
                                className="
                                    mt-8
                                    grid
                                    gap-3
                                    sm:grid-cols-2
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        border
                                        border-neutral-200
                                        bg-neutral-50
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:border-amber-300
                                        hover:bg-amber-50
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-neutral-950
                                            text-amber-400
                                        "
                                    >
                                        <CheckIcon />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-neutral-950">
                                            Quality Supply
                                        </p>

                                        <p className="mt-0.5 text-xs text-neutral-500">
                                            Selected product
                                        </p>
                                    </div>

                                </div>


                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        border
                                        border-neutral-200
                                        bg-neutral-50
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:border-amber-300
                                        hover:bg-amber-50
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-neutral-950
                                            text-amber-400
                                        "
                                    >
                                        <CheckIcon />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-neutral-950">
                                            Flexible Supply
                                        </p>

                                        <p className="mt-0.5 text-xs text-neutral-500">
                                            Retail & wholesale
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* Divider */}

                            <div className="my-8 h-px bg-neutral-200" />


                            {/* =================================================
                                CONTACT ACTIONS
                            ================================================== */}

                            <div
                                className="
                                    product-fade-up
                                "
                                style={{ animationDelay: "0.22s" }}
                            >
                                <ContactActions />
                            </div>


                            {/* =================================================
                                MAIN CTA
                            ================================================== */}

                            <Link
                                to="/contact"
                                className="
                                    group/enquire
                                    mt-4
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-xl
                                    bg-neutral-950
                                    px-7
                                    py-4
                                    text-sm
                                    font-bold
                                    text-white
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-amber-500
                                    hover:text-neutral-950
                                    hover:shadow-xl
                                    hover:shadow-amber-500/20
                                "
                            >

                                <span>
                                    Enquire About This Product
                                </span>

                                <span
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover/enquire:translate-x-1
                                    "
                                >
                                    <ArrowIcon />
                                </span>

                            </Link>


                            {/* Trust Text */}

                            <p
                                className="
                                    mt-4
                                    text-center
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.16em]
                                    text-neutral-400
                                "
                            >
                                Quality Charcoal • Reliable Supply
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                PRODUCT REQUIREMENT SECTION
            ========================================================== */}

            <section className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div
                        className="
                            mx-auto
                            max-w-3xl
                            text-center
                            product-fade-up
                        "
                        style={{ animationDelay: "0.25s" }}
                    >

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-amber-600
                            "
                        >
                            Need More Information?
                        </p>

                        <h2
                            className="
                                mt-3
                                text-2xl
                                font-bold
                                tracking-tight
                                text-neutral-950
                                sm:text-3xl
                            "
                        >
                            Let's Discuss Your Requirement
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-2xl
                                text-sm
                                leading-7
                                text-neutral-600
                                sm:text-base
                            "
                        >
                            Contact us to discuss the product, quantity,
                            retail or wholesale supply requirements.
                        </p>


                        <div className="mt-7 flex justify-center">

                            <Link
                                to="/contact"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-neutral-300
                                    bg-white
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-bold
                                    text-neutral-950
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-amber-400
                                    hover:bg-amber-50
                                    hover:shadow-md
                                "
                            >

                                Contact Us

                                <span
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                >
                                    <ArrowIcon />
                                </span>

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    )
}

export default ProductDetails