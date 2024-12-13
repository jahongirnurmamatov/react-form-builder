import $ from "jquery";
import React, { useRef, useEffect } from "react";

// Assign global jQuery variables
window.jQuery = $;
window.$ = $;

// Load jQuery UI after setting jQuery globally
import "jquery-ui-sortable";
import "formBuilder";

const FormBuilder = () => {
  const fbRef = useRef(null);
  const formData = [
    {
      type: "header",
      subtype: "h1",
      label: "formBuilder in React"
    },
    {
      type: "paragraph",
      label: "This is a demonstration of formBuilder running in a React project."
    }
  ];

  useEffect(() => {
    try {
      $(fbRef.current).formBuilder({ formData });
    } catch (error) {
      console.error("Error initializing formBuilder:", error);
    }
  }, []);

  return <div id="fb-editor" ref={fbRef} />;
};

export default FormBuilder;
