function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left"

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading