const Header = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80">
          Add User Story
        </button>
      </div>
    );
  };

export default Header;