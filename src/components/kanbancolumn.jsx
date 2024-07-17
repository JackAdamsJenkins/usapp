import KanbanItem from "./kanbanitem";

const CARD_CLASSES = "bg-card p-4 rounded-lg shadow-md";

const KanbanColumn = ({ title, items, onDragEnd }) => {
  const handleDrop = (e, column) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text");
    const source = JSON.parse(itemId);
    onDragEnd({
      source,
      destination: { droppableId: column, index: e.currentTarget.getAttribute('data-index') }
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={CARD_CLASSES} onDrop={(e) => handleDrop(e, title)} onDragOver={handleDragOver}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <KanbanItem key={index} content={item} index={index} column={title} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
