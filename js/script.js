let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "agent1.@cctb.ca",
  },
  {
    name: "Tom MacDonalds",
    phone: "(0191) 777 6495",
    email: "agent2.@cctb.ca",
  },
  {
    name: "Helen Richards",
    phone: "(0191) 0800 1111",
    email: "agent3.@cctb.ca",
  },
];

function addContact() {
  let userChoice;
  do {
    userChoice = prompt(
      "Choose an option: first, last, new, delete all, or quit",
    );
    if (userChoice === "first") {
      if (contacts.length > 0) {
        alert(
          "First contact: " +
            contacts[0].name +
            " / " +
            contacts[0].phone +
            " / " +
            contacts[0].email,
        );
      } else {
        alert("No contacts available.");
      }
    } else if (userChoice === "last") {
      if (contacts.length > 0) {
        alert(
          "Last contact: " +
            contacts[contacts.length - 1].name +
            " / " +
            contacts[contacts.length - 1].phone +
            " / " +
            contacts[contacts.length - 1].email,
        );
      } else {
        alert("No contacts available.");
      }
    } else if (userChoice === "new") {
      let newName = prompt("Enter name:");
      let newPhone = prompt("Enter phone number:");
      let newEmail = prompt("Enter email address:");

      // Validate input
      if (
        !newName ||
        !/^\d+$/.test(newPhone) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
      ) {
        alert("Invalid input. Please try again.");
        continue;
      }

      // Add new contact
      contacts.push({
        name: newName,
        phone: newPhone,
        email: newEmail,
      });
      updateContactList();
      alert("New contact added: " + newName);
    } else if (userChoice === "delete all") {
      if (confirm("Are you sure you want to delete all contacts?")) {
        contacts = [];
        updateContactList();
        alert("All contacts deleted.");
      }
    } else if (userChoice === "quit") {
      break;
    }
  } while (true);
}

function updateContactList() {
  const contactList = document.querySelector(".list-group");
  contactList.innerHTML = "";
  contacts.forEach((contact) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${contact.name} / ${contact.phone} / ${contact.email}`;
    contactList.appendChild(li);
  });
}

updateContactList();
