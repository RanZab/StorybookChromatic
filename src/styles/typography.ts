// Typography tokens extracted from Figma, grouped by category with title and description for each group

/**
 * Typography system for MCP Design System
 * Font: Inter
 * All sizes in px, line heights as unitless multipliers
 * (General description from Figma: "Typography system for consistent, accessible, and scalable text styles across the product.")
 */

export type TypographyStyle = {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
  fontStyle: string;
  label: string;
};

export type TypographyGroup = {
  title: string;
  description: string;
  styles: { [token: string]: TypographyStyle };
};

export const typographyGroups: { [group: string]: TypographyGroup } = {
  h1: {
    title: "Heading 1 (H1)",
    description: "Large page titles and main headings.",
    styles: {
      regular: { label: "H1 Regular", fontFamily: "Inter", fontWeight: 400, fontSize: 40, lineHeight: 1.4, fontStyle: "normal" },
      semibold: { label: "H1 Semi Bold", fontFamily: "Inter", fontWeight: 600, fontSize: 40, lineHeight: 1.4, fontStyle: "normal" },
      bold: { label: "H1 Bold", fontFamily: "Inter", fontWeight: 700, fontSize: 40, lineHeight: 1.4, fontStyle: "normal" },
    },
  },
  h2: {
    title: "Heading 2 (H2)",
    description: "Section headings and sub-titles.",
    styles: {
      regular: { label: "H2 Regular", fontFamily: "Inter", fontWeight: 400, fontSize: 32, lineHeight: 1.4, fontStyle: "normal" },
      semibold: { label: "H2 Semi Bold", fontFamily: "Inter", fontWeight: 600, fontSize: 32, lineHeight: 1.4, fontStyle: "normal" },
      bold: { label: "H2 Bold", fontFamily: "Inter", fontWeight: 700, fontSize: 32, lineHeight: 1.4, fontStyle: "normal" },
    },
  },
  h3: {
    title: "Heading 3 (H3)",
    description: "Sub-section headings and card titles.",
    styles: {
      regular: { label: "H3 Regular", fontFamily: "Inter", fontWeight: 400, fontSize: 24, lineHeight: 1.4, fontStyle: "normal" },
      semibold: { label: "H3 Semi Bold", fontFamily: "Inter", fontWeight: 600, fontSize: 24, lineHeight: 1.4, fontStyle: "normal" },
      bold: { label: "H3 Bold", fontFamily: "Inter", fontWeight: 700, fontSize: 24, lineHeight: 1.4, fontStyle: "normal" },
    },
  },
  bodyXL: {
    title: "Body XL",
    description: "Extra large body text for prominent content.",
    styles: {
      regular: { label: "Body XL Regular", fontFamily: "Inter", fontWeight: 400, fontSize: 20, lineHeight: 1.4, fontStyle: "normal" },
      semibold: { label: "Body XL Semi Bold", fontFamily: "Inter", fontWeight: 600, fontSize: 20, lineHeight: 1.4, fontStyle: "normal" },
      bold: { label: "Body XL Bold", fontFamily: "Inter", fontWeight: 700, fontSize: 20, lineHeight: 1.4, fontStyle: "normal" },
    },
  },
  bodyL: {
    title: "Body L",
    description: "Large body text for main content.",
    styles: {
      regular: { label: "Body L Regular", fontFamily: "Inter", fontWeight: 400, fontSize: 18, lineHeight: 1.4, fontStyle: "normal" },
      semibold: { label: "Body L Semi Bold", fontFamily: "Inter", fontWeight: 600, fontSize: 18, lineHeight: 1.4, fontStyle: "normal" },
      bold: { label: "Body L Bold", fontFamily: "Inter", fontWeight: 700, fontSize: 18, lineHeight: 1.4, fontStyle: "normal" },
    },
  },
  bodyM: {
    title: "Body M",
    description: "Default body text for paragraphs and content.",
    styles: {
      regular: { label: "Body M Regular", fontFamily: "Inter", fontWeight: 400, fontSize: 16, lineHeight: 1.4, fontStyle: "normal" },
      semibold: { label: "Body M Semi Bold", fontFamily: "Inter", fontWeight: 600, fontSize: 16, lineHeight: 1.4, fontStyle: "normal" },
      bold: { label: "Body M Bold", fontFamily: "Inter", fontWeight: 700, fontSize: 16, lineHeight: 1.4, fontStyle: "normal" },
    },
  },
  bodyS: {
    title: "Body S",
    description: "Small body text for captions and secondary content.",
    styles: {
      regular: { label: "Body S Regular", fontFamily: "Inter", fontWeight: 400, fontSize: 14, lineHeight: 1.4, fontStyle: "normal" },
      semibold: { label: "Body S Semi Bold", fontFamily: "Inter", fontWeight: 600, fontSize: 14, lineHeight: 1.4, fontStyle: "normal" },
      bold: { label: "Body S Bold", fontFamily: "Inter", fontWeight: 700, fontSize: 14, lineHeight: 1.4, fontStyle: "normal" },
    },
  },
  bodyXS: {
    title: "Body XS",
    description: "Extra small body text for footnotes and legal.",
    styles: {
      regular: { label: "Body XS Regular", fontFamily: "Inter", fontWeight: 400, fontSize: 12, lineHeight: 1.4, fontStyle: "normal" },
      semibold: { label: "Body XS Semi Bold", fontFamily: "Inter", fontWeight: 600, fontSize: 12, lineHeight: 1.4, fontStyle: "normal" },
      bold: { label: "Body XS Bold", fontFamily: "Inter", fontWeight: 700, fontSize: 12, lineHeight: 1.4, fontStyle: "normal" },
    },
  },
  label: {
    title: "Label",
    description: "Labels for UI elements and controls.",
    styles: {
      regular: { label: "Label Regular", fontFamily: "Inter", fontWeight: 400, fontSize: 11, lineHeight: 1.4, fontStyle: "normal" },
      semibold: { label: "Label Semi Bold", fontFamily: "Inter", fontWeight: 600, fontSize: 11, lineHeight: 1.4, fontStyle: "normal" },
      bold: { label: "Label Bold", fontFamily: "Inter", fontWeight: 700, fontSize: 11, lineHeight: 1.4, fontStyle: "normal" },
    },
  },
}; 