import SectionHeading from "../../components/common/SectionHeading"
import ContactActions from "../../components/contact/ContactActions"
import { business } from "../../data/business"

function Contact() {
    return (
        <main className="bg-neutral-50">

            {/* =========================================================
                CONTACT HERO
            ========================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-neutral-950
                    py-16
                    text-white
                    sm:py-20
                    lg:py-24
                "
            >

                {/* Background Glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-40
                        -top-40
                        h-96
                        w-96
                        rounded-full
                        bg-amber-500/10
                        blur-3xl
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-40
                        -right-40
                        h-96
                        w-96
                        rounded-full
                        bg-amber-500/5
                        blur-3xl
                    "
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="mx-auto max-w-3xl text-center">

                        <div className="mb-5 flex items-center justify-center gap-3">

                            <span className="h-px w-10 bg-amber-500" />

                            <span
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.22em]
                                    text-amber-400
                                "
                            >
                                Contact Us
                            </span>

                            <span className="h-px w-10 bg-amber-500" />

                        </div>

                        <h1
                            className="
                                text-3xl
                                font-bold
                                leading-tight
                                tracking-tight
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Let's Discuss Your

                            <span className="block text-amber-400">
                                Charcoal Requirement
                            </span>
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-2xl
                                text-base
                                leading-7
                                text-neutral-400
                                sm:text-lg
                            "
                        >
                            Contact us for product enquiries, retail requirements,
                            wholesale quantities and commercial requirements.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                CONTACT INFORMATION + ENQUIRY
            ========================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-neutral-50
                    py-16
                    sm:py-20
                    lg:py-24
                "
            >

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        top-20
                        h-80
                        w-80
                        rounded-full
                        bg-amber-500/5
                        blur-3xl
                    "
                />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

                        {/* =================================================
                            CONTACT INFORMATION
                        ================================================== */}

                        <div
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-neutral-200
                                bg-white
                                p-7
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-amber-400/60
                                hover:shadow-xl
                                sm:p-9
                            "
                        >

                            {/* Top Accent */}

                            <div
                                className="
                                    absolute
                                    left-0
                                    right-0
                                    top-0
                                    h-1
                                    bg-amber-500
                                    transition-all
                                    duration-300
                                    group-hover:h-1.5
                                "
                            />

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <p
                                        className="
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-[0.2em]
                                            text-amber-600
                                        "
                                    >
                                        Get In Touch
                                    </p>

                                    <h2
                                        className="
                                            mt-2
                                            text-2xl
                                            font-bold
                                            tracking-tight
                                            text-neutral-950
                                            sm:text-3xl
                                        "
                                    >
                                        Contact Information
                                    </h2>

                                </div>

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-neutral-950
                                        text-lg
                                        text-amber-400
                                        transition-all
                                        duration-300
                                        group-hover:rotate-3
                                        group-hover:bg-amber-500
                                        group-hover:text-neutral-950
                                    "
                                >
                                    →
                                </div>

                            </div>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-neutral-600
                                "
                            >
                                Tell us what type of charcoal you need and
                                the required quantity. We can discuss the
                                suitable supply option for your requirement.
                            </p>


                            {/* =================================================
                                CONTACT DETAILS
                            ================================================== */}

                            <div className="mt-8 space-y-3">

                                {/* Phone */}

                                <a
                                    href={`tel:${business.phone}`}
                                    className="
                                        group/item
                                        flex
                                        items-center
                                        gap-4
                                        rounded-xl
                                        border
                                        border-neutral-200
                                        bg-neutral-50
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:border-amber-400/60
                                        hover:bg-amber-50
                                        hover:shadow-md
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-neutral-950
                                            text-sm
                                            font-bold
                                            text-white
                                            transition-all
                                            duration-300
                                            group-hover/item:scale-105
                                            group-hover/item:bg-amber-500
                                            group-hover/item:text-neutral-950
                                        "
                                    >
                                        ☎
                                    </div>

                                    <div className="min-w-0">

                                        <p
                                            className="
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-[0.16em]
                                                text-neutral-400
                                            "
                                        >
                                            Phone
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                truncate
                                                text-sm
                                                font-semibold
                                                text-neutral-950
                                                transition-colors
                                                duration-300
                                                group-hover/item:text-amber-600
                                            "
                                        >
                                            {business.phone || "To be confirmed"}
                                        </p>

                                    </div>

                                    <span
                                        className="
                                            ml-auto
                                            text-sm
                                            text-neutral-300
                                            transition-all
                                            duration-300
                                            group-hover/item:translate-x-1
                                            group-hover/item:text-amber-500
                                        "
                                    >
                                        →
                                    </span>

                                </a>


                                {/* WhatsApp */}

                                <a
                                    href={`https://wa.me/${String(
                                        business.whatsapp || ""
                                    ).replace(/\D/g, "")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                        group/item
                                        flex
                                        items-center
                                        gap-4
                                        rounded-xl
                                        border
                                        border-neutral-200
                                        bg-neutral-50
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:border-amber-400/60
                                        hover:bg-amber-50
                                        hover:shadow-md
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-neutral-950
                                            text-sm
                                            font-bold
                                            text-white
                                            transition-all
                                            duration-300
                                            group-hover/item:scale-105
                                            group-hover/item:bg-amber-500
                                            group-hover/item:text-neutral-950
                                        "
                                    >
                                        W
                                    </div>

                                    <div className="min-w-0">

                                        <p
                                            className="
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-[0.16em]
                                                text-neutral-400
                                            "
                                        >
                                            WhatsApp
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                truncate
                                                text-sm
                                                font-semibold
                                                text-neutral-950
                                                transition-colors
                                                duration-300
                                                group-hover/item:text-amber-600
                                            "
                                        >
                                            {business.whatsapp || "To be confirmed"}
                                        </p>

                                    </div>

                                    <span
                                        className="
                                            ml-auto
                                            text-sm
                                            text-neutral-300
                                            transition-all
                                            duration-300
                                            group-hover/item:translate-x-1
                                            group-hover/item:text-amber-500
                                        "
                                    >
                                        →
                                    </span>

                                </a>


                                {/* Location */}

                                <div
                                    className="
                                        group/item
                                        flex
                                        items-center
                                        gap-4
                                        rounded-xl
                                        border
                                        border-neutral-200
                                        bg-neutral-50
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:border-amber-400/60
                                        hover:bg-amber-50
                                        hover:shadow-md
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-neutral-950
                                            text-sm
                                            font-bold
                                            text-white
                                            transition-all
                                            duration-300
                                            group-hover/item:scale-105
                                            group-hover/item:bg-amber-500
                                            group-hover/item:text-neutral-950
                                        "
                                    >
                                        ●
                                    </div>

                                    <div className="min-w-0">

                                        <p
                                            className="
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-[0.16em]
                                                text-neutral-400
                                            "
                                        >
                                            Location
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-semibold
                                                leading-6
                                                text-neutral-950
                                            "
                                        >
                                            {business.address || "To be confirmed"}
                                        </p>

                                    </div>

                                </div>


                                {/* Business Hours */}

                                <div
                                    className="
                                        group/item
                                        flex
                                        items-center
                                        gap-4
                                        rounded-xl
                                        border
                                        border-neutral-200
                                        bg-neutral-50
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:border-amber-400/60
                                        hover:bg-amber-50
                                        hover:shadow-md
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-neutral-950
                                            text-sm
                                            font-bold
                                            text-white
                                            transition-all
                                            duration-300
                                            group-hover/item:scale-105
                                            group-hover/item:bg-amber-500
                                            group-hover/item:text-neutral-950
                                        "
                                    >
                                        ◷
                                    </div>

                                    <div className="min-w-0">

                                        <p
                                            className="
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-[0.16em]
                                                text-neutral-400
                                            "
                                        >
                                            Business Hours
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-semibold
                                                text-neutral-950
                                            "
                                        >
                                            {business.businessHours || "To be confirmed"}
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                                CONTACT ACTIONS
                            ================================================== */}

                            <div
                                className="
                                    mt-7
                                    [&_a]:transition-all
                                    [&_a]:duration-300
                                    [&_a:hover]:-translate-y-1
                                    [&_a:hover]:border-amber-400
                                    [&_a:hover]:bg-amber-400
                                    [&_a:hover]:text-neutral-950
                                    [&_a:hover]:shadow-lg
                                    [&_a:hover]:shadow-amber-500/20

                                    [&_button]:transition-all
                                    [&_button]:duration-300
                                    [&_button:hover]:-translate-y-1
                                    [&_button:hover]:border-amber-400
                                    [&_button:hover]:bg-amber-400
                                    [&_button:hover]:text-neutral-950
                                    [&_button:hover]:shadow-lg
                                    [&_button:hover]:shadow-amber-500/20
                                "
                            >
                                <ContactActions />
                            </div>

                        </div>


                        {/* =================================================
                            ENQUIRY FORM
                        ================================================== */}

                        <div
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                bg-neutral-950
                                p-7
                                text-white
                                shadow-xl
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-2xl
                                sm:p-9
                            "
                        >

                            {/* Top Accent */}

                            <div
                                className="
                                    absolute
                                    left-0
                                    right-0
                                    top-0
                                    h-1
                                    bg-amber-500
                                    transition-all
                                    duration-300
                                    group-hover:h-1.5
                                "
                            />

                            {/* Glow */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-24
                                    -top-24
                                    h-72
                                    w-72
                                    rounded-full
                                    bg-amber-500/10
                                    blur-3xl
                                "
                            />

                            <div className="relative">

                                <p
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-amber-400
                                    "
                                >
                                    Send An Enquiry
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-bold
                                        tracking-tight
                                        sm:text-3xl
                                    "
                                >
                                    Tell Us What You Need
                                </h2>

                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        leading-7
                                        text-neutral-400
                                    "
                                >
                                    Share your requirement, quantity and
                                    contact details. We'll discuss the
                                    suitable supply option.
                                </p>


                                {/* Form */}

                                <form className="mt-8 space-y-5">

                                    {/* Name */}

                                    <div>

                                        <label
                                            htmlFor="name"
                                            className="
                                                mb-2
                                                block
                                                text-xs
                                                font-bold
                                                uppercase
                                                tracking-wider
                                                text-neutral-300
                                            "
                                        >
                                            Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            className="
                                                w-full
                                                rounded-xl
                                                border
                                                border-neutral-700
                                                bg-neutral-900
                                                px-4
                                                py-3.5
                                                text-sm
                                                text-white
                                                outline-none
                                                transition-all
                                                duration-300
                                                placeholder:text-neutral-600
                                                hover:border-neutral-500
                                                focus:border-amber-500
                                                focus:ring-1
                                                focus:ring-amber-500
                                            "
                                        />

                                    </div>


                                    {/* Phone */}

                                    <div>

                                        <label
                                            htmlFor="phone"
                                            className="
                                                mb-2
                                                block
                                                text-xs
                                                font-bold
                                                uppercase
                                                tracking-wider
                                                text-neutral-300
                                            "
                                        >
                                            Phone Number
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            placeholder="Your phone number"
                                            className="
                                                w-full
                                                rounded-xl
                                                border
                                                border-neutral-700
                                                bg-neutral-900
                                                px-4
                                                py-3.5
                                                text-sm
                                                text-white
                                                outline-none
                                                transition-all
                                                duration-300
                                                placeholder:text-neutral-600
                                                hover:border-neutral-500
                                                focus:border-amber-500
                                                focus:ring-1
                                                focus:ring-amber-500
                                            "
                                        />

                                    </div>


                                    {/* Requirement */}

                                    <div>

                                        <label
                                            htmlFor="requirement"
                                            className="
                                                mb-2
                                                block
                                                text-xs
                                                font-bold
                                                uppercase
                                                tracking-wider
                                                text-neutral-300
                                            "
                                        >
                                            Requirement
                                        </label>

                                        <textarea
                                            id="requirement"
                                            name="requirement"
                                            required
                                            rows="5"
                                            placeholder="Tell us what charcoal you need and the quantity..."
                                            className="
                                                w-full
                                                resize-none
                                                rounded-xl
                                                border
                                                border-neutral-700
                                                bg-neutral-900
                                                px-4
                                                py-3.5
                                                text-sm
                                                text-white
                                                outline-none
                                                transition-all
                                                duration-300
                                                placeholder:text-neutral-600
                                                hover:border-neutral-500
                                                focus:border-amber-500
                                                focus:ring-1
                                                focus:ring-amber-500
                                            "
                                        />

                                    </div>


                                    {/* Submit */}

                                    <button
                                        type="submit"
                                        className="
                                            group/button
                                            flex
                                            w-full
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            bg-amber-500
                                            px-6
                                            py-3.5
                                            text-sm
                                            font-bold
                                            text-neutral-950
                                            transition-all
                                            duration-300
                                            hover:-translate-y-0.5
                                            hover:bg-amber-400
                                            hover:shadow-lg
                                            hover:shadow-amber-500/20
                                            active:translate-y-0
                                        "
                                    >
                                        Submit Enquiry

                                        <span
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover/button:translate-x-1
                                            "
                                        >
                                            →
                                        </span>

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                GOOGLE MAP
            ========================================================== */}

            <section className="bg-white py-16 sm:py-20 lg:py-24">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-amber-600
                                "
                            >
                                Find Us
                            </p>

                            <h2
                                className="
                                    mt-2
                                    text-2xl
                                    font-bold
                                    tracking-tight
                                    text-neutral-950
                                    sm:text-3xl
                                "
                            >
                                Our Location
                            </h2>

                            <p className="mt-2 text-sm text-neutral-500">
                                Visit us or use the map to get directions.
                            </p>

                        </div>


                        <a
                            href="https://maps.app.goo.gl/rnJTT5t6uLxUDwZR8"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                group/directions
                                inline-flex
                                shrink-0
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                border
                                border-neutral-200
                                bg-neutral-50
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-neutral-950
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-amber-500
                                hover:bg-amber-500
                                hover:shadow-md
                            "
                        >
                            Get Directions

                            <span
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover/directions:translate-x-1
                                "
                            >
                                →
                            </span>

                        </a>

                    </div>


                    {/* Map */}

                    <div
                        className="
                            group/map
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-neutral-200
                            bg-neutral-100
                            shadow-lg
                            transition-all
                            duration-300
                            hover:border-amber-400/50
                            hover:shadow-xl
                        "
                    >

                        <iframe
                            title="Sri Venkateswara Charcoal Supply location"
                            src="https://www.google.com/maps?q=XP4R%2BVQ%20Bengaluru%2C%20Karnataka&output=embed"
                            className="
                                h-[320px]
                                w-full
                                border-0
                                transition-all
                                duration-500
                                sm:h-[400px]
                                lg:h-[480px]
                            "
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />

                    </div>


                    {/* Address */}

                    <div
                        className="
                            group/address
                            mt-5
                            flex
                            items-start
                            gap-3
                            rounded-xl
                            border
                            border-transparent
                            p-3
                            transition-all
                            duration-300
                            hover:border-amber-200
                            hover:bg-amber-50
                        "
                    >

                        <div
                            className="
                                mt-1
                                h-8
                                w-1
                                shrink-0
                                rounded-full
                                bg-amber-500
                                transition-all
                                duration-300
                                group-hover/address:h-10
                            "
                        />

                        <div>

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-neutral-400
                                "
                            >
                                Address
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    font-semibold
                                    text-neutral-800
                                    transition-colors
                                    duration-300
                                    group-hover/address:text-amber-700
                                "
                            >
                                {business.address || "Bengaluru, Karnataka"}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                FINAL TRUST MESSAGE
            ========================================================== */}

            <section className="bg-neutral-950 py-12 text-white">

                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

                    <p
                        className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-amber-400
                        "
                    >
                        Sri Venkateswara Charcoal Supply
                    </p>

                    <h2
                        className="
                            mt-3
                            text-2xl
                            font-bold
                            sm:text-3xl
                        "
                    >
                        Quality You Can Trust.

                        <span className="text-amber-400">
                            {" "}Supply You Can Depend On.
                        </span>
                    </h2>

                </div>

            </section>

        </main>
    )
}

export default Contact