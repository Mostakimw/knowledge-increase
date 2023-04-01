import React from "react";

const Qna = () => {
  return (
    <div className="mt-12">
      <h1 className="text-center font-bold text-3xl underline">
        You Should Know About Them
      </h1>
      <div className="bg-[#1111110D] mt-12 rounded-md mb-8 md:grid grid-cols-12 gap-6 md:w-[1280px] mx-auto">
        <div className="col-span-6 bg-red-200 p-5 rounded-sm max-sm:border-b border-black ">
          <h1 className="font-bold text-3xl mb-5">
            Difference between props and state.
          </h1>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <h3 className="font-bold text-xl">Props</h3>
              <li className="text-base">
                Props are arguments passed into React components.
              </li>
              <li>Props are read only.</li>
              <li>Props can be access by the child component</li>
              <li>Props are immutable</li>
              <li>Props Make component reusable</li>
            </div>
            <div className="col-span-6">
              <h1 className="font-bold text-xl">State</h1>
              <li className="text-base">
                state is a built-in React object that is used to contain data or
                information about the component
              </li>
              <li>State changes over time</li>
              <li>State cannot be access by chile compo</li>
              <li>State is mutable</li>
              <li>State cannot make components reusable</li>
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-red-200 p-5 rounded-sm max-sm:border-b border-black">
          <h1 className="font-bold text-3xl mb-5">How useState work</h1>
          <p>
            useState is a react hook that allows to add, create and updtae a
            state to functional component.
            <small className="block text-[#6047EC]">
              const [count, setCount] = useState(0);
            </small>
            Here, count is the current state value and setCount is a function
            that can be used to update state value whenever need. useState hook
            returns an array of two elements. One is current state vale and
            another is the update function.
          </p>
        </div>
        <div className="col-span-6 bg-red-200 p-5 rounded-sm max-sm:border-b border-black">
          <h1 className="font-bold text-3xl mb-5">How does React works</h1>
          <p>
            React is a Javascript library that builds UI. It allows to create
            reusable components and those component can be use for build complex
            and dynamic web app. <br /> It working by Virtual DOM. Virtual DOM
            is another representation of actual DOM and lightweight copy of
            actual DOM. Whenever the state of a component change or render React
            compares the present virtual DOM with the previously created virtual
            DOM and find the changes. When the changes has been found React just
            change the founded part of actual DOM rather than changing the Whole
            DOM. Thats why react give us higher and fast productivity.
          </p>
        </div>
        <div className="col-span-6 bg-red-200 p-5 rounded-sm">
          <h1 className="font-bold text-3xl mb-5">
            What can useEffect does except dataLoad
          </h1>
          <p>
            useEffect is a react hook that allows to perform side effect in
            react component. It uses for dataLoad, DOM updates, event listeners,
            timer. <br />
            DOM updates: Whenever a component need to do something after render
            we use a useEffect function that will called after DOM updates and
            render. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qna;
