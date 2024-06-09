export const Card = ({ data }) => {
  return (
    <div className="m-2 w-fit p-6 rounded-lg border shadow-md">
      <div
        className="h-[15rem] w-[15rem] bg-cover flex justify-center items-center bg-center rounded-lg shadow-md"
        style={{
          backgroundImage: `url(https://i.imgur.com/${data.image}.jpg)`,
        }}
      ></div>
      <h2 className="font-semibold text-2xl mt-[1rem]">{data.name}</h2>
    </div>
  );
};
