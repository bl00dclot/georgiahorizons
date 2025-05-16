export interface ParagraphItem {
  type: string;
  text: string;
}
export interface ListItem {
  type: string;
  items: string[];
}
export type ContentItem = ParagraphItem | ListItem;
export interface CardType {
  title: string;
  description: ContentItem[] | null;
  content: ContentItem[] | null;
  footer: string;
  img_src: string;
  img_alt: string;
}
export type CardDataArray = CardType[];