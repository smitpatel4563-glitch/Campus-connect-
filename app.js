function filterNotices() {
    const filterValue = document.getElementById("categoryFilter").value;
    const notices = document.querySelectorAll(".notice-item");
    
    notices.forEach(notice => {
        if (filterValue === "all" || notice.getAttribute("data-category") === filterValue) {
            notice.style.display = "block";
        } else {
            notice.style.display = "none";
        }
    });
}

function handleRequestSubmit(event) {
    event.preventDefault();
    const category = document.getElementById("requestCategory").value;
    const description = document.getElementById("requestDescription").value;
    const feedback = document.getElementById("formFeedback");

    if (validateServiceRequest(category, description)) {
        feedback.className = "feedback success";
        feedback.textContent = "Request submitted successfully! Reference ID: #REQ-" + Math.floor(1000 + Math.random() * 9000);
        document.getElementById("requestForm").reset();
    } else {
        feedback.className = "feedback error";
        feedback.textContent = "Validation failed: Please select a category and provide at least 10 characters description.";
    }
}
