let attach_collapse = () => {
  const expand_button = document.querySelector("button.expand-button");
  const expand_area = document.querySelector("div.expand-area");
  expand_button.textContent = "Hide Resume PDF";
  expand_area.style.display = "none";
  expand_button.addEventListener("click", () => {
    if (expand_area.style.display === "none") {
      expand_area.style.display = "block";
      expand_button.textContent = "Hide Resume PDF";
    } else {
      expand_area.style.display = "none";
      expand_button.textContent = "View Resume PDF";
    }
  });
};

function contact_me_form_listener() {
  let contact_me_form = document.querySelector(".contact-me-form");
  contact_me_form.addEventListener("submit", function name(params) {
    params.preventDefault();

    // The form with easier accessable data
    const parsed_form = new FormData(contact_me_form);
    // Final result
    const output = {};

    // Convert parsed_form to an object
    for (const [key, value] of parsed_form.entries()) {
      // Checkboxes have the same name
      if (key in output) {
        // We've gone over this checkbox before at least twice
        if (Array.isArray(output[key])) {
          output[key].push(value);
          // Converting the checkbox to an array
        } else {
          let temp = output[key];
          output[key] = [temp, value];
        }
        // Regular innputs
      } else {
        output[key] = value;
      }
    }
    const pop_out = document.querySelector(".popup-section-container");
    pop_out.style.display = "block";

    let p_name = document.createElement("p");
    p_name.textContent = `Your name: ${
      output["name"] ? output["name"] : "NONE"
    }`;
    let p_email = document.createElement("p");
    p_email.textContent = `Your email: ${
      output["email"] ? output["email"] : "NONE"
    }`;
    let p_topic = document.createElement("p");
    p_topic.textContent = `Discussion Topic: ${
      output["discussion-topic"] ? output["discussion-topic"] : "NONE"
    }`;
    // Since checkboxes can have multiple answers, we gotta check for an array
    let p_met = document.createElement("p");
    p_met.textContent = "Have we met: ";
    if (Array.isArray(output["have-we-met"])) {
      p_met.textContent += output["have-we-met"].join(", ");
    } else {
      p_met.textContent += `${
        output["have-we-met"] ? output["have-we-met"] : "NONE"
      }`;
    }
    const pop_out_contents = document.querySelector(
      ".popup-section-container .popup-section .form-contents"
    );

    pop_out_contents.append(p_name);
    pop_out_contents.append(p_email);
    pop_out_contents.append(p_topic);
    pop_out_contents.append(p_met);

    console.log("Contact me form submission: ");
    console.log(output);

    console.groupEnd();
  });
}

function deattach_popout(params) {
  const button = document.querySelector(
    ".popup-section-container .popup-section button.close-popup-button"
  );
  button.addEventListener("click", (params) => {
    const pop_out = document.querySelector(".popup-section-container");
    pop_out.style.display = "none";
    const pop_out_contents = document.querySelector(
      ".popup-section-container .popup-section .form-contents"
    );
    // Removes all the children of the node, leaving the node intact
    pop_out_contents.innerHTML = "";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  attach_collapse();
  contact_me_form_listener();
  deattach_popout();
});
