import { business } from "../../data/business"

function StickyContactBar() {
  const hasPhone = Boolean(business.phone)
  const hasWhatsApp = Boolean(business.whatsapp)
  const hasMaps = Boolean(business.mapsUrl)

  if (!hasPhone && !hasWhatsApp && !hasMaps) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white p-2 shadow-lg md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">

        {hasPhone && (
          <a
            href={`tel:${business.phone}`}
            className="flex items-center justify-center rounded-md bg-neutral-900 px-2 py-3 text-xs font-semibold text-white"
          >
            Call
          </a>
        )}

        {hasWhatsApp && (
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-md border border-neutral-900 px-2 py-3 text-xs font-semibold text-neutral-900"
          >
            WhatsApp
          </a>
        )}

        {hasMaps && (
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-md border border-neutral-300 px-2 py-3 text-xs font-semibold text-neutral-700"
          >
            Directions
          </a>
        )}

      </div>
    </div>
  )
}

export default StickyContactBar