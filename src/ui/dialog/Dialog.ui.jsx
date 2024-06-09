export const Dialog = ({ component }) => {
  return (
    <div className="bg-gray-500/50 max-w-full fixed right-0 top-0 left-0 bottom-0 flex justify-center items-center">
      <div className="bg-gray-200 rounded-lg">{component}</div>
    </div>
  );
};
