document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const messagesDiv = document.getElementById("messages");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      const subject = form.subject.value;
      const startDate = form.start_date.value;
      const endDate = form.end_date.value;
  
      if (!startDate || !endDate) {
        return showMessage("Please select both start and end dates.", "alert-danger");
      }
  
      if (new Date(startDate) > new Date(endDate)) {
        return showMessage("Start date cannot be later than end date.", "alert-danger");
      }
  
      setTimeout(() => {
        const subjectName = form.subject.options[form.subject.selectedIndex].text;
        showMessage(`Attendance data for ${subjectName} from ${startDate} to ${endDate} fetched successfully!`, "alert-success");
      }, 1000);
    });
  
    function showMessage(message, alertClass) {
      messagesDiv.innerHTML = `<div class="alert ${alertClass}">${message}</div>`;
      setTimeout(() => messagesDiv.innerHTML = "", 3000);
    }
  });
