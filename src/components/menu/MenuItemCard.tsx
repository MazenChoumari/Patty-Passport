import { Tag } from "@/components/ui/Tag";
import { formatPrice, priceOf } from "@/data/pricing";
import type { MenuItem } from "@/data/countries";

export function MenuItemCard({
  item,
  countryName,
  countryFlag,
  badge,
}: {
  item: MenuItem;
  countryName?: string;
  countryFlag?: string;
  badge?: string;
}) {
  return (
    <div className="relative flex flex-col gap-2 rounded-2xl border border-navy/10 bg-white p-4 shadow-sm">
      {badge && (
        <span className="absolute -top-2.5 left-4 rounded-full bg-passport-red px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          {countryName && (
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-dark">
              {countryFlag} {countryName}
            </p>
          )}
          <h3 className="font-heading font-semibold text-navy">{item.name}</h3>
        </div>
        <span className="shrink-0 font-heading font-semibold text-passport-red">
          {formatPrice(priceOf(item.priceType))}
        </span>
      </div>
      <p className="text-sm text-navy-light">{item.description}</p>
      {item.tags && item.tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Tag key={tag} tone="sky">
              {tag}
            </Tag>
          ))}
          {item.suggested && <Tag tone="yellow">Suggested — to confirm</Tag>}
        </div>
      )}
    </div>
  );
}
