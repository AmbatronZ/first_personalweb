document.querySelectorAll('.offcanvas a').forEach(link => {
    link.addEventListener('click', () => {
        let offcanvas = document.querySelector('.offcanvas');
        let bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        bootstrapOffcanvas.hide(); // Menutup sidebar secara manual
    });
});

document.querySelectorAll('.offcanvas a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Get the target section ID
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Calculate the offset position
        const offset = 70; // Adjust based on your header height
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - offset;

        // Scroll to the adjusted position
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close the offcanvas menu (optional)
        let offcanvas = document.querySelector('.offcanvas');
        let bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        bootstrapOffcanvas.hide();
    });
});

// CRUD Logic for "Add Client Info"
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("crudForm");
    const tableBody = document.getElementById("dataTable");
    const clientRequestsCount = document.getElementById("clientRequestsCount");

    // Initialize Client Requests Count
    let requestCount = parseInt(clientRequestsCount.textContent, 10);

    // Event Listener for Form Submission
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page refresh

        // Get form values
        const name = document.getElementById("name").value;
        const order = document.getElementById("order").value;
        const whatsapp = document.getElementById("whatapps").value;

        // Add new data row to the table
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${requestCount + 1}</td>
            <td>${name}</td>
            <td>${order}</td>
            <td>${whatsapp}</td>
            <td>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </td>
        `;
        tableBody.appendChild(newRow);

        // Increment and update Client Requests Count
        requestCount += 1;
        clientRequestsCount.textContent = requestCount;

        // Reset the form
        form.reset();
    });

    // Event Listener for Delete Buttons
    tableBody.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            // Remove the row
            e.target.parentElement.parentElement.remove();

            // Decrement and update Client Requests Count
            requestCount -= 1;
            clientRequestsCount.textContent = requestCount;
        }
    });
});
