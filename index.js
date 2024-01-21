const WebsiteInput = document.getElementById("website");
const UserNameInput = document.getElementById("UserName");
const PasswordInput = document.getElementById("Password");
const submitButton = document.querySelector(".submit");

// Select tBody
const tbody = document.querySelector(".tbody");

function getInputValues() {
  if (
    WebsiteInput.value === "" ||
    UserNameInput.value === "" ||
    PasswordInput.value === ""
  ) {
    alert("Please Fill Input");
  } else {
    // get Input Values
    const WebsiteInputValue = WebsiteInput.value;
    const UserNameInputValue = UserNameInput.value;
    const PasswordInputValue = PasswordInput.value;

    // create td for store data
    const newRow = document.createElement("tr");
    const websiteTd = document.createElement("td");
    const UserNameTd = document.createElement("td");
    const PasswordTd = document.createElement("td");
    const deleteTd = document.createElement("td");

    //   store data in td
    websiteTd.innerText = WebsiteInputValue;
    UserNameTd.innerText = UserNameInputValue;
    PasswordTd.innerText = PasswordInputValue;
    deleteTd.innerHTML = `<button class="Delete">Delete</button>`;

    // do empty all input when click on submit button
    WebsiteInput.value = "";
    UserNameInput.value = "";
    PasswordInput.value = "";

    tbody.addEventListener("click", function (event) {
      if (event.target.classList.contains("Delete")) {
        const rowToDelete = event.target.closest("tr");
        rowToDelete.remove();
      }
    });

    newRow.append(websiteTd, UserNameTd, PasswordTd, deleteTd);
    tbody.append(newRow);
  }
}

// add click Event in Submit button to get Input values
submitButton.addEventListener("click", getInputValues);

const deleteButtons = document.querySelectorAll(".Delete");

// Add click event listeners to delete buttons
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Perform delete operation or any other action
    const rowToDelete = button.closest("tr");
    rowToDelete.remove();
  });
});
