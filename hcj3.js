      // 1. getElementById()
        let heading = document.getElementById("mainHeading");
        heading.textContent = "Employee Details";


        // 2. querySelector()
        let designation = document.querySelector("#designation");
        designation.textContent = "Designation: Senior Software Developer";


        // 3. getElementsByClassName()
        let information = document.getElementsByClassName("employee-info");

        for (let i = 0; i < information.length; i++) {
            information[i].style.color = "blue";
        }


        // 4. textContent
        let name = document.getElementById("employeeName");
        name.textContent = "Name: Nithin";


        // 5. innerHTML
        let department = document.getElementById("department");
        department.innerHTML = "Department: <b>Computer Science</b>";


        // 6. innerText
        let contact = document.getElementById("contact");
        let contactDetails = contact.innerText;

        document.getElementById("displayContact").innerText =
            contactDetails;


        // 7. style property

        // Change profile background color
        document.getElementById("profile").style.backgroundColor =
            "lightyellow";

        // Change employee name font size
        name.style.fontSize = "24px";

        // Change salary text color
        document.getElementById("salary").style.color = "green";

        // Add padding and border to employee details
        let details = document.getElementById("employeeDetails");

        details.style.padding = "20px";
        details.style.border = "3px solid blue";