import { ContentItem, ParagraphItem, ListItem } from "@/app/lib/types/georgia/general";
const RenderContentItem = ({ item, parentKey }: { item: ContentItem; parentKey: string | number }) => {
  if (item.type === "paragraph" && "text" in item) {
    const paragraph = item as ParagraphItem;
    return <p className="my-2">{paragraph.text}</p>;
  }
  if (item.type === "list" && "items" in item) {
    const list = item as ListItem;
    return (
      <ul className="list-disc list-inside my-2 pl-4">
        {list.items.map((listItem, index) => (
          <li key={`${parentKey}-li-${index}`}>{listItem}</li>
        ))}
      </ul>
    );
  }
  return null;
};
export default RenderContentItem;