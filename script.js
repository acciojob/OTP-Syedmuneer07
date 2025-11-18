//your JS code here
const inputs = document.querySelectorAll(".code");

inputs[0].focus();

// Move forward when typing
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Backspace behavior
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      input.value = "";            
      
      if (index > 0) {
        inputs[index - 1].focus(); 
      }
    }
  });
});
