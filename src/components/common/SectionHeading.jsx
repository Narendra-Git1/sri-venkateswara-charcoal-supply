function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const isCenter = align === "center"

  const alignment = isCenter
    ? "mx-auto text-center"
    : "text-left"

  return (
    <div
      className={`
        max-w-3xl
        ${alignment}
      `}
    >

      {/* =========================================================
          EYEBROW
      ========================================================== */}

      {eyebrow && (
        <div
          className={`
            mb-4
            flex
            items-center
            gap-3
            ${isCenter ? "justify-center" : "justify-start"}
          `}
        >
          <span className="h-px w-8 bg-amber-500 sm:w-10" />

          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.22em]
              text-amber-600
            "
          >
            {eyebrow}
          </span>

          <span className="h-px w-8 bg-amber-500 sm:w-10" />
        </div>
      )}


      {/* =========================================================
          TITLE
      ========================================================== */}

      <h2
        className="
          text-3xl
          font-bold
          leading-[1.1]
          tracking-tight
          text-neutral-950
          sm:text-4xl
          lg:text-5xl
        "
      >
        {title}
      </h2>


      {/* =========================================================
          DESCRIPTION
      ========================================================== */}

      {description && (
        <p
          className="
            mt-5
            max-w-2xl
            text-sm
            leading-6
            text-neutral-600
            sm:text-base
            sm:leading-7
            lg:text-lg
          "
        >
          {description}
        </p>
      )}

    </div>
  )
}

export default SectionHeading