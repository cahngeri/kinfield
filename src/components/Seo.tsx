import { useEffect } from "react";

const SITE_URL = "https://kinfield.id";
const DEFAULT_TITLE = "KINFIELD — Creative Marketing Agency for Baby & Kids Brands";
const DEFAULT_DESCRIPTION =
  "KINFIELD is a creative marketing agency for baby & kids brands that want to win parents at every phase of their journey.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
}: SeoProps) => {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : DEFAULT_ROBOTS);
    upsertCanonical(url);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", image);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    // Signal to the prerenderer that meta tags are ready to be captured.
    document.dispatchEvent(new Event("seo-ready"));
  }, [title, description, url, image, type, noindex]);

  useEffect(() => {
    const existing = document.getElementById("seo-jsonld");
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "seo-jsonld";
      script.type = "application/ld+json";
      
      const payload = Array.isArray(jsonLd)
        ? { "@context": "https://schema.org", "@graph": jsonLd }
        : ("@context" in jsonLd ? jsonLd : { "@context": "https://schema.org", ...jsonLd });

      script.textContent = JSON.stringify(payload);
      document.head.appendChild(script);
    }
    return () => {
      const el = document.getElementById("seo-jsonld");
      if (el) el.remove();
    };
  }, [jsonLd]);

  return null;
};

export default Seo;
