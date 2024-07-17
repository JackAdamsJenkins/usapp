import  { useState } from "react";
import Header from "./header";
import KanbanColumn from "./kanbancolumn";

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    ToDo: ["Implement login functionality", "Design landing page"],
    Doing: ["Develop user profile page"],
    Done: ["Set up project repository", "Initial project setup"],
  });

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceColumn = source.droppableId;
    const destColumn = destination.droppableId;

    if (sourceColumn === destColumn) {
      const updatedItems = Array.from(columns[sourceColumn]);
      const [removed] = updatedItems.splice(source.index, 1);
      updatedItems.splice(destination.index, 0, removed);
      setColumns({ ...columns, [sourceColumn]: updatedItems });
    } else {
      const sourceItems = Array.from(columns[sourceColumn]);
      const destItems = Array.from(columns[destColumn]);
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({ ...columns, [sourceColumn]: sourceItems, [destColumn]: destItems });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(columns).map(([title, items]) => (
          <KanbanColumn key={title} title={title} items={items} onDragEnd={handleDragEnd} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
