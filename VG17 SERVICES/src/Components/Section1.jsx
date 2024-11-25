const Section1 = () => {
  return (
    <div className="bg-[url('public/s1_background.jpg')] w-full h-screen bg-cover bg-center flex items-center text-white p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start ml-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-left md:text-left">
            Chethan R
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
