import { describe, it, expect } from "vitest";
import {
  SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
  buildOrganizationSchema,
  buildWebsiteSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServicesSchemas,
  buildTeamSchemas,
  buildCaseStudySchema,
  buildArticleSchema,
  DEFAULT_HOMEPAGE_FAQS,
} from "@/lib/schema";

describe("Schema Library Unit Tests", () => {
  it("builds a valid Organization schema", () => {
    const org = buildOrganizationSchema();
    expect(org["@id"]).toBe(ORGANIZATION_ID);
    expect(org.name).toBe("KINFIELD");
    expect(org["@type"]).toContain("Organization");
    expect(org["@type"]).toContain("ProfessionalService");
    expect(org.contactPoint).toBeDefined();
    expect(org.award).toHaveLength(8);
  });

  it("builds a valid WebSite schema", () => {
    const site = buildWebsiteSchema();
    expect(site["@id"]).toBe(WEBSITE_ID);
    expect(site["@type"]).toBe("WebSite");
    expect(site.publisher["@id"]).toBe(ORGANIZATION_ID);
  });

  it("builds breadcrumbs schema correctly", () => {
    const crumbs = buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ]);
    expect(crumbs["@type"]).toBe("BreadcrumbList");
    expect(crumbs.itemListElement).toHaveLength(2);
    expect(crumbs.itemListElement[0].position).toBe(1);
    expect(crumbs.itemListElement[0].item).toBe(`${SITE_URL}/`);
    expect(crumbs.itemListElement[1].position).toBe(2);
    expect(crumbs.itemListElement[1].item).toBe(`${SITE_URL}/about`);
  });

  it("builds valid FAQPage schema", () => {
    const faq = buildFaqSchema(DEFAULT_HOMEPAGE_FAQS);
    expect(faq["@type"]).toBe("FAQPage");
    expect(faq.mainEntity.length).toBeGreaterThan(0);
    expect(faq.mainEntity[0]["@type"]).toBe("Question");
    expect(faq.mainEntity[0].acceptedAnswer["@type"]).toBe("Answer");
    expect(faq.mainEntity[0].acceptedAnswer.text).toBeTruthy();
  });

  it("builds services and team schemas with proper parent organization links", () => {
    const services = buildServicesSchemas();
    expect(services).toHaveLength(5);
    services.forEach((s) => {
      expect(s["@type"]).toBe("Service");
      expect(s.provider["@id"]).toBe(ORGANIZATION_ID);
    });

    const team = buildTeamSchemas();
    expect(team).toHaveLength(5);
    team.forEach((person) => {
      expect(person["@type"]).toBe("Person");
      expect(person.worksFor["@id"]).toBe(ORGANIZATION_ID);
    });
  });

  it("builds CaseStudy and Article schemas properly", () => {
    const caseStudy = buildCaseStudySchema({
      slug: "test-client",
      name: "Test Case Study",
      description: "A test description",
      clientName: "Test Client",
      results: ["3x growth"],
    });
    expect(caseStudy["@type"]).toBe("CreativeWork");
    expect(caseStudy["@id"]).toBe(`${SITE_URL}/portfolio/test-client#casestudy`);
    expect(caseStudy.creator["@id"]).toBe(ORGANIZATION_ID);

    const article = buildArticleSchema({
      slug: "test-article",
      title: "Test Article Title",
      excerpt: "Test excerpt",
      date: "March 2026",
      category: "Strategy",
    });
    expect(article["@type"]).toBe("BlogPosting");
    expect(article.headline).toBe("Test Article Title");
    expect(article.datePublished).toBe("2026-03-01");
    expect(article.mainEntityOfPage).toBe(`${SITE_URL}/insight/test-article`);
  });
});
