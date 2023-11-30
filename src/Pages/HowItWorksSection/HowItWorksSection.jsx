import  { useEffect,  useState } from "react";


const HowItWorksSection = () => {
    const [Features, setFeatures] = useState()
    useEffect(()=>{
        fetch('Features.json')
        .then(res => res.json())
        .then(data => {
            setFeatures(data)
        })
    },[])
  return (
    <section className="py-16 bg-gray-100 "
    style={{
      backgroundImage:
        'url("https://i.ibb.co/d2fRNfS/Everything-You-must-Know-About-Market-Research.jpg")',
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
    }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="">
          <div>
            {/* Add an icon or illustration */}
            <div className="grid md:grid-cols-4 gap-6 mx-5" >
            {
                Features?.map(item => <div key={item.id}>
                <div className="card bg-base-100 text-white bg-opacity-10 shadow-xl h-[350px]">
              <figure>
                <img
                  src={item.image}
                  alt="Shoes"
                  className="w-32 rounded-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center flex justify-center">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
                </div>)
            }
            </div>
          </div>
        </div>
        <button className="mt-8 btn bg-blue-500 text-white px-6 py-3 rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HowItWorksSection;
