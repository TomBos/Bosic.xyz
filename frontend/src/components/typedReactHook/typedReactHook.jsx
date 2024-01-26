import Typed from "typed.js";
import React from "react";

function TypedReactHook() {

  const TypedReact = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
      const options = {
        strings: [
          '<i class="uil uil-book-alt nav_icon"></i>IT Student',
          '<i class="uil uil-java-script nav_icon"></i>Junior Backend Developer',
        ],
        typeSpeed: 150,
        backSpeed: 400,
        showCursor: false,
        loop: true,
      };

      typed.current = new Typed(el.current, options);
    });

    return (
      <div className="wrap">
        <div className="type-wrap">
          <span class="auto__type" ref={el} />
        </div>
      </div>
    );
  };

	return (
		<>
			<TypedReact />
		</>
	);
}

export default TypedReactHook;
