function submitForm(event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      branch: document.getElementById('branch').value,
      contact: document.getElementById('contact').value,
      email: document.getElementById('email').value,
      enrollment: document.getElementById('enrollment').value,
      dob: document.getElementById('dob').value,
      request: document.getElementById('request').value,
      idType: document.getElementById('idType').value,
      idNumber: document.getElementById('idNumber').value,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    displaySubmittedData();
  }

  function displaySubmittedData() {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    const userDataElement = document.getElementById('userData');

    if (storedData) {
      userDataElement.textContent = JSON.stringify(storedData, null, 2);
      document.getElementById('userForm').style.display = 'none';
      document.getElementById('displayData').style.display = 'block';
    }
  }

  function editData() {
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('displayData').style.display = 'none';
    localStorage.removeItem('formData');
  }

  // Display submitted data if available on page load
  window.onload = displaySubmittedData;