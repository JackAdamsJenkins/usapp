const ITEM_CLASSES = "bg-secondary text-secondary-foreground p-3 rounded-lg shadow";

const KanbanItem = ({ content, index, column }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", JSON.stringify({ index, droppableId: column }));
  };

  return (
    <div className={ITEM_CLASSES} draggable onDragStart={handleDragStart}>
      <p>{content}</p>
    </div>
  );
};

export default KanbanItem;
