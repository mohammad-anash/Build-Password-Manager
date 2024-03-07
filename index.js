const WebsiteInput = document.getElementById("website");
const UserNameInput = document.getElementById("UserName");
const PasswordInput = document.getElementById("Password");
const submitButton = document.querySelector(".submit");
const copiedEl = document.querySelectorAll(".copied");

// Select tBody
const tbody = document.querySelector(".tbody");

function getInputValues() {
  if (
    WebsiteInput.value.trim() === "" ||
    UserNameInput.value.trim() === "" ||
    PasswordInput.value.trim() === ""
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

    appendCopiedDiv(websiteTd);
    appendCopiedDiv(UserNameTd);
    appendCopiedDiv(PasswordTd);

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

const deleteButtons = document.querySelectorAll(".Delete");

deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const rowToDelete = button.closest("tr");
    rowToDelete.remove();
  });
});

function appendCopiedDiv(tdElement) {
  const copiedDiv = document.createElement("div");
  copiedDiv.classList.add("copied");
  tdElement.appendChild(copiedDiv);

  copiedDiv.addEventListener("click", function () {
    const text = copiedDiv.parentElement.innerText;
    navigator.clipboard.writeText(text);
  });
}

submitButton.addEventListener("click", getInputValues);

copiedEl.forEach((copyButton) => {
  copyButton.addEventListener("click", function () {
    const parentText = copyButton.parentElement.innerText;
    navigator.clipboard.writeText(parentText);
  });
});
