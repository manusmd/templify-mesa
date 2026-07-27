"use client";

import { useState } from "react";
import Img from "./Img";
import type { MenuCategory, SiteContent } from "@/lib/content";

export default function MenuTabs({
  categories,
  tasting,
}: {
  categories: MenuCategory[];
  tasting: SiteContent["menu"]["tasting"];
}) {
  const [active, setActive] = useState(
    () => categories.find((c) => c.key === "pizze")?.key ?? categories[0]?.key
  );
  const current =
    categories.find((c) => c.key === active) ?? categories[0];

  return (
    <>
      <div className="menu-tabs" role="tablist" aria-label="Menu sections">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            role="tab"
            aria-selected={cat.key === active}
            className="menu-tab"
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="menu-body">
        <div className="dish-list" role="tabpanel">
          {current.items.map((dish, i) => (
            <div className="dish" key={i}>
              <div className="dish-main">
                <div className="dish-title">
                  <h3>{dish.name}</h3>
                  {dish.tag && <span className="dish-tag">{dish.tag}</span>}
                </div>
                <p className="dish-desc">{dish.desc}</p>
              </div>
              <span className="dish-price">{dish.price}</span>
            </div>
          ))}
        </div>

        <aside className="menu-side">
          <div className="menu-side-photo">
            <Img
              src={current.image}
              alt={current.photo}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
          </div>
          <div className="tasting">
            <span className="k">{tasting.kicker}</span>
            <h3>{tasting.title}</h3>
            <p>{tasting.note}</p>
          </div>
        </aside>
      </div>
    </>
  );
}
