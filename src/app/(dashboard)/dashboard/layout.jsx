const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-2">
      <div>
        <h1>Sidebar</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
