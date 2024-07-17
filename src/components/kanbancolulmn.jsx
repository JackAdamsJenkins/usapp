import KanbanItem from "./kanbanitem";

const CARD_CLASSES = "bg-card p-4 rounded-lg shadow-md";

const KanbanColumn = ({ title, items }) => {
    return (
      <div className={CARD_CLASSES}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="space-y-2">
          {items.map((item, index) => (
            <KanbanItem key={index} content={item} />
          ))}
        </div>
      </div>
    );
  };

export default KanbanColumn;