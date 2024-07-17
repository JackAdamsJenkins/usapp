import Header from "./header";
import KanbanColumn from "./kanbancolulmn";

const KanbanBoard = () => {
    return (
      <div className="min-h-screen bg-background text-foreground p-4">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <KanbanColumn title="ToDo" items={["Implement login functionality", "Design landing page"]} />
          <KanbanColumn title="Doing" items={["Develop user profile page"]} />
          <KanbanColumn title="Done" items={["Set up project repository", "Initial project setup"]} />
        </div>
      </div>
    );
  };

  export default KanbanBoard;