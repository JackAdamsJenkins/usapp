const ITEM_CLASSES = "bg-secondary text-secondary-foreground p-3 rounded-lg shadow";

const KanbanItem = ({ content }) => {
    return (
      <div className={ITEM_CLASSES}>
        <p>{content}</p>
      </div>
    );
  };

export default KanbanItem;