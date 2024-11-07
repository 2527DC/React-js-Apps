const Section1 = () => {
  return (
    <div className="bg-[url('public/s1_background.jpg')] w-full h-100  bg-cover bg-center flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl">Chethan</h1>
      <h1 className="text-3xl mt-2">I am God</h1>
      <p className="text-lg mt-4 text-center max-w-md">
        This is a paragraph on the background image, describing something about this section. It will adjust its width according to the container.
      </p>
    </div>
  );
};

export default Section1;
