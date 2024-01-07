import landingImage from "./assets/svg/landing.svg";
import SignInAndSignUp from "./components/pages/SignInAndSignUp";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-300 flex justify-center items-center">
      <div className="grid  grid-cols-2  gap-4 place-items-center mx-6 bg-slate-300">
        <div className="col-span-2">
          <h1 className=" text-5xl font-medium cursor-pointer ">
            MKRN <span className="text-indigo-600  ">Cafe</span>
          </h1>
        </div>
        <SignInAndSignUp />

        <img src={landingImage} alt="landingImage" />
      </div>
    </div>
  );
};

export default App;
