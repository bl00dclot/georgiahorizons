interface ParagraphItem {
  type: string;
  text: string;
}
interface ListItem {
  type: string;
  items: string[];
}
type ContentItem = ParagraphItem | ListItem;
interface CardType {
  title: string;
  description: ContentItem[] | null;
  content: ContentItem[] | null;
  footer: string;
  img_src: string;
  img_alt: string;
}
export type CardDataArray = CardType[];